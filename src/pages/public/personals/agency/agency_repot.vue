<template>
	<div class="agency_repot">
		<!-- <div class="header">
          下级报表
        </div> -->
		<div class="repot" v-if="toggleTeam =='repot'">
			<div class="title">
				<p v-for="(item,i) in dataLink" :key='i'>
					<label v-show="dataShow" v-if='i>0'>></label>
					<span @click="hanlderClick" data-getvalue="item">{{item.uname}}</span>
				</p>
			</div>
			<!-- 搜索 -->
			<div class="search">
				<RadioGroup v-model="day" @on-change="hanlderRadio">
					<Radio label="1">
						<span class="radio-span">今日</span>
					</Radio>
					<Radio label="2">
						<span class="radio-span">昨天</span>
					</Radio>
					<Radio label="3">
						<span class="radio-span">最近七天</span>
					</Radio>
				</RadioGroup>

				<DatePicker type="daterange" placement="bottom-end" placeholder="选择时间" style="width: 236px;margin-left:25px;"
				@on-change="hanlderTime"></DatePicker>

				<i-input class="mySearch" icon="android-search" @on-enter="searchSth" v-model="searchStr" placeholder="下级报表查询（会员账号）" style="width: 200px;margin-left:28px;" @on-click="searchSth"></i-input>
			</div>
			
			<!-- 表格和分页 -->
			<Table :columns="columns" :data="data" no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>
			<div class="page">
				<Page show-total :current="i" v-if="total>0" :page-size="8" :total="total" size="small" @on-change="hanlderPage"></Page>
			</div>

		</div>


		<!--报表 -->
		<div class="member" v-if="toggleTeam =='member'">
			<div class="title">
				<p v-for="(item,i) in dataLink1" :key='i'>
					<label v-show="dataShow1" v-if='i>0'>></label>
					<span @click="hanlderClick1" data-getvalue="item">{{item.titleName}}</span>
				</p>
			</div>
			<div class="search">
				
				<!-- <div class="searchBtn" @click="getTeamInfo">搜索</div> -->
				<RadioGroup v-model="day" @on-change="hanlderRadio">
					<Radio label="1">
						<span class="radio-span">今日</span>
					</Radio>
					<Radio label="2">
						<span class="radio-span">昨天</span>
					</Radio>
					<Radio label="3">
						<span class="radio-span">最近七天</span>
					</Radio>
				</RadioGroup>

				<DatePicker placeholder="选择时间" type="daterange" placement="bottom-end" style="width: 236px;margin-left:25px;"
				@on-change="hanlderTime"></DatePicker>
				<!-- <input class="searchInput" placeholder="下级报表查询（会员帐号）" v-model="uname"> -->
				<!-- 下级会员或者代理页面搜索功能 -->
				<!-- <i-input v-if="this.dataLink.length==1" icon="android-search" v-model="uname" placeholder="下级报表查询（会员账号）" style="width: 200px;margin-left:28px;" @on-click="lowerSearch"></i-input> -->
			
				<!-- 会员和代理的计算不一样 -->
				<div class="mathDiv cl" v-if="this.title=='会员'">
					<p>计算公式 <img class="explainPic" src="/static/public/image/userImg/question.png" alt="" style="vertical-align:middle;width:16px;height:16px;margin-bottom:3px;"></p>
					<div class="explainDiv">
						<p style="color:rgba(51,51,51,1);font-weight:600;">计算公式</p>
						<p style="border-bottom:1px solid #eee;">会员盈利=优惠金额+会员输赢</p>
						<p>优惠金额=自身返水+活动金额</p>
					</div>
				</div>

				<div class="mathDiv cl" v-if="this.title=='代理'">
					<p>计算公式 <img class="explainPic" src="/static/public/image/userImg/question.png" alt="" style="vertical-align:middle;width:16px;height:16px;margin-bottom:3px;"></p>
					<div class="explainDiv">
						<p style="color:rgba(51,51,51,1);font-weight:600;">计算公式</p>
						<p ><span >团队盈利=</span> 代理收入+优惠金额+会员输赢</p>
						<p ><span >代理收入=</span> 下级返水+下级返点</p>
						<p ><span>优惠金额</span>=自身返水+活动金额</p>
						<p ><span >有效人数：</span>所选时间内存款的人数（首存或非首存）</p>
						<p><span >首存人数：</span>所选时间或历史注册会员在所选时间内首存人数</p>
					</div>
				</div>



			</div>
			<!-- 会员报表 -->
			<div  v-show="contShow" >
				<div v-if="this.title=='会员'">
					<div class="agency-info">
						

						<ul class="contentUl_member cl">
							<li v-for="(item,index) in agencyData" :key="index">
								<div class="liItem">
									<!-- <p class="itemName" :class="{betClass:item.name=='投注金额'}" ><span @click="tapTest1(item)">{{item.name}}</span></p> -->
									<p class="itemName"  ><span>{{item.name}}</span></p>
									<p class="itemVal">{{item.value}}</p>

								</div>
							</li>
						</ul>
					</div>


					<div v-show="showTouzhu_member" class="betMoney_member">
						<div class="anoBox">
							<p class="itemTitle">投注金额详情</p>
								<img @click="closeWin1" src="/static/public/image/userImg/closebtn.png" alt="" style="position:absolute;right:23px;top:23px;width:12px;height:12px;cursor:pointer;">
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
						<p>盈利 = 中奖 -投注 + 优惠礼金（ 优惠和自身返水 ）</p>
					</div> -->
				</div>
				<!-- 代理报表 -->
				<div  v-if="this.title=='代理'">
					<div class="agency-info">
						<!-- <ul>
							<li v-for="(item,i) in agencyData.slice(0,4)" :key='i'>
								<img :src='iconSrc1[i]' />
								<div>
									<p>{{item.name}}</p>
									<p v-show="i==3?false:true">￥{{item.value}}</p>
									<p v-show="i!=3?false:true">{{item.value}}</p>
								</div>
							</li>
						</ul> -->

						<ul class="contentUl cl">
							<li v-for="(item,index) in agencyData" :key="index">
								<div class="liItem">
									<!-- <p class="itemName" :class="{betClass:item.name=='投注金额'}" ><span @click="tapTest(item)">{{item.name}}</span></p> -->
									<p class="itemName"  ><span >{{item.name}}</span></p>
									<p class="itemVal">{{item.value}}</p>

								</div>
							</li>
						</ul>



					</div>
					<div v-show="showTouzhu" class="betMoney">
						<p class="itemTitle">投注金额详情</p>
						<img @click="closeWin" src="/static/public/image/userImg/closebtn.png" alt="" style="position:absolute;right:23px;top:23px;width:12px;height:12px;cursor:pointer;">
						<ul class="betUl cl">
							<li class="cl">
								<div class="basicDiv typeDiv">类型</div>
								<div class="basicDiv typeDiv">投注金额</div>
								<div class="basicDiv typeDiv">投注人数</div>
							</li>
							<li v-for="(v,i) in moneyList" :key="i" class="betItem cl">
								<div class="betTitle basicDiv">{{v.name}}</div>
								<div class="betCash basicDiv">{{v.money}}</div>
								<div class="betNum basicDiv">{{v.num}}</div>
							</li>
						</ul>
					</div>


					<!-- <div class="quantity">
						<ul class="clearfloat">
							<li v-for="(item,i) in agencyData.slice(4)" :key='i' :class="{liSelect:liSelect == i}" @click="toggle(i)">
								<div>
									<p>{{item.name}}</p>
									<p><label v-show="i>3">￥</label>{{item.value}}</p>
								</div>
								<span></span>
							</li>
						</ul>
					</div> -->
					<!-- <div class="explain">
						<span>盈利计算公式：</span>
						<p>盈利 = 中奖 -投注 + 代理返点 + 优惠礼金（ 优惠和返水 （自身&下级））盈利计算 </p>
					</div> -->
				</div>
			</div>
			<div v-show="!contShow" style='margin:100px 0;text-align: center;'><img src='/static/public/image/userImg/no-data.png'
					alt=''></div>
		</div>

	</div>

