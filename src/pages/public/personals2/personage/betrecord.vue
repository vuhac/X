<template>
	<div class="bet_box">
		<!-- <div class="header">
                    投注记录
            </div> -->
		<div class="title titles" v-show="showNEI">
			<p v-for="(item,i) in dataLink" :key='i'>
				<span @click="hanlderClick(item)" data-getvalue="item"><label v-if="i>0">></label>{{item}}</span>
			</p>
		</div>
		<div class="title" v-show="!showNEI" @click="hanlderClick1">
			投注记录
		</div>
		<div v-show="betShow">
			<div class="betrecord" v-if="showContent == 'betrecord'">

				<div class="search">
					<RadioGroup v-model="day" @on-change="hanlderRadio">
						<Radio label="1">
							<span class="radio-span">本周</span>
						</Radio>
						<Radio label="2">
							<span class="radio-span">上周</span>
						</Radio>
						<Radio label="3">
							<span class="radio-span">本月</span>
						</Radio>
						<Radio label="4">
							<span class="radio-span">上月</span>
						</Radio>
					</RadioGroup>
					<Select v-model="type" @on-change="hanlderList">
						<Option v-for="(item,i) in gameData" :key="i" :value="item.type">{{item.name}}</Option>
					</Select>

				</div>

				<Table :columns="columns" :data="data" no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>

				<div class="totalBet" v-if="validBetAmount">
					总投注：
					<span style="color:red">{{total_bet}}</span> ，总输赢：
					<span style="color:red;">{{total_win}}</span>
				</div>
				<div class="page">
					<Page show-total :current="i" v-if="total>0" :total="total" size="small" @on-change="hanlderPage"></Page>
				</div>
			</div>

			<!-- 投注记录详情页面 -->
			<div class="bet" v-if="showContent == 'bet'">

				<div class="search">
					<span>
						<label class="text">类型：</label>
						<Select v-model="platform" @on-change="hanlderPlatform" class="platform-select">
							<Option v-for="(item,i) in gameDetail.list" :key="i" :value="item.platform">{{item.name}}</Option>
						</Select>
					</span>

					<span v-if="statusShow">
						<label class="text">状态：</label>
						<Select v-model="status" @on-change="hanlderStatus">
							<Option v-for="(item,i) in statusList" :key="i" :value="i">{{item}}</Option>
						</Select>
					</span>

				</div>

				<Table :columns="columns1" :data="data1" no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>

				<div class="totalBet" v-if="validBetAmount1">
					总投注：
					<span style="color:red">{{total_bet1}}</span> ，总输赢：
					<span style="color:red;">{{total_win1}}</span>
				</div>

				<div class="page">
					<Page show-total :current="i" v-if="total>0" :page-size="8" :total="total" size="small" @on-change="hanlderPages"></Page>
				</div>
			</div>

		</div>
		
	</div>
</template>

