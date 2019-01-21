import Vue from "vue";
import "./index.scss";
import "flex.css"
import { CarouselItem, Carousel } from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)
new Vue({
  el: "#app",
  template: require("./index.xtpl"),
  data: {
    message: "Hello Vue!"
  }
});

