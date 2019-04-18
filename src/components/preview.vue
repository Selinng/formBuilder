<template>
    <div class="row">
        <div class="col-sm-3 builderleft">
            
            <nav class="navbar navbar-default navbar-static-top" style="margin-bottom:0;"> 
                <select class="form-control nav-select" v-model="previewtype">
                    <option value="all">全部</option>
                    <option value="often">常用</option>
                </select>
            </nav>

            <ul class="list-group">
                <li 
                    class="list-group-item" 
                    :class="{active: key===selectkey}"
                    @click="preview(key)"
                    v-for="(item, key) in formList" 
                    :key="key">
                {{item.name || item.setting.name}}
                </li>
            </ul>
    

        </div>
        <div class="col-sm-9 fr content">
            <div class="select-button">
                <center class="center">
                    <button 
                        class="btn btn-info btn-sm"
                        @click="selectTemplate">选择此模板</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <button 
                        class="btn btn-danger btn-sm"
                        @click="deleteTemplate">删除此模板</button>
                </center>
            </div>
            <form 
                class="form-horizontal"  
                role="form">
                <component 
                        v-for="(item, key) in selectForm.data"
                        :key="key"
                        :componentattr="item"
                        :is="item.componentname"></component>
            </form>
        </div>
    </div>
</template>
 <script>
    import bus from '../js/event.js'
    import Vue from 'vue'
 export default {
    data () {
        return {
            previewtype: 'all',
            formList: {},
            selectkey: null,
            components: [
                {
                    name: 'formtitle',
                    type: ''
                },
                {
                    name: 'formaddress',
                    type: 'listselection'
                },
                {
                    name: 'appendedtext',
                    type: 'input'
                },
                {
                    name: 'prependedtext',
                    type: 'input'
                },
                {
                    name: 'formbutton',
                    type: 'button'
                },
                {
                    name: 'checkboxes',
                    type: 'choice'
                },
                {
                    name: 'dateinput',
                    type: 'input'
                },
                {
                    name: 'numberinput',
                    type: 'input'
                },
                {
                    name: 'timeinput',
                    type: 'input'
                },
                {
                    name: 'textinput',
                    type: 'input'
                },
                {
                    name: 'filebutton',
                    type: 'button'
                },
                {
                    name: 'inlinecheckboxes',
                    type: 'choice'
                },
                {
                    name: 'radiobuttons',
                    type: 'choice'
                },
                {
                    name: 'inlineradios',
                    type: 'choice'
                },
                {
                    name: 'starrating',
                    type: 'choice'
                },
                {
                    name: 'formtextarea',
                    type: 'input'
                },
                {
                    name: 'selectbasic',
                    type: 'listselection'
                },
                {
                    name: 'selectmultiple',
                    type: 'listselection'
                }
            ]
        }
    },

    computed: {
        selectForm() {
            if(this.selectkey){
                return this.formList[this.selectkey]
            } else{
                return []
            }
        }
    },

    methods: {
        selectTemplate() {
            this.$router.push({path: '/edit', query: { id: this.selectkey }})
        },

        preview(key) {
            this.selectkey = key
        },

        deleteTemplate() {
            console.log(this.wilddog)
            this.wilddog.child('template').child(this.selectkey).set(null)
            .then(() => {
                // this.$router.query = null
                console.log(this.$router)
                this.wilddog.child('template').on('value', res => {
                    this.formList = res.val()
                    this.selectkey = Object.keys(this.formList)[0]
                })
                alert('删除成功！')

            })
        }
    },

    created() {
        this.wilddog.child('template').on('value', res => {
            this.formList = res.val()
            if(this.$route.query.id && Object.keys(this.formList).includes(this.$route.query.id)) {
                this.selectkey = this.$route.query.id
            } else{
                this.selectkey = Object.keys(this.formList)[0]
            }
        })
        this.components.forEach(component => {
            Vue.component(component.name, require("./formcomponents/" + component.name + ".vue").default )
        })

    }
 }
 </script>
 <style scoped>
 
    .fr{
        float: right;
    }
    body{
        background-color: #ddd;
        padding-top: 0;
    }
    .center{
        background-color: #fcf8e3;
        padding: 15px;
        margin-bottom: 20px;
        border: 1px solid #faebcc;
        border-radius: 4px;
    }
    .content{
        padding-left: 8px;
        padding-right: 15px;
    }
    ul{
        list-style: none;
        /* padding: 0 10px; */
        height: 570px;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #f8f8f8;
    }
    ul li{
        background-color: #fff;
        cursor: default;
    }
    .builderleft{
        position: fixed;
        top: 0;
        left: 0;
        padding: 0;
    }
    nav{
        padding: 1px;
    }
    .nav-select{
        margin: 5px auto;
        width: 90%;
    }
    form{
        margin: 50px auto;
        padding: 40px 30px;
        max-width: 750px;
        background-color: #fff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, .1);
        border-radius: 6px;
    }
 </style>
 
 