<script>
	import getSystemDate from "./time";
	import bet from "./bet.js";
	import moment from "moment";
	export default {
		data() {
			return {
				// 列表头部
				columns: [{
						title: "时间",
						align: "center",
						render: (h, params) => {
							return h("div", [
								h(
									"span", {
										style: {
											display: "inline-block",
											marginRight: "20px"
										}
									},
									params.row.date.date
								),
								h("span", params.row.date.week)
							]);
						}
					},
					{
						title: "笔数",
						key: "bet_count",
						align: "center"
					},
					{
						title: "投注金额",
						key: "bet_amount",
						align: "center"
					},
					{
						title: "输赢",
						key: "bet_win_amount",
						align: "center"
					},
					{
						title: "操作",
						key: " ",
						align: "center",
						render: (h, params) => {
							return h("div", [
								h(
									"span", {
										attrs: {
											class: "deleteLink"
										},
										class: 'listShowAA',
										on: {
											click: () => {
												this.showNEI = true;
												this.date = params.row.date.date;
												this.showContent = "bet";
												this.getBetType();
												//this.hanlderMoney(params);
											}
										}
									},
									"详情"
								)
							]);
						}
					}
				],
				Lottery: [{
						title: "游戏类型",
						align: "center",
						key: "platform",
						width: 90,
						render: (h, params) => {
							return h(
								"span", {
									style: {
										color: params.row.status === 4 ? "#aaaaaa" : ""
									}
								},
								params.row.platform
							);
						}
					},
					// {
					// 	title: "订单编号",
					// 	align: "center",
					// 	width: 140,
					// 	render: (h, params) => {
					// 		return h("div", [
					// 			h(
					// 				"span", {
					// 					style: {
					// 						display: "inline-block",
					// 						width: "100%",
					// 						whiteSpace: "nowrap",
					// 						overflow: "hidden",
					// 						textOverflow: "ellipsis",
					// 						color: params.row.status === 4 ? "#aaaaaa" : ""
					// 					}
					// 				},
					// 				params.row.billNo
					// 			)
					// 		]);
					// 	}
					// },
					{
						title: "期数",
						align: "center",
						key: "issue",
						width: 100,
						render: (h, params) => {
							return h(
								"span", {
									style: {
										color: params.row.status === 4 ? "#aaaaaa" : ""
									}
								},
								params.row.issue
							);
						}
					},

					{
						title: "投注时间",
						align: "center",
						key: "betTime",
						width: 128,
						render: (h, params) => {
							return h("div", [
								h(
									"span", {
										style: {
											color: params.row.status === 4 ? "#aaaaaa" : ""
										}
									},
									moment
									.unix(params.row.betTime - 0)
									.format("YYYY-MM-DD HH:mm:ss")
								)
							]);
						}
					},
					{
						title: "投注金额",
						align: "center",
						key: "betAmount",
						render: (h, params) => {
							return h("div", [
								h(
									"span", {
										style: {
											color: params.row.status === 4 ? "#aaaaaa" : ""
										}
									},
									params.row.betAmount
								)
							]);
						}
					},

					{
						title: "彩种",
						align: "center",
						key: "lotteryName",
						width: 100,
						render: (h, params) => {
							return h("div", [
								h(
									"span", {
										style: {
											color: params.row.status === 4 ? "#aaaaaa" : ""
										}
									},
									params.row.lotteryName
								)
							]);
						}
					},
					{
						title: "玩法",
						align: "center",
						key: "playwayName",
						render: (h, params) => {
							return h("div", [
								h(
									"span", {
										style: {
											display: "inline-block",
											width: "100%",
											whiteSpace: "nowrap",
											overflow: "hidden",
											textOverflow: "ellipsis",
											color: params.row.status === 4 ? "#aaaaaa" : ""
										}
									},
									params.row.playwayName
								)
							]);
						}
					},

					{
						title: "玩号",
						align: "center",
						key: "ball",
						render: (h, params) => {
							return h("div", [
								h(
									"span", {
										style: {
											cursor: "pointer",
											color: params.row.status === 4 ? "#aaaaaa" : ""
										}
									},params.row.ball ? params.row.ball : "无"
									// [
									// 	h("div", "详情"),
									// 	h("div", {
									// 	   slot: "title"
									// 	}, params.row.lotteryName),
									// 	h(
									// 		"div", {
									// 			slot: "content",
									// 			style: {
									// 				width: "137px",
									// 				whiteSpace: "pre-wrap",
									// 				color: params.row.status === 4 ? "#aaaaaa" : ""
									// 			}
									// 		},
									// 		params.row.ball ? params.row.ball : "无"
									// 	)
									// ]
								)
							]);
						}
					},
					{
						title: "下注内容",
						align: "center",
						key: "betInfo",
						width: 130,
						// render: (h, params) => {
						// 	return h("div", [
						// 		h(
						// 			"span", {
						// 				style: {
						// 					display: "inline-block",
						// 					width: "100%",
						// 					whiteSpace: "nowrap",
						// 					overflow: "hidden",
						// 					textOverflow: "ellipsis",
						// 					color: params.row.status === 4 ? "#aaaaaa" : ""
						// 				}
						// 			},params.row.betInfo
									
						// 		)
						// 	]);
						// }
						  render: (h, params) => {
							let Template = {
								props: ["row"],
								data() {
									return {
										style: {
										width: "120px",
										overflow: "hidden",
										textOverflow: "ellipsis",
										whiteSpace: "nowrap",
										color: params.row.status === 4 ? "#aaaaaa" : ""
										}
									};
								},
								template: `
									<Poptip placement="bottom" trigger="hover">
										<div :style="style">{{row.betInfo}}</div>
										<div slot="content">{{row.betInfo}}</div>
									</Poptip>`
							};
							if ((params.row.betInfo).length>3) {
								return h(Template, {
									props: {
									row: params.row
									}
								});
							} else {
								return h("span",{
									style:{
										color: params.row.status === 4 ? "#aaaaaa" : ""
									}
								},params.row.betInfo);
							}
						}
						 
					},

					{
						title: "输赢",
						align: "center",
						key: "netAmount",
						render: (h, params) => {
							return h("div", [
								h(
									"span", {
										style: {
											color: params.row.status ===1?(params.row.status === 4 ? "#aaaaaa" : "red") :(params.row.status === 4 ? "#aaaaaa" : "")
										}
									},
									params.row.netAmount
								)
							]);
						}
					},
					{
						title: "状态",
						align: "center",
						key: "status",
						render: (h, params) => {
							let text;
							switch (params.row.status) {
								case 0:
									text = "待开奖";
									break;
								case 1:
									text = "已中奖";
									break;
								case 2:
									text = "未中奖";
									break;
								case 3:
									text = "和";
									break;
								case 4:
									text = "已撤销";
									break;
								case 5:
									text = "系统撤销";
									break;
							}
							return h("div", [
								h(
									"span", {
										style: {
											color: params.row.status === 4 ? "#aaaaaa" : ""
										}
									},
									text
								)
							]);
						}
					},
					{
						title: "操作",
						align: "center",
						render: (h, params) => {
							let text = "撤单";
							if (params.row.status == 0) {
								return h("div", [
									h(
										"span", {
										    class: 'listShowAA',
											on: {
												click: () => {
													this.getCanel(params);
												}
											}
										},
										text
									)
								]);
							};
							if (params.row.status != 0) {
								return h("div", [
									h(
										"span", {
											style: {
												
												color: "#aaaaaa" 
											}
											
										},
										text
									)
								]);
							}
						}
					}
				],

				data: [],
				day: "1",
				dates: "",
				i: 1, //当前页码
				time_start: getSystemDate.getCurrWeekDays()[0],
				time_end: this.getYMD(new Date()),

				type: "",
				nexttime: 0,

				validBetAmount: "",
				total_bet: "",
				total_win: "",

				validBetAmount1:'',
				total_bet1:'',
				total_win1:'',

				showContent: "betrecord",

				gameData: [],
				gameDetail: {},
				lotterShow: true,

				//详情页面参数
				days: "1",
				//gameNum: "VR彩票",
				platform: "",
				betView: "bet2",
				columns1: bet.Live,
				data1: [],
				i: 1, //当前页码

				total: 1, //page

				timeStart: this.getYMD(new Date()),
				timeEnd: this.getYMD(new Date()),
				type: "",
				status: "",
				statusList: ["待开奖", "已中奖", "未中奖", "和", "已撤销"],
				statusShow: true,
				date: this.getYMD(new Date()),

				betTime: 0,
				id: 12,
				dataLink: ["投注记录"],
				showNEI: false,
				betShow:false
			};
		},
		methods: {
			hanlderRadio(val) {
				if (val == "1") {
					this.time_start = getSystemDate.getCurrWeekDays()[0];
					this.time_end = this.getYMD(new Date());
				} else if (val == "2") {
					this.time_start = getSystemDate.getLastWeekDays()[0];
					this.time_end = getSystemDate.getLastWeekDays()[1];
				} else if (val == "3") {
					this.time_start = getSystemDate.getCurrMonthDays()[0];
					this.time_end = this.getYMD(new Date());
				} else {
					this.time_start = getSystemDate.getLastMonthDays()[0];
					this.time_end = getSystemDate.getLastMonthDays()[1];
				}
				this.i = 1;
				this.getGameRecord();
			},
			hanlderList(name) {
				console.log(this.gameData);
				this.gameData.forEach(v => {
					if (v.type == name) {
						this.gameDetail = v;

						this.dataLink.splice(1);	
						this.dataLink.push(this.gameDetail.name);
					}
				});
				this.i = 1;
				this.platform = "";

				switch (name) {
					case "CT_LOTTERY":
						this.statusShow = true;
						this.lotterShow = false;
						this.gameName = this.gameDetail.list[0].gameName;
						this.statusList = ["待开奖", "已中奖", "未中奖", "和", "已撤销"];
						this.i = 1;
						this.status = "";
						this.columns1 = this.Lottery;
						break;
					case "GAME":
						this.statusShow = false;
						this.lotterShow = true;
						this.columns1 = bet.Live;
						this.gameName = "";
						this.i = 1;
						break;
					case "SPORT":
						this.statusShow = true;
						this.lotterShow = true;
						this.gameName = "";
						this.statusList = ["未结算", "已结算", "无效"];
						this.status = "";
						this.columns1 = bet.sport;
						this.i = 1;
						break;
					case "LIVE":
						this.statusShow = false;
						this.gameName = "";
						this.lotterShow = true;
						this.columns1 = bet.Live;
						this.i = 1;
						break;
				
					case "CHESS":
						this.statusShow = false;
						this.i = 1;
						this.status = "";
						this.columns1 = bet.chess;
						break;
				}
				this.getGameRecord();
			},
			// 查询记录
			getGameRecord() {
				console.log(this.type.toLowerCase());
				this.$store.commit("loading", true);
				let param = {
					time_start : this.time_start,
					time_end : this.time_end,
					 game_class : this.type.toLowerCase() == "game" ?
							"slot" :
							this.type.toLowerCase() == "ct_lottery" ?
							"lottery" :
							this.type.toLowerCase(),
					limit : 8,
					page : this.i
				};
				this.$getS("member/bet-record/summary?page=$(this.i)"+ new Date().getTime() , param).then(
					res => {
						if (res && res.code == 200) {
							this.data = res.data.list;
							this.total = res.data.total;

							this.validBetAmount = res.data.amount;
							this.total_bet = res.data.amount.total_bet;
							this.total_win = res.data.amount.total_win;
						}
					
					    this.betShow = true
				
						this.$store.commit("loading", false);
					}
				);
			},

			getCanel(params) {
				let data = {
					betTime: params.row.betTime,
					recordId: params.row.id
				};
				this.$http.post(`${this.$HOST_NAME}/lottery/cancel`, data).then(res => {
					if (res.code == 200) {
						this.text = "已撤单";
						this.$set(this.Lottery[params.index], "status", 4);
						params.row.status = 4;
						this.$success(res.data);
						this.getBetType();
					} else {
						this.$error(res.message);
					}
				});
			},

			// 选择大类里的类型
			hanlderPlatform(val) {
				this.platform = val;
				this.i = 1;
				this.getBetType();
			},
			hanlderGameName(val) {
				this.gameName = val;
				this.getBetType();
			},

			// 分页
			hanlderPage(value) {
				this.i = value;
				this.getGameRecord();
			},

			hanlderPages(value) {
				this.i = value;
				this.getBetType();
			},

			//详情页面方法
			//面包屑  跳转
			hanlderClick(item) {
				if (item === "投注记录") {
					this.showNEI = false;
					this.showContent = "betrecord";
					this.i = 1;
					this.day='1'
					this.hanlderRadio(1)
					this.getGameRecord();
				} else {
					this.showContent = "bet";
					this.platform = '';
					this.status = '';
					this.hanlderStatus();
					this.getBetType();
				}
				
			},
			hanlderClick1(){
				this.day='1'
				this.hanlderRadio(1)
				this.getGameRecord();
			},
			// 选择状态
			hanlderStatus(i) {
				this.status = i;
				this.i = 1;
				this.getBetType();
			},

			//子查询记录
			getBetType(pageNum) {
				this.$store.commit("loading", true);
				this.$getS(`member/bet-record/list?page=` + this.i + new Date().getTime(), {
					date: this.date,
					game_platform: this.platform,
					game_class: this.type.toLowerCase() == "game" ?
						"slot" :
						this.type.toLowerCase() == "ct_lottery" ?
						"lottery" :
						this.type.toLowerCase(),
					status: this.status !== "" ? this.status : this.status,
					limit: 8,
					page: this.i
				}).then(res => {
					if (res.code == 200) {
						this.data1 = res.data.data.list;
						this.total = res.data.total;
						this.validBetAmount1 = res.data.data.amount;
						this.total_bet1 = res.data.data.amount.total_bet;
						this.total_win1 = res.data.data.amount.total_win;
					} 
					this.$store.commit("loading", false);
				});
			}
		},
		created() {
			this.$nextTick(() => {
				let gameList = JSON.parse(localStorage.getItem("gameList"));
				let cai = {} ;
				gameList.forEach((v,i)=>{
					if(gameList[i].name == 'VR彩票'){
						gameList.splice(i,1)
						
					}
					if(gameList[i].name == '彩票游戏'){
						cai = gameList.splice(i,1)
					}
				})

				this.columns1 = this.Lottery;
				
				gameList.unshift(cai[0]);
				if(this.$websiteName=='t500w' || this.$websiteName =='jhcp' || this.$websiteName =='fczx'||this.$websiteName =='cjw'){
						gameList = gameList.filter(item => item.name =='彩票游戏' || item.name=='棋牌游戏');
				}
				console.log(gameList)
				this.gameData = gameList;
				this.gameDetail = gameList[0];
				this.type = gameList[0].type;
				this.dataLink.push(gameList[0].name);
				this.getGameRecord();
			});
		},
		beforeDestroy() {
			this.$store.commit("loading", false);
		}
		
	};
