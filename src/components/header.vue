<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <button type="button" class="btn btn-success navbar-btn" @click="saveform">保存</button>
      <button type="button" class="btn btn-primary navbar-btn" @click="saveAsTemplate">保存为模板</button>
      <button type="button" class="btn btn-info navbar-btn" @click="formSetting">返回预览页</button>
    </div>
  </nav>
</template>
<script>
import bus from "../util/event.js";
export default {
  methods: {
    saveform() {
      console.log("saveform");
      bus.$emit("saveform");
    },

    saveAsTemplate() {
      bus.$emit("saveAsTemplate");
    },

    formSetting() {
      this.$router.push("/preview");
    }
  }
};
</script>
<style scoped>
nav {
  border-bottom: 2px solid #3a779e;
}
</style>

