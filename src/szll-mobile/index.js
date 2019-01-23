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
            thumbs: {
              swiper: {
                el: '.swiper-container-thumbs',
                slidesPerView: 3,
                watchSlidesVisibility: true,
              },
              slideThumbActiveClass: 'slide-thumb-active',
              thumbsContainerClass: 'my-container-thumbs',
            }
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
      this.mySwiper.slidePrev();
    },
    slideNext() {
      this.mySwiper.slideNext();
    }
  }
});

function fetchDetail() {
  return new Promise((resolve, reject) => {
    $.post("/api/teacher/index", function (data, status) {
      resolve(JSON.parse(data))
    });
  })
}


