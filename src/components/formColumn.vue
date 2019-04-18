<template>
    <div class="col-sm-6 buildercenter">
        <form class="form-horizontal build"  role="form">
            <draggable 
                :options="dragoptions"
                v-model="components" 
                @start="drag=true" 
                @add="add"
                @end="end">
                <div 
                    v-for="(component, index) in components" 
                    :key="component.id" 
                    :class="{component_box: true, selected: component.id === selectedid}" 
                    @click="selectComponent(component.id)">
                    <div class="component_operate"
                        :class="{operate_show: component.id === selectedid}">
                        <div class="move">
                            <i class="icon-move" ></i>
                        </div>
                        <div class="copy">
                            <i class="icon-plus" @click.stop="addComponent(index, component.id)"></i>
                        </div>
                        <div class="remove">
                            <i class="icon-remove" @click.stop="removeComponent(index, component.id)"></i>    
                        </div>
                    </div>
                    <component class="component" 
                        :componentattr="component" 
                        :index="index" 
                        :ref="'component'+component.id"
                        :is="component.componentname"></component>
                </div>
                <br/><br/><br/>
            </draggable>
        </form>
        <el-dialog title="确认保存" :visible.sync="dialogTemplateVisible">
            <el-form>
                <el-form-item label="输入模板名" label-width="120px">
                    <el-input v-model="templateName" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelTemplate">取 消</el-button>
                <el-button type="primary" @click="saveTemplate">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
 <script>
    import draggable from 'vuedraggable'
    import bus from '../js/event.js'
 export default {
    data () {
        return {
            lastid: 0,
            components: [],
            dragoptions: {
                group: {
                    name: 'formbuilder', 
                    pull: true,
                    put: true
                },
                animation: 300, 
                handle: '.move'
            },
            selectedid: null,
            dialogTemplateVisible: false,
            templateName: '',
            formSetting: {
                name: '',
                method: '',
                url: ''
            }
      }
    },

    computed: {
        currentcomponent() {
            return this.components.find(c => c.id === this.selectedid)
        }
    },

    props: ['templateId'],

    methods: {
        selectComponent(id) {
            this.selectedid = id
        },

        end() {
            this.drag=false
        },

        addComponent(index, id) {
            this.components.splice(index+1, 0, {...this.components[index],id: this.lastid})
            this.lastid++
        },

        removeComponent(index, id) {
            if(this.components.length-1 === index){
                if(this.components.length === 1){
                    this.selectedid = null
                } else{
                    let newindex = index - 1
                    this.selectedid = this.components[newindex].id
                }
            } else{
                let newindex = index + 1
                this.selectedid = this.components[newindex].id
            }
            this.components.splice(index, 1)
        },

        add() {
            for(let i=0; i<this.components.length; i++) {
                if(this.components[i].id === undefined) {
                    let obj = {id: this.lastid, ...this.components[i]}
                    this.$set(this.components, i, obj)
                    this.selectedid = this.lastid
                }
            }
            this.lastid += 1 
        },

        cancelTemplate() {
            this.dialogTemplateVisible = false
            this.templateName = ''
        },

        saveTemplate() {
            let pushId 
            const self = this
            async function savedata() {
                pushId = self.wilddog.child("template").push({
                    name: self.templateName,
                    data: self.components
                }, error => {
                    if (error == null){
                        self.dialogTemplateVisible = false
                        self.templateName = ''
                        
                    } else {
                        alert('添加失败')
                    }
                }).key()
            } 

            savedata()
                .then(() => {
                    this.$router.push({path: '/preview', query: {id: pushId }})
                })
        }
    },

    components: {
      draggable
    },

    watch: {
        selectedid: function(newid, oldid) {
            bus.$emit("change",this.currentcomponent)
        }
    },

    created() {
        this.wilddog.child("template").on('value', res => {
            let data = res.val()
            for(let key in data) {
                if(this.templateId === key) {
                    console.log(key, data[key])
                    this.components = data[key].data
                    break
                }
            }
            
            if(this.components.length > 0) {
                let idList = this.components.map(i => i = i.id)
                this.lastid = Math.max(...idList) + 1
            } else {
                this.lastid = 0
            }

            document.onkeydown = e => {
                let index = this.components.findIndex(i => i.id === this.selectedid)
                if(e.keyCode === 38) {
                    if(e.ctrlKey) { //Ctrl+Up
                        if(index > 0){
                            console.log(this.components.length-1)
                            let component = this.components.splice(index, 1)[0]
                            console.log(component)
                            this.components.splice(index-1, 0, component)
                            this.selectedid = component.id
                        } else {
                            index = this.components.length
                            this.selectedid = this.components[index-1].id
                        }
                    } else { //Up
                        if(index < 0) {
                            index = this.components.length
                        }
                        if(index > 0){
                            this.selectedid = this.components[index-1].id
                        }
                    }
                }
                if(e.keyCode === 40) {
                    if(e.ctrlKey) { //Ctrl+Down
                        if(index < this.components.length-1){
                            if(index < 0) {
                                this.selectedid = this.components[index+1].id
                            } else {
                                let component = this.components.splice(index, 1)
                                this.components.splice(index+1, 0, component[0])
                                this.selectedid = component[0].id
                            }
                        }
                    } else { //Down
                        if(index < this.components.length-1){
                            this.selectedid = this.components[index+1].id
                        }
                    }
                }
                if(e.keyCode == 45 && e.ctrlKey) { //Ctrl+Insert
                    if(index >= 0 && index < this.components.length){
                        this.addComponent(index, this.selectedid)
                    }
                }
                if(e.keyCode == 46 && e.ctrlKey) { //Ctrl+Delete
                    if(index >= 0 && index < this.components.length){
                        this.removeComponent(index, this.selectedid)
                    }
                }
            }
        })
    },

    mounted() {
        bus.$on('saveform', () => {
            let componentsJson = JSON.stringify(this.components)
            // console.log(this.components)
            // console.log(componentsJson)
            alert(componentsJson)
            // this.dialogFormVisible = true
        })

        bus.$on('saveAsTemplate', () => {
            this.dialogTemplateVisible = true
        })


    }    
 }
 </script>

 <style scoped>
    .buildercenter{
        margin: 70px auto 30px;
        float: none;
        user-select:none;
    }
    .build{
        border-radius: 5px;
        box-shadow: 0 0 20px #999;
    }
    .component_box{
        position: relative;
        padding: 8px;
        border: 1px solid #fff;
    }
    .selected{
        border: 1px solid rgba(228, 156, 90, 0.5);
    }
    .component_box:hover{
        border: 1px solid rgba(228, 156, 90, 0.5);
    }
    .component_operate{
        display: none;
        position: absolute;
        left: -25px;
        top: 0;
        /* width: 20px; */
    }
    .operate_show{
        display: block;
    }
    .component{
        pointer-events: none;
    }
    .imitate_component{
        display: none;
        position: relative;
        z-index: 3;
        opacity: 0.6;
    }
    .move, .copy, .remove {
        color: #FFF;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
    }
    .move {
        cursor: move;
        background: #AFCE01;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .copy {
        cursor: pointer;
        background: #00ACD6;
    }
    .remove {
        cursor: pointer;
        background: #F7632E;
        color: #FFF;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
 </style>
 