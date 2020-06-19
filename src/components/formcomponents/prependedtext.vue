<template>
  <div class="form-group">
    <label
      class="col-sm-2 control-label"
    >{{componentattr ? componentattr.title : defaultData.title}}</label>
    <div class="col-sm-9">
      <div class="input-group">
        <span
          class="input-group-addon"
        >{{componentattr ? componentattr.addontext : defaultData.addontext}}</span>
        <input
          type="text"
          class="form-control"
          :placeholder="componentattr ? componentattr.description : defaultData.description"
          :required="componentattr ? componentattr.required : defaultData.required"
        />
      </div>

      <p class="help-block">{{componentattr ? componentattr.remarks : defaultData.remarks}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultData: {
        componentname: "prependedtext",
        title: "prepended-text",
        addontext: ":>",
        description: "placeholder",
        remarks: "帮助信息",
        required: false
      }
    };
  },

  props: ["componentattr"]
};
</script>
