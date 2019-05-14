const Record = {
    data () {
      return {
        total: 0,
        i: 1,
        day: '1',
        timeStart: '',
        timeEnd: '',
      }
    },
    methods: {
      hanlderRadio (val) {
        this.i = 1
        if (val == 1) {
          this.timeStart = this.getYMD(new Date())
          this.timeEnd = this.getYMD(new Date())
        } else if (val == 2) {
          this.timeStart = this.getYMD(new Date() - 1000 * 60 * 60 * 24)
          this.timeEnd = this.getYMD(new Date() - 1000 * 60 * 60 * 24)
        } else {
          this.timeStart = this.getYMD(new Date() - 1000 * 60 * 60 * 24 * 6)
          this.timeEnd = this.getYMD(new Date())
        }
        this.getRecord()
      },
  
      hanlderDate (date) {
        this.timeStart = date[0]
        this.timeEnd = date[1]
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
  