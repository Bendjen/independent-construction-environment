import Vue from "vue";
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { Icon, Popup } from 'vant';
import "./index.scss";
import "flex.css"

Vue.use(Icon)
Vue.use(Popup)

new Vue({
  el: "#app",
  template: require("./index.xtpl"),
  data: {
    mySwiper: null,
    teacherList: [],
    activeIndex: 0,
    dialogVisible: false
  },
  computed: {
    activeItem: function () {
      return this.teacherList[this.activeIndex] || {}
    }
  },
  mounted() {
    let vm = this;
    fetchDetail().then(res => {
      if (res.code == 200) {
        this.teacherList = res.result
        this.$nextTick(() => {
          const mySwiper = new Swiper('.swiper-container', {
            on: {
              slideChange: function () {
                vm.$set(vm.$data, 'activeIndex', this.activeIndex)
              }
            },
            // thumbs: {
            //   swiper: {
            //     el: '.swiper-container-thumbs',
            //     slidesPerView: 3,
            //     watchSlidesVisibility: true,
            //   },
            //   slideThumbActiveClass: 'slide-thumb-active',
            //   thumbsContainerClass: 'my-container-thumbs',
            // }
          });
          this.$data.mySwiper = mySwiper
        })
      } else {
        alert('获取师资列表出错，请联系管理员处理', '提示')
      }
    }).catch(err => {
      console.log(err)
      alert('获取师资列表出错，请联系管理员处理', '提示')
    })
  },
  methods: {
    slidePrev() {
        console.log( this.mySwiper)
      this.mySwiper[1].slidePrev();
    },
    slideNext() {
      this.mySwiper[1].slideNext();
    }
  }
});

