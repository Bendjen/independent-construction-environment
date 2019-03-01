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
      endVal: 0,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
      list: [
        { id: 1, name: 'xiaoxiao', face: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1691771116,3692861469&fm=200&gp=0.jpg' },
        { id: 2, name: 'xiaoxiao', face: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1691771116,3692861469&fm=200&gp=0.jpg' },
        { id: 3, name: 'xiaoxiao', face: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1691771116,3692861469&fm=200&gp=0.jpg' },
        { id: 4, name: 'xiaoxiao', face: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1691771116,3692861469&fm=200&gp=0.jpg' },
        { id: 5, name: 'xiaoxiao', face: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1691771116,3692861469&fm=200&gp=0.jpg' },
        { id: 6, name: 'xiaoxiao', face: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1691771116,3692861469&fm=200&gp=0.jpg' },
        { id: 7, name: 'xiaoxiao', face: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1691771116,3692861469&fm=200&gp=0.jpg' }
      ],
      count: null,
    }
  },

  computed: {
    maxList: function () {
      return this.$data.list.slice(0, 5)
    }
  },

  ready() {
    this.count = new CountUp('countNum', 0, this.endVal , 0, 3, this.options);
    this.count.start();
  },

  methods: {
    startDraw() {
      this.count.update(this.endVal + 50);
      this.endVal = this.endVal + 50
    },
    backPre() {
      this.status = 0;
    }
  }
});

