<template>
  <div class="form-group">
    <label
      for="name"
      class="col-sm-2 control-label"
    >{{componentattr ? componentattr.title : defaultData.title}}</label>
    <div class="col-sm-9">
      <select multiple class="form-control">
        <option v-for="(option, index) in optionlist" :key="index" :value="option">{{option}}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultData: {
        componentname: "selectmultiple",
        title: "select-multiple",
        textareacontent: "Enter\nYou\nHere!",
        name: "selectmultiple"
      }
    };
  },

  props: ["componentattr"],

  computed: {
    optionlist() {
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
