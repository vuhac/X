const Record = {
  data () {
    return {
      total: 0,
      i: 1,
      startTime: this.getYMD(new Date()) + ' 00:00:00',
      endTime: this.getTime(new Date()),
      day: '1'
    }
  },
  methods: {
    hanlderRadio (val) {
      this.i = 1
      if (val == '1') {
        this.startTime = this.getYMD(new Date()) + ' 00:00:00'
        this.endTime = this.getTime(new Date())
      } else if (val == '2') {
        this.startTime =
          this.getYMD(new Date() - 1000 * 60 * 60 * 24) + ' 00:00:00'
        this.endTime =
          this.getYMD(new Date() - 1000 * 60 * 60 * 24) + ' 23:59:59 '
      } else {
        this.startTime = this.getYMD(new Date() - 1000 * 60 * 60 * 24 * 6) + ' 00:00:00'
        this.endTime = this.getTime(new Date())
      }
      this.getRecord()
    },

    hanlderDate (date) {
      this.startTime = date[0]
      this.endTime = date[1]
    },
    serachRecord () {
      this.i = 1
      this.getRecord()
    },
    hanlderPage (i) {
      this.i = i
      this.getRecord()
    },
  },
  created () {
    this.$nextTick(() => {
      this.getRecord()
    })
  },
  destroyed () {
    this.$store.commit('loading', false)
  }
}

export default Record
