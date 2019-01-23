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
  // return new Promise((resolve, reject) => {
  //   $.post("/api/teacher/index", function (data, status) {
  //     resolve(data)
  //   });
  // })
  return Promise.resolve({
    "code": "200",
    "result": [
      {
        "id": 34,
        "phone": null,
        "name": "小林老师",
        "tit": "特级教师",
        "cont": [
          "教师标签1",
          "教师标签1",
          "教师标签1",
          "教师标签1",
          "教师标签1",
          "教师标签1",
          "教师标签2"
        ],
        desc: "文字，是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。该词出自《史记·秦始皇本纪》：一法度衡石丈尺，车同轨，书同文字。",
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      },
      {
        "id": 33,
        "phone": null,
        "name": "八平老师",
        "tit": "特级教师",
        desc: "文字，是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。该词出自《史记·秦始皇本纪》：一法度衡石丈尺，车同轨，书同文字。",
        "cont": [
          "教师标签1",
          "教师标签2"
        ],
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      },
      {
        "id": 35,
        "phone": null,
        "name": "八平老师",
        "tit": "特级教师",
        desc: "文字，是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。该词出自《史记·秦始皇本纪》：一法度衡石丈尺，车同轨，书同文字。",
        "cont": [
          "教师标签1",
          "教师标签2"
        ],
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      },
      {
        "id": 51,
        "phone": null,
        "name": "八平老师",
        "tit": "特级教师",
        desc: "文字，是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。该词出自《史记·秦始皇本纪》：一法度衡石丈尺，车同轨，书同文字。",
        "cont": [
          "教师标签1",
          "教师标签2"
        ],
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      },
      {
        "id": 52,
        "phone": null,
        "name": "八平老师",
        "tit": "特级教师",
        desc: "文字，是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。该词出自《史记·秦始皇本纪》：一法度衡石丈尺，车同轨，书同文字。",
        "cont": [
          "教师标签1",
          "教师标签2"
        ],
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      },
      {
        "id": 61,
        "phone": null,
        "name": "八平老师",
        "tit": "特级教师",
        desc: "文字，是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。该词出自《史记·秦始皇本纪》：一法度衡石丈尺，车同轨，书同文字。",
        "cont": [
          "教师标签1",
          "教师标签2"
        ],
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      },
      {
        "id": 62,
        "phone": null,
        "name": "八平老师",
        "tit": "特级教师",
        desc: "文字，是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。该词出自《史记·秦始皇本纪》：一法度衡石丈尺，车同轨，书同文字。",
        "cont": [
          "教师标签1",
          "教师标签2"
        ],
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      },
      {
        "id": 63,
        "phone": null,
        "name": "八平老师",
        "tit": "特级教师",
        desc: "文字，是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。该词出自《史记·秦始皇本纪》：一法度衡石丈尺，车同轨，书同文字。",
        "cont": [
          "教师标签1",
          "教师标签2"
        ],
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      },
      {
        "id": 64,
        "phone": null,
        "name": "小王老师",
        "tit": "特级教师",
        desc: "文字，是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。该词出自《史记·秦始皇本纪》：一法度衡石丈尺，车同轨，书同文字。",
        "cont": [
          "LOL五冠王",
          "超级打野"
        ],
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      }
    ],
    "message": "教师列表"
  })
}


