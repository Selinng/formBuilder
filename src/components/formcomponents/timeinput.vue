<template>
  <div class="form-group">
    <label for="name" class="col-sm-2 control-label">{{finalTitle}}</label>
    <div class="col-sm-9">
      <input type="time" class="form-control" placeholder="请输入时间" :required="finalRequired" :name="componentattr ? componentattr.name : defaultData.name"/>
      <p class="help-block">{{finalRemarks}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultData: {
        componentname: "timeinput",
        title: "time-input",
        remarks: "帮助信息",
        required: false,
        name: "timeinput"
      }
    };
  },

  computed: {
    finalTitle() {
      return this.componentattr
        ? this.componentattr.title
        : this.defaultData.title;
    },

    finalRemarks() {
      return this.componentattr
        ? this.componentattr.remarks
        : this.defaultData.remarks;
    },

    finalRequired() {
      return this.componentattr
        ? this.componentattr.required
        : this.defaultData.required;
    }
  },

  props: ["componentattr"]
};
</script>
