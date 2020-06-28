<template>
  <div class="form-group">
    <label
      for="inputfile"
      class="col-sm-2 control-label"
    >{{componentattr ? componentattr.title : defaultData.title}}</label>
    <div class="col-sm-9">
      <input type="file" :name="componentattr ? componentattr.name : defaultData.name" />
      <p class="help-block">{{componentattr ? componentattr.remarks : defaultData.remarks}}</p>
    </div>
    <!-- <input type="file" >
    <p class="help-block">这里是块级帮助文本的实例。</p>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultData: {
        componentname: "filebutton",
        title: "file-button",
        remarks: "帮助信息",
        name: 'filebutton'
      }
    };
  },

  props: ["componentattr"]
};
</script>
