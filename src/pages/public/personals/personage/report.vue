<template>
	<div class="agency_index cl">
		<!-- <div class="header">
          代理报表
        </div> -->
		<div class="content cl">
			<div class="title" @click="hanlderClick">个人报表</div>
			<div class="search cl">
				<RadioGroup v-model="day" @on-change="hanlderRadio">
					<Radio label="1">
						<span class="radio-span">今日</span>
					</Radio>
					<Radio label="2">
						<span class="radio-span">昨天</span>
					</Radio>
					<Radio label="3">
						<span class="radio-span">本月</span>
					</Radio>
					<Radio label="4">
						<span class="radio-span">上月</span>
					</Radio>
				</RadioGroup>

				<DatePicker placeholder="选择时间" type="daterange" placement="bottom-end" style="width: 236px;margin-left:25px;"
				 @on-change="hanlderTime"></DatePicker>


				<div class="mathDiv cl">
					<p >计算公式 <img class="explainPic" src="/static/public/image/userImg/question.png" alt="" style="vertical-align:middle;width:16px;height:16px;margin-bottom:3px;"></p>
					<div class="explainDiv">
						<p style="color:rgba(51,51,51,1);font-weight:600;">计算公式</p>
						<p style="border-bottom:1px solid #eee;">会员盈利=优惠金额+会员输赢</p>
						<p>优惠金额=自身返水+活动金额</p>
					</div>
				</div>

			</div>

			<div v-if="contShow">
				<div class="agency-info cl">
					<!-- <ul>
						<li v-for="(item,i) in agencyData.slice(0,4)" :key='i'>
							<img :src='iconSrc[i]' />
							<div>
								<p>{{item.name}}</p>
								<p><span v-show="i==3?false:true">￥</span>{{item.value}}<span v-show="i==3?false:true">元</span></p>
							</div>
						</li>
					</ul>
				</div>
				<div class="quantity">
					<ul class="clearfloat">
						<li v-for="(item,i) in agencyData.slice(4)" :key='i' :class="{liSelect:liSelect == i}" @click="toggle(i)">
							<div>
								<p>{{item.name}}</p>
								<p><label v-show="i>2">￥</label>{{item.value}}</p>
							</div>
							<span></span>
						</li>
					</ul> -->


					<ul class="contentUl cl">
						<li v-for="(item,index) in agencyData" :key="index">
							<div class="liItem" :class="{noBorder:item.noBorder}">
								<!-- <p class="itemName" :class="{betClass:item.name=='投注金额'}" ><span @click="tapTest(item)">{{item.name}}</span></p> -->
								<p class="itemName"  ><span >{{item.name}}</span></p>
								<p class="itemVal">{{item.value}}</p>


							</div>
						</li>
					</ul>


					<!-- <ul class="contentUl cl">
						<li v-for="(item,index) in testData" :key="index">
							<div class="liItem" :class="{noBorder:item.noBorder}">
								<p class="itemName"  ><span >{{item.name}}</span></p>
								<p class="itemVal">{{item.value}}</p>


							</div>
						</li>
					</ul> -->


				</div>

				<div v-show="showTouzhu" class="betMoney">
					<div class="anoBox">
						<p class="itemTitle">投注金额详情</p>
							<img @click="closeWin" src="/static/public/image/userImg/closebtn.png" alt="" style="position:absolute;right:23px;top:23px;width:12px;height:12px;cursor:pointer;">
							<ul class="betUl cl">
								<li class="cl">
									<div class="basicDiv typeDiv">类型</div>
									<div class="basicDiv typeDiv">投注金额</div>
								</li>
								<li v-for="(v,i) in moneyList" :key="i" class="betItem cl">
									<div class="betTitle basicDiv">{{v.name}}</div>
									<div class="betCash basicDiv">{{v.money}}</div>
								</li>
							</ul>
					</div>
				</div>



				<!-- <div class="explain">
					<span>盈利计算公式：</span>
					<p>盈利 = 中奖 -投注 + 代理返点 + 优惠礼金（ 优惠和返水 （自身&下级））盈利计算 </p>
				</div> -->

			</div>

			<div v-show="!contShow" style='margin:100px 0;text-align: center;'>
				<img src='/static/public/image/userImg/no-data.png'
				 alt=''>
			</div>


		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				testData:[
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					{
						value:"a",
						name:"1"
					},
					// {
					// 	value:"a",
					// 	name:"1"
					// },
					// {
					// 	value:"a",
					// 	name:"1"
					// },
				],
				showTouzhu:false,
				agencyData:[
					// {name: "团队净盈利", value: "0.00"},
					// {name: "团队返点", value: "0.00"},
					// {name: "团队余额", value: "0.00"},
					// {name: "新增用户", value: 0},
					// {name: "下级总人数", value: "1"},
					// {name: "首存人数", value: 0},
					// {name: "投注人数", value: "0"},
					// {name: "投注金额", value: "0.00"},
					// {name: "中奖金额", value: "0.00"},
					// {name: "存款金额", value: "0.00"},
					// {name: "取款金额", value: "0.00"},
					// {name: "活动礼金", value: "0.00"},
				],
				moneyList:[
					{
						name:"棋牌",
						money:132465,
					},
					{
						name:"电子",
						money:46564,
					},
					{
						name:"视讯",
						money:2323,
					},
					{
						name:"彩票",
						money:33,
					},

					{
						name:"体育",
						money:2333,
					}

				],
				searchType:2,
				// 个人报表新参数
				startTime:"",
				endTime:"",
				date:1,
				day: '1',
				contShow: true,
				// agencyData: [],
				liSelect: 0,
				uname: this.$store.state.mainState.userinfo.userName,
				iconSrc: [
					'/static/public/image/proimt/p-netprofit@2x.png',
					'/static/public/image/proimt/p-balance@2x.png',
					'/static/public/image/proimt/p-depositors@2x.png',
					'/static/public/image/proimt/p-team@2x.png'
				]
			}
		},
		methods: {
			tapTest(item){
				if(item.name!='投注金额'){
					return false;
				}
				this.showTouzhu=!this.showTouzhu;
			},
			closeWin(){
				this.showTouzhu=false;
			},
			//个人报表
			getTeamInfo() {
				this.$store.commit('loading', true)
				let dateObj={};
				if(this.searchType==1){
					// 时间段
					dateObj={
						startTime:this.startTime,
						endTime:this.endTime
					}
				}else if(this.searchType==2){
					// 单选
					dateObj={
						date:this.date
					}
				}
				this.$postS("/member/memberReport",dateObj).then((res)=>{
					console.log(res);
						if (res.code == 200) {
							if (res.data != '') {
								// if(res.data.length==7){
								// 	res.data.push({value:"",name:""})
								// }
								let leftNum=0;
								// 测试实数
								// let testData=this.testData;
								// if(testData.length<4&&testData.length>0){
								// 	leftNum=4-testData.length
								// }else if(testData.length>4&&testData.length<8){
								// 	leftNum=8-testData.length
								// }else if(testData.length>8&&testData.length<12){
								// 	leftNum=12-testData.length
								// }else if(testData.length>12&&testData.length<16){
								// 	leftNum=16-testData.length
								// }	
								// for(var i=0;i<leftNum;i++){
								// 	this.testData.push({value:"",name:"",noBorder:true})
								// }
								if(res.data.length<4&&res.data.length>0){
									leftNum=4-res.data.length
								}else if(res.data.length>4&&res.data.length<8){
									leftNum=8-res.data.length
								}else if(res.data.length>8&&res.data.length<12){
									leftNum=12-res.data.length
								}else if(res.data.length>12&&res.data.length<16){
									leftNum=16-res.data.length
								}	
								for(var i=0;i<leftNum;i++){
									res.data.push({value:"",name:"",noBorder:true})
								}
								this.agencyData = res.data
								this.contShow = true
							} else {
								this.contShow = false
								this.$error(res.message)
							}
							
						} else {
							this.contShow = false
							this.$error(res.message)
						}
						this.$store.commit('loading', false)
				})


				// this.$postS("agency/agencyReport21", {
				// 		uname: this.uname,
				// 		st: this.st || this.getYMD(new Date()),
				// 		et: this.et || this.getYMD(new Date())
				// 	})
				// 	.then(res => {
				// 		if (res.code == 200) {
				// 			if (res.data != '') {
				// 				this.agencyData = res.data
				// 				this.contShow = true
				// 			} else {
				// 				this.contShow = false
				// 				this.$error(res.message)
				// 			}
							
				// 		} else {
				// 			this.contShow = false
				// 			this.$error(res.message)
				// 		}
				// 		this.$store.commit('loading', false)
				// 	})
			},
			hanlderRadio(val) {
				// if (val == 1) {
				// 	this.st = this.getYMD(new Date())
				// 	this.et = this.getYMD(new Date())
				// } else if (val == 2) {
				// 	this.st = this.getYMD(new Date() - 1000 * 60 * 60 * 24 )
				// 	this.et = this.getYMD(new Date() - 1000 * 60 * 60 * 24)
				// } else {
				// 	this.st = this.getYMD(new Date() - 1000 * 60 * 60 * 24 * 6)
				// 	this.et = this.getYMD(new Date())
				// }
				this.searchType=2;
				
				// 切换为单选
				if(val){
					this.date=val
				}else{
					console.log("未选择日期")
				}
				this.getTeamInfo()
			},
			hanlderTime(date) {
				// this.st = date[0]
				// this.et = date[1]
				// 切换为单选

				// console.log(date)
				if(!date[0]){
					// 没有选择事件
					this.searchType=2;
					this.date=3;
					this.getTeamInfo()
					return false;
				}
				this.searchType=1
				this.startTime=date[0];
				this.endTime=date[1]
				
				this.getTeamInfo()
			},
			toggle(i) {
				this.liSelect = i
			},
			hanlderClick(){
				this.day = '1'
				this.hanlderRadio(1)
				this.getTeamInfo()
			}
		},
		created() {
			this.$nextTick(() => {
				this.getTeamInfo();
			})
		},
		mounted() {

		}
	}
