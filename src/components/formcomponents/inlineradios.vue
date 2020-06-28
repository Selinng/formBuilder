<template>
  <div class="form-group">
    <label
      for="lastname"
      class="col-sm-2 control-label"
    >{{componentattr ? componentattr.title : defaultData.title}}</label>
    <div class="col-sm-9">
      <div>
        <label class="radio-inline" v-for="(radio, index) in radiolist" :key="index">
          <input
            :value="radio"
            :name="componentattr ? componentattr.name : defaultData.name"
            type="radio"
          />
          {{radio}}
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
        componentname: "inlineradios",
        title: "inline-radios",
        textareacontent: "Enter\nYou\nHere!",
        name: "inlineradios",
      }
    };
  },

  props: ["componentattr"],

  computed: {
    radiolist() {
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
