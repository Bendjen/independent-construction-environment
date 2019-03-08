import Vue from "vue";
import "./index.scss";
import "flex.css"

new Vue({
  el: "#app",
  template: require("./index.xtpl"),
  data() {
    return {
      status: 0,
      num: 0,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
      list: [],
      count: null,
      tl: null,
      index: 1,
      interval: null
    }
  },

  mounted() {
    this.count = new CountUp('countNum', 0, this.num, 0, 3, this.options)
    this.fresh()
    this.interval = setInterval(() => {
      this.fresh()
    }, 10000)
  },

  beforDestory() {
    clearInterval(this.interval)
  },

  methods: {
    startDraw() {

    },
    backPre() {
      this.status = 0;
    },
    fresh(num) {
      let that = this;
      return new Promise((resolve, reject) => {
        fetch('http://my.12301.local/r/Face_Raffle/getList')
          .then((response) => {
            return response.json()
          }).then((res) => {
            if (res.code == 200) {
              that.list = res.data.list;
              that.count.update(res.data.count);
              that.num = res.data.count
            }
          })
      })
    }

  }
});

