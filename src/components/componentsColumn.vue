<template>
  <div class="col-sm-2 builderleft">
    <nav class="navbar navbar-default navbar-static-top" style="margin-bottom:0;">
      <h5 class="nav-header">组件库</h5>
      <select class="form-control nav-select" v-model="componentstype">
        <option value="all">全部</option>
        <option value="input">输入框</option>
        <option value="listselection">列表选择</option>
        <option value="choice">单选、多选</option>
        <option value="button">文件、按钮</option>
      </select>
    </nav>

    <draggable :options="dragoptions" element="ul" v-model="newcomps">
      <li v-for="(item, index) in comps" :key="index">
        <img :src="item.imgsrc" v-show="componentstype==='all'||item.type==componentstype" alt />
      </li>
    </draggable>
  </div>
</template>
 <script>
import draggable from "vuedraggable";
import Vue from "vue";
import bus from "../util/event.js";
export default {
  data() {
    return {
      newcomponents: [],
      componentstype: "all",
      dragoptions: {
        group: {
          name: "formbuilder",
          pull: "clone",
          put: false
        },
        sort: false,
        animation: 300
      },
      components: [
        {
          name: "formtitle",
          type: ""
        },
        {
          name: "formaddress",
          type: "listselection"
        },
        {
          name: "appendedtext",
          type: "input"
        },
        {
          name: "prependedtext",
          type: "input"
        },
        {
          name: "formbutton",
          type: "button"
        },
        {
          name: "checkboxes",
          type: "choice"
        },
        {
          name: "dateinput",
          type: "input"
        },
        {
          name: "numberinput",
          type: "input"
        },
        {
          name: "timeinput",
          type: "input"
        },
        {
          name: "textinput",
          type: "input"
        },
        {
          name: "filebutton",
          type: "button"
        },
        {
          name: "inlinecheckboxes",
          type: "choice"
        },
        {
          name: "radiobuttons",
          type: "choice"
        },
        {
          name: "inlineradios",
          type: "choice"
        },
        {
          name: "starrating",
          type: "choice"
        },
        {
          name: "formtextarea",
          type: "input"
        },
        {
          name: "selectbasic",
          type: "listselection"
        },
        {
          name: "selectmultiple",
          type: "listselection"
        }
      ],
      comps: [
        {
          imgsrc: "./static/images/formtitle.png",
          type: "",
          defaultData: {
            componentname: "formtitle",
            title: "form-title",
            remarks: "帮助信息"
          }
        },
        {
          imgsrc: "./static/images/textinput.png",
          type: "input",
          defaultData: {
            componentname: "textinput",
            title: "text-input",
            description: "placeholder",
            remarks: "帮助信息",
            required: false
          }
        },
        {
          imgsrc: "./static/images/numberinput.png",
          type: "input",
          defaultData: {
            componentname: "numberinput",
            title: "number-input",
            remarks: "帮助信息",
            required: false
          }
        },
        {
          imgsrc: "./static/images/dateinput.png",
          type: "input",
          defaultData: {
            componentname: "dateinput",
            title: "date-input",
            remarks: "帮助信息",
            required: false
          }
        },
        {
          imgsrc: "./static/images/timeinput.png",
          type: "input",
          defaultData: {
            componentname: "timeinput",
            title: "time-input",
            remarks: "帮助信息",
            required: false
          }
        },
        {
          imgsrc: "./static/images/prependedtext.png",
          type: "input",
          defaultData: {
            componentname: "prependedtext",
            title: "prepended-text",
            addontext: ":>",
            description: "placeholder",
            remarks: "帮助信息",
            required: false
          }
        },
        {
          imgsrc: "./static/images/appendedtext.png",
          type: "input",
          defaultData: {
            componentname: "appendedtext",
            title: "appended-text",
            addontext: ":>",
            description: "placeholder",
            remarks: "帮助信息",
            required: false
          }
        },
        {
          imgsrc: "./static/images/formtextarea.png",
          type: "input",
          defaultData: {
            componentname: "formtextarea",
            title: "form-textarea",
            description: "placeholder",
            remarks: "帮助信息",
            maxlength: 140,
            required: false
          }
        },
        {
          imgsrc: "./static/images/selectbasic.png",
          type: "listselection",
          defaultData: {
            componentname: "selectbasic",
            title: "selectbasic",
            textareacontent: "Enter\nYou\nHere!"
          }
        },
        {
          imgsrc: "./static/images/formaddress.png",
          type: "listselection",
          defaultData: {
            componentname: "formaddress",
            title: "form-address",
            remarks: "帮助信息",
            required: false
          }
        },
        {
          imgsrc: "./static/images/selectmultiple.png",
          type: "listselection",
          defaultData: {
            componentname: "selectmultiple",
            title: "select-multiple",
            textareacontent: "Enter\nYou\nHere!"
          }
        },
        {
          imgsrc: "./static/images/checkboxes.png",
          type: "choice",
          defaultData: {
            componentname: "checkboxes",
            title: "check-boxes",
            textareacontent: "Enter\nYou\nHere!"
          }
        },
        {
          imgsrc: "./static/images/radiobuttons.png",
          type: "choice",
          defaultData: {
            componentname: "radiobuttons",
            title: "radio-buttons",
            textareacontent: "Enter\nYou\nHere!"
          }
        },
        {
          imgsrc: "./static/images/inlinecheckboxes.png",
          type: "choice",
          defaultData: {
            componentname: "inlinecheckboxes",
            title: "inline-checkboxes",
            textareacontent: "Enter\nYou\nHere!"
          }
        },
        {
          imgsrc: "./static/images/inlineradios.png",
          type: "choice",
          defaultData: {
            componentname: "inlineradios",
            title: "inline-radios",
            textareacontent: "Enter\nYou\nHere!"
          }
        },
        {
          imgsrc: "./static/images/starrating.png",
          type: "choice",
          defaultData: {
            componentname: "starrating",
            title: "star-rating",
            remarks: "零星视为无效评级"
          }
        },
        {
          imgsrc: "./static/images/filebutton.png",
          type: "button",
          defaultData: {
            componentname: "filebutton",
            title: "file-button",
            remarks: "帮助信息"
          }
        },
        {
          imgsrc: "./static/images/formbutton.png",
          type: "button",
          defaultData: {
            componentname: "formbutton",
            title: "form-button",
            content: "按钮",
            style: "Primary"
          }
        }
      ]
    };
  },

  computed: {
    newcomps() {
      return this.comps.map(i => i.defaultData);
    }
  },

  methods: {},

  components: {
    draggable
  },

  created() {
    this.components.forEach(component => {
      Vue.component(
        component.name,
        require("./formcomponents/" + component.name + ".vue").default
      );
    });
  }
};
</script>
 <style scoped>
ul {
  list-style: none;
  padding: 0;
  height: calc(100vh - 132px);
  overflow-y: scroll;
  overflow-x: hidden;
}
ul li {
  background-color: #fff;
  margin: 0;
  padding: 15px;
  border-bottom: 1px solid #aeaeae;
}
ul li:last-child {
  border-bottom: 0;
}
.builderleft {
  position: fixed;
  top: 50px;
  left: 0;
  padding: 0;
  padding-right: 15px;
}
nav {
  padding: 1px;
}
.nav-select {
  margin: 5px auto;
  width: 90%;
}
form {
  padding: 15px;
  pointer-events: none;
}
</style>