</template>

<script>
	import mixins from './agency'
	export default {
		mixins: [mixins],
		data() {
			return {
				// 所有的下级
				allUsers:[],
				searchStr:"",
				moneyList:[
					{
						name:"棋牌",
						money:132465,
						num:3
					},
					{
						name:"电子",
						num:3,
						money:46564,
					},
					{
						name:"视讯",
						money:2323,
						num:3

					},
					{
						name:"彩票",
						money:33,
						num:3

					},

					{
						name:"体育",
						money:2333,
						num:3

					}

				],
				showTouzhu_member:false,
				showTouzhu:false,
				// 列表头部
				columns: [{
						title: '用户名',
						key: 'userName',
						align: 'center',
						width: 120
					},
					{
						title: '类型',
						key: 'type',
						align: 'center'
					},
					{
						title: '投注金额',
						key: 'bet',
						align: 'center',
						width: 120,
						render: (h, params) => {
							return h('span', params.row.bet)
						}
					},
					{
						title: '中奖金额',
						key: 'win',
						align: 'center',
						width: 100,
						render: (h, params) => {
							return h('span', params.row.win)
						}
					},
					{
						title: '团队返点',
						key: 'rebate',
						align: 'center',
						width: 80
					},

					{
						title: '优惠礼金',
						key: 'memberBonus',
						align: 'center',
						render: (h, params) => {
							return h('span', params.row.memberBonus)
						}
					},
					{
						title: '投注人数',
						key: 'countuser',
						align: 'center',
						width: 130,
						render: (h, params) => {
							if (params.row.countuser != 0) {
								return h('span', {

									class: 'listShowAA',

									on: {
										click: () => {
											if (params.row.type == '代理' && params.row.countuser != 0) {
												this.uid = params.row.uid
												this.uname = params.row.userName
												this.hanlderLink()
												this.i = 1
												this.getReportList()
											}
										}
									}
								}, params.row.countuser)
							};
							if (params.row.countuser == 0) {
								return h('span', {
									style: {
										color: '#000000'
									}
								}, params.row.countuser)
							}

						}
					},
					{
						title: '盈利',
						key: 'net',
						align: 'center',
						render: (h, params) => {
							return h('span', {
								class: 'listShowAA',
								on: {
									click: () => {
										this.toggleTeam = 'member'
										this.title = params.row.type
										this.uname = params.row.userName
										this.hanlderLink1(params)
										this.getTeamInfo(this.title)

									}
								}
							},params.row.net)
						}
					},
				],

				data: [], // 表格数组数据
				total: 0,
				i: 1,
				day: '1',
				contShow: false,
				st: this.getYMD(new Date()),
				et: this.getYMD(new Date()),
				toggleTeam: 'repot',
				title: '',
				dataLink: [{
					uname: '下级报表',
					uid: this.$store.state.mainState.userinfo.agencyInfo.uid
				}],
				dataLink1: [{
					titleName: '下级报表',
					canshu: this.$store.state.mainState.userinfo.agencyInfo.uid
				}],
				dataUid: [this.$store.state.mainState.userinfo.agencyInfo.uid],
				dataShow: false,
				dataShow1: false,
				agencyData: [],
				liSelect: 0,
				uname: this.$store.state.mainState.userinfo.userName,
				iconSrc: [
					'/static/public/image/proimt/p-netprofit@2x.png',
					'/static/public/image/proimt/p-balance@2xs.png',
					'/static/public/image/proimt/p-team@2x.png',
					'/static/public/image/proimt/p-money@2x.png'
				],
				iconSrc1: [
					'/static/public/image/proimt/p-netprofit@2x.png',
					'/static/public/image/proimt/p-balance@2x.png',
					'/static/public/image/proimt/p-depositors@2x.png',
					'/static/public/image/proimt/p-team@2x.png'
				]
			}
		},
		methods: {
			searchSth(){
				console.log(this.searchStr)
				
				if(!this.allUsers.length){
					return false;
				}
				if(!this.searchStr){
					// 刷新页面，请求数据
					this.getReportList();
					this.data=this.allUsers
					return false;
				}
				// 查询下级
				let searchUser=[];
				searchUser=this.allUsers.filter((item,index)=>{
					if(item.userName.includes(this.searchStr)){
						// 扎到了
						return item;
					}
				})
				this.data=searchUser
			},
			// 代理
			tapTest(item){
				if(item.name!='投注金额'){
					return false;
				}
				this.showTouzhu=!this.showTouzhu;
			},
			closeWin(){
				this.showTouzhu=false;
			},
			// 会员
			tapTest1(item){
				if(item.name!='投注金额'){
					return false;
				}
				this.showTouzhu_member=!this.showTouzhu_member;
			},
			closeWin1(){
				this.showTouzhu_member=false;
			},



			// 下级会员或者代理列表内查询
			lowerSearch(){
				if(this.title=='代理'){
					this.getTeamInfo()
				}else if(this.title=='会员'){
					this.getReportList()
				}
			},



			//列表数据
			getReportList() {
				this.$store.commit('loading', true)
				this.$postS(`agency/lowerReport21?page=${this.i}`, {
						uid: this.uid || this.$store.state.mainState.userinfo.agencyInfo.uid,
						st: this.st,
						et: this.et,
						pagesize: 8
					})
					.then(res => {
						if (res.code == 200) {
							// if(res.data.length==7){
							// 	res.data.push({value:"",name:""})
							// }

							this.allUsers=res.data.data;
							this.data = this.allUsers
							this.total = res.data.total
						}
						this.$store.commit('loading', false)
					})
			},
			//今天 昨天 最近七天
			hanlderRadio(val) {
				if (val == 1) {
					this.st = this.getYMD(new Date())
					this.et = this.getYMD(new Date())
				} else if (val == 2) {
					this.st = this.getYMD(new Date() - 1000 * 60 * 60 * 24)
					this.et = this.getYMD(new Date() - 1000 * 60 * 60 * 24)
				} else {
					this.st = this.getYMD(new Date() - 1000 * 60 * 60 * 24 * 6)
					this.et = this.getYMD(new Date())
				}
				if (this.toggleTeam == 'repot') {
					this.i = 1
					this.getReportList()
				} else {
					this.getTeamInfo()
				}
			},
			hanlderTime(date) {
				this.st = date[0]
				this.et = date[1]
				if (this.toggleTeam == 'repot') {
					this.getReportList()
				} else {
					this.getTeamInfo()
				}
			},
			// 选中页码
			hanlderPage(value) {
				this.i = value
				this.getReportList()
			},
			//会员报表
			getTeamInfo(memberType) {
				this.$store.commit('loading', true)
				console.log(this.dataLink)
				// if(memberType=="会员"){
				// 	// 会员
				// 	this.$postS("/member/memberReport",{
				// 		date:1
				// 	}).then((res)=>{
				// 		console.log(res);
				// 			if (res.code == 200) {
				// 				if (res.data != '') {
				// 					this.agencyData = res.data
				// 					this.contShow = true
				// 				} else {
				// 					this.contShow = false
				// 					this.$error(res.message)
				// 				}
								
				// 			} else {
				// 				this.contShow = false
				// 				this.$error(res.message)
				// 			}
				// 			this.$store.commit('loading', false)
				// 	})


				// }else {
				// 	// 代理
				// 	this.$postS("agency/agencyReport21", {
				// 		uname: this.uname,
				// 		st: this.st,
				// 		et: this.et,
				// 	})
				// 	.then(res => {
				// 		if (res.code == 200) {
				// 			if (res.data != '') {
				// 				this.agencyData = res.data
				// 				this.contShow = true
				// 			} else {
				// 				this.$error(res.message)
				// 			}

				// 		} else {
				// 			this.contShow = false
				// 			this.$error(res.message)
				// 		}
				// 		this.$store.commit('loading', false)
				// 	})
				// }






				this.$postS("agency/agencyReport21", {
						uname: this.uname,
						st: this.st,
						et: this.et,
					})
					.then(res => {
						if (res.code == 200) {
							if (res.data != '') {
								if(res.data.length==7){
									res.data.push({value:"",name:""})
								}
								this.agencyData = res.data
								this.contShow = true
							} else {
								this.$error(res.message)
							}

						} else {
							this.contShow = false
							this.$error(res.message)
						}
						this.$store.commit('loading', false)
					})

			},
			//面包屑  添加
			hanlderLink() {
				if (this.uname != this.$store.state.mainState.userinfo.userName) {
					let newObj = {}
					newObj.uname = this.uname
					newObj.uid = this.uid
					this.dataLink.push(newObj)
					//console.log(this.dataLink)
					this.dataShow = true
				}
			},
			hanlderLink1(params) {
				let newObj = {}
				newObj.titleName = this.titleName = ( params.row.type + '报表')
				newObj.canshu = this.canshu = params.row.userName
				this.dataLink1.push(newObj)
				//console.log(this.dataLink1)
				this.dataShow1 = true

			},
			//面包屑  跳转
			hanlderClick(e) {

				for (let i = 0; i < this.dataLink.length; i++) {

					let obj = this.dataLink[i];
					this.day='1'
					this.hanlderRadio(1)
					if (e.toElement.firstChild.data == '下级报表') {
						this.uid = obj.uid
						this.dataLink.splice(1)
					} else if (e.toElement.firstChild.data == obj.uname) {
						this.uid = obj.uid
						this.dataLink.splice(i + 1)
					}

				}
				// 清空搜索的数据
					this.searchStr=""
				this.getReportList()
			},
			hanlderClick1(e) {

				for (let i = 0; i < this.dataLink1.length; i++) {

					let obj = this.dataLink1[i];
					this.day='1'
					this.hanlderRadio(1)
					if (e.toElement.firstChild.data == '下级报表') {
						this.toggleTeam = 'repot'
						this.canshu = obj.canshu
						this.dataLink1.splice(1)
						this.getReportList()
						//console.log(e.toElement.firstChild.data)
					} else if (e.srcElement.lastChild.data == obj.titleName) {
						this.toggleTeam = 'member'
						this.canshu = obj.canshu
						this.dataLink1.splice(i + 1)
						this.getTeamInfo()
					}
				}
			},
			toggle(i) {
				this.liSelect = i
			}
		},
		created() {
			this.getReportList()
		}
	}
