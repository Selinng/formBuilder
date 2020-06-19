<template>
  <div class="form-group">
    <label
      for="name"
      class="col-sm-3 control-label"
    >{{componentattr ? componentattr.title : defaultData.title}}</label>
    <div class="col-sm-9">
      <button
        type="submit"
        class="btn"
        :class="'btn-'+ (componentattr ? componentattr.style.toLowerCase() : defaultData.style.toLowerCase())"
      >{{componentattr ? componentattr.content : defaultData.content}}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultData: {
        componentname: "formbutton",
        title: "form-button",
        content: "按钮",
        style: "Primary"
      }
    };
  },

  props: ["componentattr"]
};
</script>
