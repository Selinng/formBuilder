<template>
    <div class="col-sm-3 builderright">
        
        <nav class="navbar navbar-default navbar-static-top">
            <h5 class="nav-header">属性</h5>
            <form class="form-horizontal"  role="form" v-if="componentAttribute">
                <!-- <input v-for="(value, attribute, index) in $store.state.attribute"  :key="index" /> -->
                <div v-for="(value, attribute, index) in componentAttribute" :key="index">

                    <component 
                        :is="attribute"></component>
                </div>
            </form>
        </nav>
    </div>
</template>
<script>
    import addontext from './attributecomponents/addontext'
    import content from './attributecomponents/content'
    import description from './attributecomponents/description'
    import maxlength from './attributecomponents/maxlength'
    import remarks from './attributecomponents/remarks'
    import required from './attributecomponents/require'
    import style from './attributecomponents/style'
    import title from './attributecomponents/title'
    import textareacontent from './attributecomponents/textareaContent'

    import bus from '../js/event.js'
export default {
    data () {
        return {
            currentcomponent: {},
            attributeOrder: {
                1: 'title',
                2: 'content',
                3: 'textareacontent',
                4: 'addontext',
                5: 'description',
                6: 'remarks',
                7: 'maxlength',
                8: 'style',
                9: 'required'
            }
        }
    },

    computed: {
        componentAttribute() {
            let containAttribute = {}
            // for(let key in this.currentcomponent) {
            //     if(key === 'componentname' || key === 'id') {
            //         continue
            //     } else {
            //         containAttribute[key] = this.currentcomponent[key]
            //     }
            // }
            if(!this.currentcomponent) {
                return null
            }
            Object.keys(this.attributeOrder).sort().forEach(i => {
                if(this.currentcomponent[this.attributeOrder[i]] !== undefined) {
                    containAttribute['data-'+this.attributeOrder[i]] = this.currentcomponent[this.attributeOrder[i]]
                }
            })
            return containAttribute
        }
    },

    mounted() {
        bus.$on('change', data => this.currentcomponent = data)
    },

    watch: {
        // currentcomponent: function(newdata, olddata) {
        //     bus.$emit('receipt', newdata)
        // }
    },

    components: {
        'data-addontext': addontext,
        'data-content': content,
        'data-description': description,
        'data-maxlength': maxlength,
        'data-remarks': remarks, 
        'data-required': required,
        'data-style': style, 
        'data-title': title, 
        'data-textareacontent': textareacontent
    }
}
</script>
<style scoped>
    .builderright{
        position: fixed;
        top: 50px;
        right: 0;
        padding: 0;
        padding-left: 15px;
    }
    nav{
        height: 560px;
        padding: 1px;
    }
    form{
        background-color: inherit;
    }
    .nav-header{
        background-color: #ebeef1;
        border-bottom:1px solid #D2DBE5;
        font-weight: 800;
        margin: 0;
        padding: 5px 10px;
        line-height: 25px;
    }
</style>


