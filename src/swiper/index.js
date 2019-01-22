import Vue from "vue";
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { Icon } from 'element-ui'

import "./index.scss";
import "flex.css"

Vue.use(Icon)

new Vue({
  el: "#app",
  template: require("./index.xtpl"),
  data: {
    mySwiper: null,
    teacherList: [],
    activeIndex: 0
  },
  mounted() {
    fetchDetail().then(res => {
      if (res.code == 200) {
        this.teacherList = res.result
        this.$nextTick(() => {
          const mySwiper = new Swiper('.swiper-container', {
            thumbs: {
              swiper: {
                el: '.swiper-container-thumbs',
                slidesPerView: 5,
              }
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

    // this.$data.progressSwiper = new Swiper('.progress-container', {
    //   autoplay: true,
    // })
  }
});

function fetchDetail() {
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
          "教师标签2"
        ],
        "img": "uploads/images/type/201901/14/1547481539_1422144845.png",
        "time": "2019年01月17日"
      },
      {
        "id": 33,
        "phone": null,
        "name": "八平老师",
        "tit": "特级教师",
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
        "name": "小王老师",
        "tit": "特级教师",
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


