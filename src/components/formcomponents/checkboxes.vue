<template>
  <div class="form-group">
    <label
      for="lastname"
      class="col-sm-2 control-label"
    >{{componentattr ? componentattr.title : defaultData.title}}</label>
    <div class="col-sm-9">
      <div class="checkbox" v-for="(checkbox, index) in checkboxlist" :key="index">
        <label>
          <input type="checkbox" :name="componentattr ? componentattr.name : defaultData.name" :value="checkbox" />
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
        componentname: "checkboxes",
        title: "check-boxes",
        textareacontent: "Enter\nYou\nHere!",
        name: 'checkboxes'
      }
    };
  },

  props: ["componentattr"],

  computed: {
    checkboxlist() {
      if (this.componentattr) {
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