</script>

<style lang="less"> 
.mySearch{
	/deep/.ivu-input-icon{
		font-size:20px;
		top:2px;
	}
}
/deep/.ivu-input-icon {
	cursor:pointer;
}
	.agency_repot {
		border-bottom-right-radius:15px !important;
		overflow: hidden;
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

		.search {
			height: 66px;
			padding: 0 14px;
			line-height: 66px;
		}

		.repot {
			.page {
				position: absolute;
				right: 20px;
				bottom: 35px;
			}
		}

		.member {
			border-bottom-right-radius:15px !important;
		    overflow: hidden;

			.search {
				display: flex;
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
					margin-left:436px;
					color:#4674f6;
					.explainDiv{
						display:none;
						position:absolute;
						width:412px;
						// height:109px;
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
							// color:rgba(102,102,102,1);
							color:#666;
							border-bottom:1px solid #eee;
							span{
								color:#333;
							}
						}
						p:last-child{
							border:none;
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



				.searchBox{
					display:inline-block;
					width:234px;
					height:36px;
					border:1px solid rgba(219, 219, 219, 1);
					border-radius:5px;
				}


			}
			.agency-info {
				margin-top: 10px;
				padding-bottom: 40px;
				border-bottom-right-radius:15px !important;
				overflow: hidden;

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


				.contentUl_member{
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
				// 		padding-left: 20px;
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
				// 				padding: 0px 0 10px 0;
				// 			}

				// 			p:nth-child(2),
				// 			p:nth-child(3) {
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
				right:109px;
				// bottom:0;
				top:83px;
				// width:380px;
				// height:327px;
				background:rgba(255,255,255,1);
				box-shadow:0px 2px 9px 0px rgba(177,178,195,0.58);
				border-radius:4px;

				width:532px;
				height:327px;
				background:rgba(255,255,255,1);
				box-shadow:0px 2px 9px 0px rgba(177,178,195,0.58);
				border-radius:4px;
				z-index:4;
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
					width:468px;
					margin:0 34px;
					border-top:1px solid #e6eaef;
					border-left:1px solid #e6eaef;
					box-sizing: border-box;
					li{
						// width:312px;
						width:468px;
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
						.betNum{
							font-size:14px;
							font-family:MicrosoftYaHei;
							font-weight:400;
							color:rgba(102,102,102,1);
							// line-height:25px;
						}
						&:hover{
							cursor:pointer;
							background-color: #f9f9f9;
						}
					}
				}

			}
			.betMoney:after{
					content: "";
					border-top: solid 12px #fff;
					border-left: solid 10px #00800000;
					border-right: solid 10px #00800000;
					border-bottom: solid 0px #00800000;
					position: absolute;
					left: 45%;
					top: 100%;
			}
			.betMoney_member{
				text-align: center;
				position:absolute;
				right:366px;
				// bottom:0;
				top:243px;
				width:380px;
				height:327px;
				background:rgba(255,255,255,1);
				box-shadow:0px 2px 9px 0px rgba(177,178,195,0.58);
				border-radius:4px;
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
			.betMoney_member:before{
					content: "";
					border-bottom: solid 14px #fff;
					border-left: solid 10px #00800000;
					border-right: solid 10px #00800000;
					border-top: solid 0px #00800000;
					position: absolute;
					left: 88%;
					top: -13px;
			}




			.quantity {
				padding: 25px 0;
				border-bottom-right-radius:15px !important;
				overflow: hidden;

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
				margin-left: 10px;

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
