<template>
  <div>
    <app-header></app-header>
    <div class="row">
      <components-column></components-column>
      <form-column :templateId="$route.query.id"></form-column>
      <attribute-column></attribute-column>
    </div>

  </div>
</template>

<script>
  import Header from './header'
  import ComponentsColumn from './componentsColumn'
  import FormColumn from './formColumn'
  import AttributeColumn from './attributeColumn'

  export default {
    components: {
      'app-header': Header, 
      'components-column': ComponentsColumn,
      'form-column': FormColumn,
      'attribute-column': AttributeColumn,
    }
  }
</script>
<style>
body{
  background-color: #ddd;
}
ul, li{
  list-style: none;
}
.builderleft nav,.builderright nav{
  padding: 10px;
}
.help-block {
  text-align: left;
}
form{
  padding: 40px;
  background-color: #fff;
}
.nav-header{
    background-color: #ebeef1;
    border-bottom:1px solid #D2DBE5;
    font-weight: 800;
    margin: 0;
    padding: 5px 10px;
    line-height: 25px;
}
/* .form-group-clearfloat {
  overflow: hidden;
} */
</style>

