<template>
  <div class="form-group">
    <label
      for="name"
      class="col-sm-2 control-label"
    >{{componentattr ? componentattr.title : defaultData.title}}</label>
    <div class="col-sm-9">
      <button
        type="button"
        :data-type="type"
        class="btn"
        :class="'btn-'+ (componentattr ? componentattr.style.toLowerCase() : defaultData.style.toLowerCase())"
        @click="excuteEvent"
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
        style: "Primary",
        type: "submit"
      }
    };
  },

  props: ["componentattr"],

  computed: {
    type() {
      return this.componentattr ? this.componentattr.type : this.defaultData.type
    }
  },

  methods: {
    excuteEvent() {
      if (this.$route.path !== '/preview') {
        return
      }
      const form = document.forms[0]
      if (this.type === 'submit') {
        const formData = new FormData(form)
        console.log(formData)
        form.submit()
      }
      if (this.type === 'reset') {
        form.reset()
      }
    }
  }
};
</script>
