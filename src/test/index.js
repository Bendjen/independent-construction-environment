import Vue from "vue";
import "./index.scss";

new Vue({
  el: "#app",
  template: require("./index.xtpl"),
  data: {
    message: "Hello Vue!"
  }
});

