<template>
    <div class="form-group">
        <label for="name" class="col-sm-3 control-label">{{componentattr ? componentattr.title : defaultData.title}}</label>
        <div class="col-sm-9">
            <input 
                type="date" 
                class="form-control" 
                :required="componentattr ? componentattr.required : defaultData.required"/>
            <p class="help-block">{{componentattr ? componentattr.remarks : defaultData.remarks}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            defaultData: {
                componentname: 'dateinput',
                title: 'date-input',
                remarks: '帮助信息',
                required: false
            }
        }
    },

    props: ['componentattr']
}
</script>
