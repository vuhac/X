<template>
  <div class="ousideTimerWrap item item2">
    <audio ref="audio_player" src="/static/public/mp3/lottery/1.ogg"></audio>
    <div class="time-title-wrap">
      <div class="palyMusic">
        <i v-if="ifPlayMusic" @click="playMusic" class="iconfont icon-laba i1"></i>
        <i v-if="!ifPlayMusic" @click="playMusic" class="iconfont icon-nosound i2"></i>
      </div>
      <div class="time-title" v-if="!timer.djs_next_kaipan && timer.timerModel!='fengpan'">已开盘，距离投注截止还有：</div>
      <div class="time-title" v-else>已封盘，距离下期开始时间还有：</div>
    </div>

    <div class="time-wrap" v-if="timer.timerModel=='hours'">
      <!-- 时时彩没天的 -->
      <div class="t ">
        {{hoursDatas.hou>9?hoursDatas.hou.toString().split('')[0]:0}}
      </div>
      <div class="t ">
        {{hoursDatas.hou>9?hoursDatas.hou.toString().split('')[1]:hoursDatas.hou}}
      </div>
      <div class="dotted">:</div>
      <div class="t ">
        {{hoursDatas.min>9?hoursDatas.min.toString().split('')[0]:0}}
      </div>
      <div class="t ">
        {{hoursDatas.min>9?hoursDatas.min.toString().split('')[1]:hoursDatas.min}}
      </div>
      <div class="dotted">:</div>
      <div class="t ">
        {{hoursDatas.sec>9?hoursDatas.sec.toString().split('')[0]:0}}
      </div>
      <div class="t last">
        {{hoursDatas.sec>9?hoursDatas.sec.toString().split('')[1]:hoursDatas.sec}}
      </div>
    </div>
    <div class="time-wrap" v-if="timer.timerModel=='days'">
      <!-- {{daysDatas.sec}} -->
      <div class="t ">
        {{daysDatas.day>9?daysDatas.day.toString().split('')[0]:0}}
      </div>
      <div class="t ">
        {{daysDatas.day>9?daysDatas.day.toString().split('')[1]:daysDatas.day}}
      </div>
      <div class="dotted" :class="{'active':timer.timerModel=='days'}">:</div>
      <div class="t ">
        {{daysDatas.hou>9?daysDatas.hou.toString().split('')[0]:0}}
      </div>
      <div class="t ">
        {{daysDatas.hou>9?daysDatas.hou.toString().split('')[1]:daysDatas.hou}}
      </div>
      <div class="dotted" :class="{'active':timer.timerModel=='days'}">:</div>
      <div class="t ">
        {{daysDatas.min>9?daysDatas.min.toString().split('')[0]:0}}
      </div>
      <div class="t last">
        {{daysDatas.min>9?daysDatas.min.toString().split('')[1]:daysDatas.min}}
      </div>
    </div>
    <div class="time-wrap " v-if="timer.timerModel=='minute'">
      <div class="t ">0</div>
      <div class="t ">0</div>
      <div class="dotted">:</div>
      <div class="t ">
        {{hoursDatas.min>9?hoursDatas.min.toString().split('')[0]:0}}
      </div>
      <div class="t ">
        {{hoursDatas.min>9?hoursDatas.min.toString().split('')[1]:hoursDatas.min}}
      </div>
      <div class="dotted">:</div>
      <div class="t ">
        {{hoursDatas.sec>9?hoursDatas.sec.toString().split('')[0]:0}}
      </div>
      <div class="t last">
        {{hoursDatas.sec>9?hoursDatas.sec.toString().split('')[1]:hoursDatas.sec}}
      </div>
    </div>

    <div v-if="timer.timerModel=='fengpan'" class="time-feng">
      <img src="/static/public/image/lottery/fen.png" alt="">
    </div>

    <div class="time-mark">
      <!-- 时时彩没天的 -->
      <div class="time-mark-flex time-mark-flex-m" v-if="timer.timerModel=='minute'">
        <div class="t tm">MINUTES</div>
        <div class="t ts">SECONDS</div>
      </div>
      <div class="time-mark-flex" v-if="timer.timerModel=='hours'">
        <div class="t th">HOURS</div>
        <div class="t tm">MINUTES</div>
        <div class="t ts">SECONDS</div>
      </div>
      <div class="time-mark-flex" v-if="timer.timerModel=='days'">
        <div class="t dd">DAYS</div>
        <div class="t dt">HOURS</div>
        <div class="t dm">MINUTES</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      childNeedMess: {
        type: Object
      }
    },
    data () {
      return {
        // 默认
        timer: {
          timerModel: '',
          timeLeave: '',
          djs_next_kaipan: ''
        },
        hoursDatas: {
          hou: 0,
          min: 0,
          sec: 0
        },
        daysDatas: {
          day: 0,
          hou: 0,
          min: 0,
          sec: 0
        },
        btnTimer: null,
        ifPlayMusic: true
        // btnTimer2:null
      }
    },
    methods: {
      getTime (timer) {
        // console.log(timer)
        console.log("获取时间")
        if (timer.djs_next_kaipan <= 0 && timer.timeLeave <= 0) {
          // timer.timeLeave=Math.abs(+timer.timeLeave);
          // console.log(this.timer)
          this.timer.timerModel = 'fengpan'
          this.$emit('fengpan', true)
          return false
        }
        this.timer = timer
        // 如果是按天倒计时（六合彩等）
        if (this.timer.timeLeave >= 86400 && this.timer.djs_next_kaipan <= 0) {
          this.timer.timerModel = 'days'
          this.daysCalcu()
        } else {
          if (this.timer.lotteryName.includes('快速') || this.timer.lotteryName.includes('3分') || this.timer.lotteryName.includes('5分')) {
            this.timer.timerModel = 'minute'
          } else {
            this.timer.timerModel = 'hours'
          }
          this.hoursCalcu()
        }
      },
      daysCalcu () {
        if (this.timer.djs_next_kaipan <= 0) {
          let days = Math.floor(this.timer.timeLeave / (24 * 60 * 60))
          // 算算去了天数后还剩多少时间（s）
          let daysLeave = Math.floor(this.timer.timeLeave % (24 * 60 * 60))
          let hours = Math.floor(daysLeave / (60 * 60))
          // 算算去了小时后还剩多少时间(s)
          let hoursLeave = Math.floor(daysLeave % (60 * 60))
          let mins = Math.floor(hoursLeave / 60)
          // 算算去了分钟后还剩多少时间(s)
          let minsLeave = Math.floor(hoursLeave % 60)
          let sec = minsLeave
          this.daysDatas.day = days
          this.daysDatas.hou = hours
          this.daysDatas.min = mins
          this.daysDatas.sec = sec
          clearInterval(this.btnTimer)
          this.btnTimer = setInterval(() => {
            this.daysDatas.sec = this.daysDatas.sec - 1
            if (this.daysDatas.sec < 0 && this.daysDatas.min > 0) {
              this.daysDatas.min = this.daysDatas.min - 1
              this.daysDatas.sec = 59
            }
            if (this.daysDatas.sec < 0 && this.daysDatas.min < 1) {
              clearInterval(this.btnTimer)
              this.daysDatas.sec = 0
              this.$emit('child-say', true)
            }
          }, 1000)
        } else {
          this.timeStart(this.timer.djs_next_kaipan)
        }
      },
      hoursCalcu () {
        if (this.timer.djs_next_kaipan > 0) {
          this.timeStart(this.timer.djs_next_kaipan)
        } else {
          this.timeStart(this.timer.timeLeave)
        }
      },
      // 所有小时倒计时
      timeStart (timeParam) {
        let days = Math.floor(timeParam / (24 * 60 * 60))
        // 算算去了天数后还剩多少时间（s）
        let daysLeave = Math.floor(timeParam % (24 * 60 * 60))
        let hours = Math.floor(daysLeave / (60 * 60))
        // 算算去了小时后还剩多少时间(s)
        let hoursLeave = Math.floor(daysLeave % (60 * 60))
        let mins = Math.floor(hoursLeave / 60)
        // 算算去了分钟后还剩多少时间(s)
        let minsLeave = Math.floor(hoursLeave % 60)
        let sec = minsLeave

        this.hoursDatas.hou = hours
        this.hoursDatas.min = mins
        this.hoursDatas.sec = sec
        clearInterval(this.btnTimer)
        //当分钟和秒全部为0时请求，变化小时（小时不用算）
        this.btnTimer = setInterval(() => {
          this.hoursDatas.sec = this.hoursDatas.sec - 1
          if (this.hoursDatas.sec < 0 && this.hoursDatas.min > 0) {
            this.hoursDatas.min = this.hoursDatas.min - 1
            this.hoursDatas.sec = 59
          }
          if (this.hoursDatas.sec < 0 && this.hoursDatas.min < 1) {
            clearInterval(this.btnTimer)
            this.hoursDatas.sec = 0
            this.$emit('child-say', true)
          }
        }, 1000)
      },
      playMusic () {
        this.ifPlayMusic = !this.ifPlayMusic
        if (this.ifPlayMusic) {
          this.$refs['audio_player'].play()
        }
      },
      //soket接收信息
      playMusicReset () {
        this.$refs['audio_player'].play()
      }
    },
    created: function () {
    }
  }
