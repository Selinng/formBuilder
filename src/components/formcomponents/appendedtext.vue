<template>
    <div class="form-group">
        <label for="firstname" class="col-sm-3 control-label">{{componentattr ? componentattr.title : defaultData.title}}</label>
        <div class="col-sm-9">
            <div class="input-group">
                <input 
                    type="text" 
                    class="form-control" 
                    :placeholder="componentattr ? componentattr.description : defaultData.description"
                    :required="componentattr ? componentattr.required : defaultData.required">
                <span class="input-group-addon">{{componentattr ? componentattr.addontext : defaultData.addontext}}</span>
            </div>
            
            <p class="help-block">{{componentattr ? componentattr.remarks : defaultData.remarks}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            defaultData: {
                componentname: 'appendedtext',
                title: 'appended-text',
                addontext: ':>',
                description: 'placeholder',
                remarks: '帮助信息',
                required: false
            }
        }
    },

    props: ['componentattr']
}
</script>
