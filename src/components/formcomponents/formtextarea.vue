<template>
    <div class="form-group">
        <label for="name" class="col-sm-3 control-label">{{componentattr ? componentattr.title : defaultData.title}}</label>
        <div class="col-sm-9">
            <textarea 
            class="form-control" 
            rows="3" 
            :placeholder="componentattr ? componentattr.description : defaultData.description"
            :required="componentattr ? componentattr.required : defaultData.required" 
            :maxlength="componentattr ? componentattr.maxlength : defaultData.maxlength"></textarea>
            <p class="help-block">{{componentattr ? componentattr.remarks : defaultData.remarks}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            defaultData: {
                componentname: 'formtextarea',
                title: 'form-textarea',
                description: 'placeholder',
                remarks: '帮助信息',
                maxlength: 140,
                required: false
            }
        }
    },
    

    props: ['componentattr']
}
</script>

