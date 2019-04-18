<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>
<script>
    import Vue from 'vue'
    import bus from './js/event.js'
export default {
  data() {
    return {

    }
  },

  created() {
    // this.components.forEach(component => {
    //     Vue.component(component.name, require("./components/formcomponents/" + component.name + ".vue").default )
    // })

  }
}
</script>
<style>
    body{
        background-color: #ddd;
        overflow-x: hidden;
    }
</style>



