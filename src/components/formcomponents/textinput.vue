<template>
    <div class="form-group">
        <label for="name" class="col-sm-3 control-label">{{finalTitle}}</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" :placeholder="finalDescription" :required="finalRequired">
            <p class="help-block">{{finalRemarks}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            defaultData: {
                componentname: 'textinput',
                title: 'text-input',
                description: 'placeholder',
                remarks: '帮助信息',
                required: false
            }
        }
    },

    computed: {
        finalTitle() {
            return this.componentattr ? this.componentattr.title : this.defaultData.title
        },

        finalRemarks() {
            return this.componentattr ? this.componentattr.remarks : this.defaultData.remarks
        },

        finalDescription() {
            return this.componentattr ? this.componentattr.description : this.defaultData.description
        },

        finalRequired() {
            return this.componentattr ? this.componentattr.required : this.defaultData.required
        }

    },


    props: ['componentattr']
}
</script>