function fetchDetail() {
        return Promise.resolve(JSON.parse("{\"code\":\"200\",\"result\":[{\"id\":39,\"phone\":null,\"name\":\" \\u8096\\u7389\",\"tit\":\"\\u6559\\u5e08 \\u5e7c\\u6559\\u4e13\\u4e1a\",\"desc\":null,\"cont\":[\"\\u719f\\u6089ABA\\u3001TEACCH\\u7b49\\u6559\\u5b66\\u65b9\\u6cd5\",\"\\u5b66\\u4e60\\u80fd\\u529b\\u5f3a\\u3001\\u6559\\u5b66\\u80fd\\u529b\\u6df1\",\"\\u80fd\\u8fd0\\u7528\\u591a\\u79cd\\u6559\\u5b66\\u6cd5\\u521b\\u8bbe\\u5f20\\u9a70\\u6709\\u5ea6\\u7684\\u6559\\u5b66\\u73af\\u5883\",\"\\u81f4\\u529b\\u4e8e\\u4f4e\\u9f84\\u7279\\u6b8a\\u513f\\u7ae5\\u6559\\u5b66\\u65b9\\u9762\",\"\\u5bf9\\u513f\\u7ae5\\u6559\\u80b2\\u6709\\u7740\\u81ea\\u5df1\\u7684\\u7406\\u89e3\\u4e0e\\u9020\\u8be3\"],\"img\":\"\\\/uploads\\\/images\\\/type\\\/201901\\\/19\\\/1547865103_1397010097.jpg\",\"time\":\"2019\\u5e7401\\u670819\\u65e5\"},{\"id\":40,\"phone\":null,\"name\":\"\\u5316\\u5b66\\u8001\\u5e08\",\"tit\":\"\\u9876\\u7ea7\\u6253\\u91ce\",\"desc\":\"\\u8fd9\\u4e2a\\u8001\\u5e08\\u6709\\u70b9\\u91ce\",\"cont\":[\"\\u8001\\u5e08\\u6807\\u7b7e111\",\"LOL\\u4e94\\u51a0\\u738b\",\"\\u5965\\u8d5b\\u5fb7\\u5965\\u8d5b\\u5fb7\\u5965\\u8d5b\\u5fb7\\u6492\\u65e6\\u6492\\u65e6\\u5965\\u8d5b\\u5fb7sa\"],\"img\":\"uploads\\\/images\\\/type\\\/201901\\\/14\\\/1547481539_1422144845.png\",\"time\":\"2019\\u5e7401\\u670824\\u65e5\"},{\"id\":41,\"phone\":null,\"name\":\"\\u9ec4\\u79cb\\u83ca\",\"tit\":\"\\u9ad8\\u7ea7\\u6559\\u5e08  \\u4e09\\u7ea7\\u5fc3\\u7406\\u54a8\\u8be2\\u5e08\",\"desc\":null,\"cont\":[\"\\u4e09\\u7ea7\\u5fc3\\u7406\\u54a8\\u8be2\\u5e08\\u3001MUST\\u5c45\\u5bb6\\u8bad\\u7ec3\\u7ec4\\u6210\\u5458\",\"\\u4ece\\u4e8b\\u5b64\\u72ec\\u75c7\\u5eb7\\u590d\\u4e09\\u5e74\",\"\\u7cbe\\u719fABA\\uff0c\\u5bf9DDT\\u64cd\\u4f5c\",\"\\u6709\\u7740\\u4e30\\u5bcc\\u7684\\u5b9e\\u64cd\\u57f9\\u8bad\\u7ecf\\u9a8c\",\"\\u5728\\u533a\\u522b\\u5f3a\\u5316\\u3001\\u4ee3\\u5e01\\u3001\\u8f85\\u52a9\\u3001\\u94fe\\u63a5\\u3001\\u8bfe\\u9898\\u5206\\u89e3\",\"\\u5404\\u65b9\\u9762\\u6709\\u7740\\u5927\\u91cf\\u7684\\u5b9e\\u64cd\\u7ecf\\u5386\"],\"img\":\"\\\/uploads\\\/images\\\/type\\\/201901\\\/19\\\/1547865845_153370410.jpg\",\"time\":\"2019\\u5e7401\\u670819\\u65e5\"},{\"id\":42,\"phone\":null,\"name\":\"\\u5415\\u8fd0\\u7ea2\",\"tit\":\"\\u611f\\u7edf\\u6559\\u5b66\\u4e3b\\u4efb\",\"desc\":null,\"cont\":[\"\\u611f\\u7edf\\u8bc4\\u4f30\\u5e08\\uff0c\\u8bad\\u7ec3\\u5e08\\uff0c\\u4f53\\u80b2\\u8fd0\\u52a8\\u7cfb\\u6bd5\\u4e1a\",\"\\u7279\\u6b8a\\u513f\\u7ae5\\u5eb7\\u590d\\u6559\\u80b2\\u516d\\u5e74\"],\"img\":\"\\\/uploads\\\/images\\\/type\\\/201901\\\/19\\\/1547866176_755072308.jpg\",\"time\":\"2019\\u5e7401\\u670819\\u65e5\"},{\"id\":43,\"phone\":null,\"name\":\"\\u5434\\u4e3d\\u5a1f\",\"tit\":\"\\u6559\\u5b66\\u4e3b\\u4efb \\u878d\\u5408\\u7ec4\\u957f\",\"desc\":null,\"cont\":[\"\\u5b66\\u524d\\u6559\\u80b2\\u4e13\\u4e1a\\u6bd5\\u4e1a\",\"\\u5e7c\\u513f\\u6559\\u80b2\\u3001\\u7279\\u6b8a\\u6559\\u80b2\\u4ece\\u4e1a\\u4e8c\\u5341\\u5e74\"],\"img\":\"\\\/uploads\\\/images\\\/type\\\/201901\\\/19\\\/1547866304_427641296.jpg\",\"time\":\"2019\\u5e7401\\u670819\\u65e5\"},{\"id\":44,\"phone\":null,\"name\":\"\\u7a0b\\u6684\",\"tit\":\"\\u6559\\u5b66\\u7763\\u5bfc \\u7279\\u6b8a\\u6559\\u80b2\\u4e13\\u4e1a\",\"desc\":null,\"cont\":[\"\\u5e08\\u627f\\u9999\\u6e2f\\u534f\\u5eb7\\u4f1a\\u7ed3\\u6784\\u5316\\u6559\\u5b66\\u6cd5\",\"\\u8bc4\\u4f30\\u5e08\\uff0c\\u5317\\u4eac\\u611f\\u7edf\\u8bad\\u7ec3\\u5e08\\u4e0e\\u6d4b\\u8bc4\\u5e08\"],\"img\":\"\\\/uploads\\\/images\\\/type\\\/201901\\\/19\\\/1547866392_1091608813.jpg\",\"time\":\"2019\\u5e7401\\u670819\\u65e5\"},{\"id\":45,\"phone\":null,\"name\":\"\\u66f9\\u4f1a\\u654f\",\"tit\":\"\\u6559\\u7814\\u4e3b\\u4efb \\u6559\\u5177\\u7814\\u53d1\\u4e2d\\u5fc3\\u4e3b\\u4efb\",\"desc\":\"shenqisnsns\",\"cont\":[\"\\u56fd\\u5bb6\\u4e09\\u7ea7\\u5fc3\\u7406\\u54a8\\u8be2\\u5e08\\uff0c\\u5b66\\u524d\\u6559\\u80b2\\u4e13\\u4e1a\",\"\\u5341\\u5e74\\u7279\\u6b8a\\u6559\\u80b2\\u4ece\\u4e1a\"],\"img\":\"\\\/uploads\\\/images\\\/type\\\/201901\\\/19\\\/1547866502_1615440697.jpg\",\"time\":\"2019\\u5e7401\\u670826\\u65e5\"}],\"message\":\"\\u6559\\u5e08\\u5217\\u8868\"}"))

  return new Promise((resolve, reject) => {
    $.post("/api/teacher/index", function (data, status) {
      resolve(JSON.parse(data))
    });
  })
}