</script>

<style lang='less' scoped>
  .ousideTimerWrap {
    position: relative;
    padding: 15px 20px;
    border-right: 1px dashed #ccc;

    .time-title-wrap {
      .time-title {
        font-size: 16px;
        color: rgba(136, 136, 136, 1);
        padding-left: 35px;
        padding-bottom: 12px;
      }

      .palyMusic {
        position: absolute;
        text-align: center;
        padding-left: 10px;
        cursor: pointer;

        i {
          &.i1 {
            color: #ff6600;
            //    font-size: 26px;
          }

          &.i2 {
            color: #cccccc;
            //    font-size: 22px;
          }
        }
      }
    }

    .time-wrap {
      zoom: 1;
      overflow: hidden;

      .dotted {
        float: left;
        padding-right: 5px;
        line-height: 64px;
        font-size: 25px;
        color: #000000;
        opacity: 1;

        &.active {
          -webkit-animation: mymove 1s cubic-bezier(0, 0, 1, 1) infinite;
          -moz-animation: mymove 1s cubic-bezier(0, 0, 1, 1) infinite;
          -o-animation: mymove 1s cubic-bezier(0, 0, 1, 1) infinite;
          -ms-animation: mymove 1s cubic-bezier(0, 0, 1, 1) infinite;
          animation: mymove 1s cubic-bezier(0, 0, 1, 1) infinite;
          @-webkit-keyframes mymove {
            0% {
              opacity: 0.7;
            }
            100% {
              opacity: 0;
            }
          }
          @-moz-keyframes mymove {
            0% {
              opacity: 0.7;
            }
            100% {
              opacity: 0;
            }
          }
          @-ms-keyframes mymove {
            0% {
              opacity: 0.7;
            }
            100% {
              opacity: 0;
            }
          }
          @-o-keyframes mymove {
            0% {
              opacity: 0.7;
            }
            100% {
              opacity: 0;
            }
          }
          @keyframes mymove {
            0% {
              opacity: 0.7;
            }
            100% {
              opacity: 0;
            }
          }
        }
      }

      .t {
        width: 40px;
        height: 64px;
        line-height: 50px;
        border-radius: 2px;
        font-size: 48px;
        color: #524f4f;
        float: left;
        padding: 8px 5px;
        margin-right: 5px;
        font-family: "San Francisco";
        background: url("/static/public/image/lottery/timebg.svg") no-repeat;

        &:nth-child(2),
        &:nth-child(5) {
          margin-right: 0;
        }
      }

      .last {
        margin-right: 0;
      }

      // &.time-wrap-minute{
      //   margin: 0 50px;
      // }
    }

    .time-mark {
      .time-mark-flex {
        display: flex;
        justify-content: space-between;

        &.time-mark-flex-m {
          div {
            &:first-child {
              margin-left: 46px;
            }

            &:last-child {
              margin-right: 52px;
            }
          }
        }
      }

      .t {
        float: left;
        letter-spacing: 2px;
        font-size: 12px;
        color: #999;
        padding: 10px 0 0 0;
      }

      .th {
        padding-left: 15px;
      }

      .tm {
        padding-left: 12px;
      }

      .ts {
        padding-right: 8px;
      }

      .dd {
        padding-left: 22px;
      }

      .dt {
        padding-left: 16px;
      }

      .dm {
        padding-right: 9px;
      }
    }

    .time-feng {
      img {
        display: block;
        margin: 10px auto;
        cursor: not-allowed;
      }
    }

  }
</style>
