<template>
  <div class="col-sm-2 builderright">
    <nav class="navbar navbar-default navbar-static-top">
      <h5 class="nav-header">属性</h5>
      <form class="form-horizontal" role="form" v-if="componentAttribute">
        <!-- <input v-for="(value, attribute, index) in $store.state.attribute"  :key="index" /> -->
        <div v-for="(value, attribute, index) in componentAttribute" :key="index">
          <component :is="attribute"></component>
        </div>
      </form>
    </nav>
  </div>
</template>
<script>
import addontext from "./attributecomponents/addontext";
import content from "./attributecomponents/content";
import name from "./attributecomponents/name";
import description from "./attributecomponents/description";
import maxlength from "./attributecomponents/maxlength";
import remarks from "./attributecomponents/remarks";
import required from "./attributecomponents/require";
import style from "./attributecomponents/style";
import title from "./attributecomponents/title";
import textareacontent from "./attributecomponents/textareaContent";
import type from "./attributecomponents/type";

import bus from "../util/event.js";
export default {
  data() {
    return {
      currentcomponent: {},
      attributeOrder: {
        1: "title",
        2: "content",
        3: "name",
        4: "textareacontent",
        5: "addontext",
        6: "description",
        7: "remarks",
        8: "maxlength",
        9: "style",
        91: "required",
        92: "type"
      }
    };
  },

  computed: {
    componentAttribute() {
      let containAttribute = {};
      // for(let key in this.currentcomponent) {
      //     if(key === 'componentname' || key === 'id') {
      //         continue
      //     } else {
      //         containAttribute[key] = this.currentcomponent[key]
      //     }
      // }
      if (!this.currentcomponent) {
        return null;
      }
      Object.keys(this.attributeOrder)
        .sort()
        .forEach(i => {
          if (this.currentcomponent[this.attributeOrder[i]] !== undefined) {
            containAttribute[
              "data-" + this.attributeOrder[i]
            ] = this.currentcomponent[this.attributeOrder[i]];
          }
        });
      return containAttribute;
    }
  },

  mounted() {
    bus.$on("change", data => (this.currentcomponent = data));
  },

  watch: {
    // currentcomponent: function(newdata, olddata) {
    //     bus.$emit('receipt', newdata)
    // }
  },

  components: {
    "data-addontext": addontext,
    "data-content": content,
    "data-name": name,
    "data-description": description,
    "data-maxlength": maxlength,
    "data-remarks": remarks,
    "data-required": required,
    "data-style": style,
    "data-title": title,
    "data-textareacontent": textareacontent,
    "data-type": type
  }
};
</script>
<style scoped>
.builderright {
  position: fixed;
  top: 50px;
  right: 0;
  padding: 0;
  padding-left: 15px;
}
nav {
  height: calc(100vh - 49px);
  padding: 1px;
}
form {
  background-color: inherit;
}
.nav-header {
  background-color: #ebeef1;
  border-bottom: 1px solid #d2dbe5;
  font-weight: 800;
  margin: 0;
  padding: 5px 10px;
  line-height: 25px;
}
</style>


