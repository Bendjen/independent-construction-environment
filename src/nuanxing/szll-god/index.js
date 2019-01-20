import Vue from 'vue'
import { Button, Upload, Input, MessageBox } from "element-ui";
import "./index.scss";

Vue.use(Button);
Vue.use(Upload);
Vue.use(Input);
Vue.use(MessageBox);

new Vue({
  el: "#teacherEditConatiner",
  template: require("./index.xtpl"),
  data: {
    name: "",
    title: "",
    teacherPhoto: "",
    cont: [],
    qualificationPhotos: [],
    editor: null
  },
  mounted: function() {
    this.init();
  },
  computed: {
    teacherFileList: function() {
      if (this.teacherPhoto) {
        return [{ name: "teacherPhoto", url: this.teacherPhoto }];
      } else {
        return [];
      }
    },
    quaFileList: function() {
      return this.qualificationPhotos.map(function(item, index) {
        return { name: index, url: item };
      });
    }
  },
  methods: {
    init: function() {
      var that = this;
      if (document.getElementById("editType").value == "编辑") {
        $.get(
          "/api/teacher/show",
          { id: document.getElementById("teacherID").value },
          function(data, status) {
            var data = JSON.parse(data);
            if (data.code == 200) {
              that.name = data.result.name;
              that.title = data.result.tit;
              that.cont = data.result.cont;
              that.qualificationPhotos = data.result.honors;
              that.teacherPhoto = data.result.img;
            } else {
              alert(data.message);
            }
            // that.initEditor();
          }
        );
      } else {
        console.log(this.cont);
        // that.initEditor();
      }
    },
    initEditor: function() {
      var E = window.wangEditor;
      var editor = new E("#editor");
      editor.customConfig.menus = [
        "head",
        "bold",
        "italic",
        "fontName",
        "justify",
        "underline"
      ];
      editor.create();
      this.$data.editor = editor;
      editor.txt.html(this.cont);
    },
    handleAvatarSuccess: function(res, file) {
      this.teacherPhoto = URL.createObjectURL(file.raw);
    },
    handleTeacherSuccess: function(response) {
      if (response.code == 200) {
        this.$data.teacherPhoto = response.result.path;
      }
    },
    handleTeacherRemove: function() {
      this.$data.teacherPhoto = "";
    },
    beforeAvatarUpload: function(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleQualificationSuccess: function(response, file, fileList) {
      if (response.code == 200) {
        file.url = response.result.path;
      } else {
        file.url = "";
      }
      this.$data.qualificationPhotos = fileList.map(function(item) {
        return item.url;
      });
    },
    handleQualificationRemove: function(file, fileList) {
      this.$data.qualificationPhotos = fileList.map(function(item) {
        return item.url;
      });
    },
    handlePictureCardPreview: function(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    exceedNum: function() {
      this.$alert("最多允许上传一张老师照片，请先删除上一张后再尝试", "提示");
    },
    inputHonor: function() {
      let vm = this;
      this.$prompt("请输入教师标签，字数小于20字,最多添加6条标签", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(function(object) {
        console.log(object);
        if (object.value.length >= 20) {
          return vm.$alert("字数不能大于20字", "提示");
        } else {
          vm.cont.push(object.value);
        }
      });
    },
    deleteHonor: function(index) {
      let vm = this;
      this.$confirm("确认要删除该项内容吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function(item) {
        vm.cont.splice(index, 1);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    submit: function() {
      var that = this;
      var params = {
        id: document.getElementById("teacherID").value,
        name: this.name,
        tit: this.title,
        cont: this.cont,
        img: this.teacherPhoto
        // honors:this.qualificationPhotos
      };

      var url =
        document.getElementById("editType").value == "添加"
          ? "/api/teacher/create"
          : "/api/teacher/update";
      $.post(url, params, function(data, status) {
        var data = JSON.parse(data);
        if (data.code == 200) {
          that.$message({
            type: "success",
            message: "提交成功!"
          });
        } else {
          that.$message({
            type: "error",
            message: data.message || "提交失败"
          });
        }
      });
    }
  }
});
