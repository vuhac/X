<template>
  <div class="f-time">
    <div class="time" v-if="timer.timerModel=='hours'">
      <img src="/static/public/image/lottery/vp-home-time.png" v-if="timer.timerModel!='days'" alt="">
      <span>{{hoursDatas.hou>9?hoursDatas.hou:'0'+hoursDatas.hou}}</span>
      <span>:</span>
      <span>{{hoursDatas.min>9?hoursDatas.min:'0'+hoursDatas.min}}</span>
      <span>:</span>
      <span>{{hoursDatas.sec>9?hoursDatas.sec:'0'+hoursDatas.sec}}</span>
    </div>
    <div class="time time-days" v-else-if="timer.timerModel=='days'">
      <img src="/static/public/image/lottery/vp-home-time.png" alt="">
      <span>{{daysDatas.day>9?daysDatas.day:'0'+daysDatas.day}}</span>
      <span>天</span>
      <span>{{daysDatas.hou>9?daysDatas.hou:'0'+daysDatas.hou}}</span>
      <span>时</span>
      <span>{{daysDatas.min>9?daysDatas.min:'0'+daysDatas.min}}</span>
      <span>分</span>
    </div>
    <div class="time time-days" v-else-if="timer.timerModel=='minute'">
      <img src="/static/public/image/lottery/vp-home-time.png" alt="">
      <span>{{hoursDatas.min>9?hoursDatas.min:'0'+hoursDatas.min}}</span>
      <span>:</span>
      <span>{{hoursDatas.sec>9?hoursDatas.sec:'0'+hoursDatas.sec}}</span>
    </div>
    <div class="time time-days" v-else-if="timer.timerModel=='fengpan'">
      <img src="/static/public/image/lottery/vp-home-time.png" alt="">
      <span>已封盘</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      timerDatas: {
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
      }
    },
    methods: {
      getTime () {
        if (this.timerDatas.djs_next_kaipan <= 0 && this.timerDatas.timeLeave <= 0) {
          return false
        }
        this.timer = {
          timerModel: '',
          timeLeave: this.timerDatas.djs_fengpan,
          djs_next_kaipan: this.timerDatas.djs_next_kaipan
        }

        if (this.timerDatas.djs_fengpan < 0 && this.timerDatas.lotteryId == 1) {
          this.timer.timerModel = 'fengpan'
          this.$emit('child-say', true)
          return false
        }

        // 如果是按天倒计时（六合彩等）
        if (this.timer.timeLeave >= 86400 && this.timer.djs_next_kaipan <= 0) {
          this.timer.timerModel = 'days'
          this.daysCalcu()
        } else {
          if (this.timerDatas.lotteryName.includes('快速') || this.timerDatas.lotteryName.includes('3分') || this.timerDatas.lotteryName.includes('5分')) {
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
      }
    },
    mounted () {
      this.getTime()
    },
    watch: {
      timerDatas: {
        handler (val, oldVal) {
          this.getTime()
        },
        deep: true
      }
    }

  }
</script>

<style lang='less' scoped>
  .f-time {
    width: 246px;
    margin-top: 12px;

    .time {
      background: #f5f5f5;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 4px;
      font-size: 16px;
      width: 140px;
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
      margin: 0 auto;

      img {
        vertical-align: text-bottom;
      }
    }

    .time-days {
      width: 160px;
    }
  }
</style>
