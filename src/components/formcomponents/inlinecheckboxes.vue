<template>
  <div class="form-group">
    <label
      for="lastname"
      class="col-sm-2 control-label"
    >{{componentattr ? componentattr.title : defaultData.title}}</label>
    <div class="col-sm-9">
      <div>
        <label class="checkbox-inline" v-for="(checkbox, index) in checkboxlist" :key="index">
          <input :value="checkbox" type="checkbox" :name="componentattr ? componentattr.name : defaultData.name"/>
          {{checkbox}}
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultData: {
        componentname: "inlinecheckboxes",
        title: "inline-checkboxes",
        textareacontent: "Enter\nYou\nHere!",
        name: 'inlinecheckboxes'
      }
    };
  },

  props: ["componentattr"],

  computed: {
    checkboxlist() {
      if (this.componentattr) {
        console.log(this.componentattr.textareacontent);
        return this.componentattr.textareacontent
          .split("\n")
          .filter(i => i.trim() !== "");
      }
      return this.defaultData.textareacontent
        .split("\n")
        .filter(i => i.trim() !== "");
    }
  }
};
</script>
