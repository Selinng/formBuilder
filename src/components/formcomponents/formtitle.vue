<template>
  <div class="page-header">
    <h3>
      {{finalMaintitle}}
      <br />
      <small>{{finalSubheading}}</small>
    </h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultData: {
        componentname: "formtitle",
        title: "form-title",
        remarks: "帮助信息"
      }
    };
  },

  computed: {
    finalMaintitle() {
      return this.componentattr
        ? this.componentattr.title
        : this.defaultData.title;
    },

    finalSubheading() {
      return this.componentattr
        ? this.componentattr.remarks
        : this.defaultData.remarks;
    }
  },

  props: ["componentattr"]
};
</script>
<style scoped>
h3 {
  font-weight: 700;
}
</style>