</script>

<style lang="less" scoped>
	.bet_box {
		border-bottom-right-radius:15px !important;
		overflow: hidden;
		/deep/ .ivu-poptip-body {
			padding: 5px 0;
		}
		.title {
			margin: 0 14px;
			height: 66px;
			border-bottom: 1px solid #f3f3f3;
			font-size: 1.8em;
			padding-left: 10px;
			color: #696969;
			line-height: 85px;
			font-weight: 400;
			cursor: pointer;

			p {
				display: inline-block;
			}
		}

		.titles {
			cursor: pointer;
		}

		.search {
			height: 64px;
			line-height: 64px;
			padding: 0 16px;

			.searchSpan {
				display: inline-block;
				width: 80px;
				height: 36px;
				line-height: 36px;
				text-align: center;
				font-size: 1.6em;
				font-weight: 200;
				color: #fff;
				background: linear-gradient(180deg, #ff3492, #ff1e4f);
				border-radius: 5px;
				// margin-left: 18px;
				letter-spacing: 5px;
				cursor: pointer;
			}

			.text {
				margin-left: 10px;
				font-size: 14px;
			}

			.ivu-select {
				width: 126px;
			}

			.platform-select {
				// margin-left: 10px;
				margin-right: 5px;

				/deep/ .ivu-select-dropdown-list {
					max-height: 520px;
				}
			}
		}

		.totalBet {
			position: absolute;
			bottom: 25px;
			left: 260px;
			font-size: 16px;
		}

		.page {
			position: absolute;
			right: 25px;
			bottom: 20px;

			/deep/ .ivu-page.mini .ivu-page-total {
				vertical-align: middle;
			}
		}

		//详情页面
		.bet {
			.ivu-select[data-v-9e73ef78] {
				margin-bottom: 4px;
			}

			.search {
				display: flex;
				align-items: center;
			}

			.ivu-poptip-body-content {
				padding: 6px;
			}
		}
	}
</style>
