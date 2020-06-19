<template>
  <div class="form-group">
    <label
      for="lastname"
      class="col-sm-2 control-label"
    >{{componentattr ? componentattr.title : defaultData.title}}</label>
    <div class="col-sm-9">
      <div class="radio" v-for="(radio, index) in radiolist" :key="index">
        <label>
          <input
            :value="radio"
            :name="componentattr ? componentattr.title : 'radiobuttons:'"
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
        componentname: "radiobuttons",
        title: "radio-buttons",
        textareacontent: "Enter\nYou\nHere!"
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
