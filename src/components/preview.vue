<template>
  <div class="row">
    <div class="col-sm-2 builderleft">
      <nav class="navbar navbar-default navbar-static-top" style="margin-bottom:0;">
        <select class="form-control nav-select" v-model="previewtype">
          <option value="all">全部</option>
          <option value="often">常用</option>
        </select>
      </nav>

      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{active: item.ID===selectID}"
          @click="preview(item.ID)"
          v-for="item in formList"
          :key="item.ID"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="col-sm-10 fr content">
      <div class="select-button">
        <center class="center">
          <button class="btn btn-info btn-sm" @click="selectTemplate">选择此模板</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            class="btn btn-danger btn-sm"
            @click="deleteTemplate"
          >删除此模板</button>
        </center>
      </div>
      <form class="form-horizontal" role="form">
        <component
          v-for="item in selectForm.data"
          :key="item.id"
          :componentattr="item"
          :is="item.componentname"
        ></component>
      </form>
    </div>
  </div>
</template>
 <script>
import bus from "../util/event.js";
import Vue from "vue";
import { templateHttp } from '../util/http'
export default {
  data() {
    return {
      previewtype: "all",
      formList: [],
      selectID: null,
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
      ]
    };
  },

  computed: {
    selectForm() {
      if (this.selectID) {
        return this.formList.find(i => i.ID === this.selectID);
      } else {
        return [];
      }
    }
  },

  methods: {
    selectTemplate() {
      this.$router.push({ path: "/edit", query: { id: this.selectID } });
    },

    preview(key) {
      this.selectID = key;
    },

    getData() {
      this.formList = templateHttp.getList()
    },

    deleteTemplate() {
      this.formList = templateHttp.delete(this.selectID)
      this.selectID = 0
      this.$message({
        message: '删除成功！',
        type: 'success'
      })
    }
  },

  created() {
    this.getData()
    console.log(this.formList)
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
.fr {
  float: right;
}
body {
  background-color: #ddd;
  padding-top: 0;
}
.center {
  background-color: #fcf8e3;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #faebcc;
  border-radius: 4px;
}
.content {
  padding-left: 8px;
  padding-right: 15px;
}
ul {
  list-style: none;
  height: calc(100vh - 65px);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f8f8f8;
  margin-bottom: 0;
}
ul li {
  background-color: #fff;
  cursor: default;
}
.builderleft {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
}
nav {
  padding: 1px;
}
.nav-select {
  margin: 5px auto;
  width: 90%;
}
form {
  margin: 50px auto;
  padding: 40px 30px;
  max-width: 80%;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
</style>

