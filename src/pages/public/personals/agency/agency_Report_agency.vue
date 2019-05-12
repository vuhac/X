<template>
	<div class="agency_index">
		<!-- <div class="header">
          代理报表
        </div> -->
		<div class="content">
			<div class="title" @click="hanlderClick">代理报表</div>
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

				<DatePicker placeholder="选择时间" type="daterange" placement="bottom-end" style="width: 236px;margin-left:25px;"
				 @on-change="hanlderTime"></DatePicker>
			</div>

			<div v-if="contShow">
				<div class="agency-info">
					<ul>
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
					</ul>
				</div>

				<div class="explain">
					<span>盈利计算公式：</span>
					<p>盈利 = 中奖 -投注 + 代理返点 + 优惠礼金（ 优惠和返水 （自身&下级））盈利计算 </p>
				</div>

			</div>

			<div v-show="!contShow" style='margin:100px 0;text-align: center;'><img src='/static/public/image/userImg/no-data.png'
				 alt=''></div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				day: '1',
				contShow: true,
				agencyData: [],
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
			getTeamInfo() {
				this.$store.commit('loading', true)
				this.$postS("agency/agencyReport21", {
						uname: this.uname,
						st: this.st || this.getYMD(new Date()),
						et: this.et || this.getYMD(new Date())
					})
					.then(res => {
						if (res.code == 200) {
							if (res.data != '') {
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
			},
			hanlderRadio(val) {
				if (val == 1) {
					this.st = this.getYMD(new Date())
					this.et = this.getYMD(new Date())
				} else if (val == 2) {
					this.st = this.getYMD(new Date() - 1000 * 60 * 60 * 24 )
					this.et = this.getYMD(new Date() - 1000 * 60 * 60 * 24)
				} else {
					this.st = this.getYMD(new Date() - 1000 * 60 * 60 * 24 * 6)
					this.et = this.getYMD(new Date())
				}
				this.getTeamInfo()
			},
			hanlderTime(date) {
				this.st = date[0]
				this.et = date[1]
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
	.agency_index {
		border-bottom-right-radius:15px !important;
		overflow: hidden;
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
			}

			.agency-info {
				margin-top: 10px;
				padding-bottom: 40px;

				ul {
					display: flex;

					li {
						flex: 1;
						display: flex;
						padding-left: 10px;
						align-items: center;

						img {
							border-radius: 50%;
							width: 62px;
							margin-right: 20px;
						}

						div {
							p:nth-child(1) {
								color: #333;
								font-weight: 400;
								font-size: 18px;
								padding: 0 0 10px 0;
							}

							p:nth-child(2) {
								color: #ff9146;
								font-size: 16px;
							}
						}
					}
				}
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