</script>

<style lang="less" scoped>
	.cl:after{
		content:"";
		display:block;
		clear:both;
	}
	.noBorder{
		border-right:0!important;
	}


	.agency_index {
		border-bottom-right-radius:15px !important;
		// overflow: hidden;
		padding: 0 14px;

		.content {
			.title {
				height: 66px;
				border-bottom: 1px solid #f3f3f3;
				font-size: 1.8em;
				padding-left: 10px;
				color: #696969;
				line-height: 85px;
				font-weight: 400;
				cursor: pointer;
			}

			.search {
				height: 64px;
				line-height: 64px;
				padding: 0 10px;
				// display: flex;
				align-items: center;

				.searchBtn {
					width: 80px;
					height: 36px;
					border-radius: 5px;
					background: linear-gradient(180deg, #ff3492, #ff1e4f);
					color: #fff;
					line-height: 36px;
					text-align: center;
					display: inline-block;
					margin: 0 20px;
					font-size: 18px;
					cursor: pointer;
				}

				.searchInput {
					width: 240px;
					height: 38px;
					font-size: 14px;
					background: #fdfdfd;
					border: 1px solid #f5f5f5;
					border-radius: 5px;
					padding-left: 8px;
					box-shadow: inset 0 1px 10px 0 rgba(0, 0, 0, 0.06);
					color: #666;
				}

				.searchInput:focus {
					outline: none !important;
					border: 1px solid rgba(254, 134, 93, 0.6);
					box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06), 0 1px 10px 5px rgba(254, 134, 93, 0.14);
				}



				.mathDiv{
					position:relative;
					font-size:15px;
					// margin-left:410px;
					float:right;
					color:#4674f6;
					.explainDiv{
						display:none;
						position:absolute;
						width:412px;
						height:109px;
						background:rgba(255,255,255,1);
						box-shadow:0px 2px 9px 0px rgba(177,178,195,0.58);
						border-radius:10px;
						top:50px;
						right:0;
						padding:13px 18px;
						z-index:3;
						
						p{
							// height:15px;
							line-height:28px;	
							font-size:14px;
							font-family:MicrosoftYaHei;
							// font-weight:bold;
							color:rgba(102,102,102,1);
						}
						cursor:pointer;
					}
					&:hover .explainDiv{
						display:block;
					}
					.explainPic{
						cursor:pointer;
					}
				}




			}

			.agency-info {
				margin-top: 10px;
				padding-bottom: 40px;
				.contentUl{
					// overflow:hidden;
					width:100%;
					// padding:0 16px;
					box-sizing: border-box;
					.betClass{
						color:#4674f6!important;
						cursor:pointer;
					}
					li{
						float: left;
						width:250px;
						height:122px;
						text-align: center;
						border-bottom:1px solid #dbdbdb;
						line-height: 122px;
						box-sizing: border-box;
						.liItem{
							display:inline-block;
							margin-top:33px;
							height:56px;
							width:100%;
							border-right:1px dashed rgba(219,219,219,1);
							position: relative;
							p{
								line-height: 28px;
							}
							.itemName{
								// height:17px;
								font-size:16px;
								font-family:MicrosoftYaHei;
								font-weight:400;
								color:rgba(51,51,51,1);
								// line-height:24px;
							}
							.itemVal{
								// height:13px;
								font-size:14px;
								font-family:MicrosoftYaHei;
								font-weight:bold;
								color:rgba(255,145,70,1);
								// line-height:24px;
							}
						}
					}
					li:nth-child(4n){
						.liItem{
							border-right:0;
						}
					}


				}


				// ul {
				// 	display: flex;

				// 	li {
				// 		flex: 1;
				// 		display: flex;
				// 		padding-left: 10px;
				// 		align-items: center;

				// 		img {
				// 			border-radius: 50%;
				// 			width: 62px;
				// 			margin-right: 20px;
				// 		}

				// 		div {
				// 			p:nth-child(1) {
				// 				color: #333;
				// 				font-weight: 400;
				// 				font-size: 18px;
				// 				padding: 0 0 10px 0;
				// 			}

				// 			p:nth-child(2) {
				// 				color: #ff9146;
				// 				font-size: 16px;
				// 			}
				// 		}
				// 	}
				// }
			}
			.betMoney{
				text-align: center;
				position:absolute;
				// right:105px;
				// top:360px;
				right:187px;
				top:155px;
				width:380px;
				height:327px;
				background:rgba(255,255,255,1);
				box-shadow:0px 2px 9px 0px rgba(177,178,195,0.58);
				border-radius:10px;
				z-index:2;
				.itemTitle{
					// width:312px;
					width:100%;
					line-height: 57px;
					height:57px;
					font-size:16px;
					font-family:MicrosoftYaHei;
					font-weight:400;
					color:rgba(51,51,51,1);

				}
				.betUl{
					width:312px;
					margin:0 34px;
					border-top:1px solid #e6eaef;
					border-left:1px solid #e6eaef;
					box-sizing: border-box;
					li{
						width:312px;
						height:38px;
						
						.basicDiv{
							float: left;
							width:156px;
							height:38px;
							border-right:1px solid #e6eaef;
							border-bottom:1px solid #e6eaef;
							box-sizing:border-box;
							line-height: 38px;
						}


						.typeDiv{
							// height:14px;
							font-size:14px;
							font-family:MicrosoftYaHei-Bold;
							font-weight:bold;
							color:rgba(51,51,51,1);
							// line-height:25px;
						}


						.betTitle{
							// width:29px;
							// height:14px;
							font-size:14px;
							font-family:MicrosoftYaHei;
							font-weight:400;
							color:rgba(102,102,102,1);
						}
						.betCash{
							// width:28px;
							// height:11px;
							font-size:14px;
							font-family:MicrosoftYaHei;
							font-weight:400;
							color:rgba(102,102,102,1);
							// line-height:25px;
						}
						// .anoBox{
						// 	&:hover{
						// 		cursor:pointer;
						// 		background-color: #f9f9f9;
						// 	}
						// }
						&:hover{
							cursor:pointer;
							background-color: #f9f9f9;
						}
					}
				}
			}
			.betMoney:before{
					content: "";
					// border-bottom: solid 14px #fff;
					// border-left: solid 10px #00800000;
					// border-right: solid 10px #00800000;
					// border-top: solid 0px #00800000;
					// position: absolute;
					// left: 88%;
					// top: -13px;

					position:absolute;
					border-left: 14px solid #fff;
					border-right: 0;
					border-bottom: 10px solid #00800000;
					border-top: 10px solid #00800000;
					left: 100%;
					top: 24px;
			}


			.quantity {
				padding: 25px 0;

				ul {
					li {
						float: left;
						width: 25%;
						height: 80px;
						cursor: pointer;
						padding-left: 25px;
						margin-bottom: 55px;
						position: relative;

						p:nth-child(1) {
							font-size: 16px;
							color: #999;
						}

						p:nth-child(2) {
							font-size: 20px;
							color: #333;
							margin-top: 20px;
						}

						div {
							padding: 15px;
							padding-left: 30px;
						}

						span {
							display: inline-block;
							width: 1px;
							height: 60px;
							position: absolute;
							top: 10px;
							right: 1px;
							background-color: #E4E4E4;
						}

						&:nth-child(4) span,
						&:nth-child(8) span {
							width: 0;
						}

						&.liSelect div {
							width: 176px;
							height: 80px;
							background: rgba(245, 245, 245, 1);
							border-radius: 10px;
							background: #f5f5f5;

							p:nth-child(2) {
								color: #f60;
							}
						}
					}
				}
			}

			.explain {
				width: 474px;
				height: 134px;
				background: rgba(254, 254, 242, 1);
				line-height: 25px;
				padding: 40px 13px;
				box-sizing: border-box;
				position: absolute;
				bottom: 25px;

				span {
					color: #FF6600;
					font-size: 14px;
				}

				p {
					color: #999999;
					font-size: 12px;
				}
			}
		}
	}
</style>
