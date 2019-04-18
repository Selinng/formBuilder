export const componentsConfig = {
    'form-address': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: false,
        description: false,
        remarks: true,
        maxlength: false,
        required: false,
        style: false
    },
    'appended-text': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: true,
        description: true,
        remarks: true,
        maxlength: false,
        required: true,
        fbstyle: false
    },
    'form-button': {
        fbtitle: true,
        fbcontent: true,
        textareacontent: false,
        addontext: false,
        description: false,
        remarks: false,
        maxlength: false,
        required: false,
        fbstyle: ['Default', 'Primary', 'Info', 'Success', 'Warning', 'Danger']
    },
    'check-boxes': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: true,
        addontext: false,
        description: false,
        remarks: false,
        maxlength: false,
        required: false,
        fbstyle: false
    },
    'date-input': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: false,
        description: false,
        remarks: true,
        maxlength: false,
        required: true,
        fbstyle: false
    },
    'file-button': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: false,
        description: false,
        remarks: true,
        maxlength: false,
        required: false,
        fbstyle: false
    },
    'inline-checkboxes': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: true,
        addontext: false,
        description: false,
        remarks: false,
        maxlength: false,
        required: false,
        fbstyle: false
    },
    'number-input': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: false,
        description: false,
        remarks: true,
        maxlength: false,
        required: true,
        fbstyle: false
    },
    'prepended-text': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: true,
        description: true,
        remarks: true,
        maxlength: false,
        required: true,
        fbstyle: false
    },
    'radio-buttons': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: true,
        addontext: false,
        description: false,
        remarks: false,
        maxlength: false,
        required: false,
        fbstyle: false
    },
    'selectbasic': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: true,
        addontext: false,
        description: false,
        remarks: false,
        maxlength: false,
        required: false,
        fbstyle: false
    },
    'selectmultiple': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: true,
        addontext: false,
        description: false,
        remarks: false,
        maxlength: false,
        required: false,
        fbstyle: false
    },
    'star-rating': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: false,
        description: false,
        remarks: true,
        maxlength: false,
        required: false,
        fbstyle: false
    },
    'form-textarea': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: false,
        description: true,
        remarks: true,
        maxlength: true,
        required: true,
        fbstyle: false
    },
    'text-input': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: false,
        description: true,
        remarks: true,
        maxlength: false,
        required: true,
        fbstyle: false
    },
    'time-input': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: false,
        description: false,
        remarks: true,
        maxlength: false,
        required: true,
        fbstyle: false
    },
    'form-title': {
        fbtitle: true,
        fbcontent: false,
        textareacontent: false,
        addontext: false,
        description: false,
        remarks: true,
        maxlength: false,
        required: false,
        fbstyle: false
    }
}
export const componentTemplate = {
    'form-address': {
        componentname: 'form-address',
        selected: false,
        title: 'form-address',
        remarks: '帮助信息'
    },
    'appended-text': {
        componentname: 'appended-text',
        selected: false,
        title: 'appended-text',
        addontext: ':>',
        description: 'placeholder',
        remarks: '帮助信息',
        required: false
    },
    'form-button': {
        componentname: 'form-button',
        selected: false,
        title: 'form-button',
        content: '按钮',
        style: 'Default'
    },
    'check-boxes': {
        componentname: 'check-boxes',
        selected: false,
        title: 'check-boxes',
        textareacontent: 'Enter\nYou\nHere!'
    },
    'date-input': {
        componentname: 'date-input',
        selected: false,
        title: 'date-input',
        remarks: '帮助信息',
        required: false
    },
    'file-button': {
        componentname: 'file-button',
        selected: false,
        title: 'file-button',
        remarks: '帮助信息'
    },
    'inline-checkboxes': {
        componentname: 'inline-checkboxes',
        selected: false,
        title: 'inline-checkboxes',
        textareacontent: 'Enter\nYou\nHere!'
    },
    'inline-radios': {
        componentname: 'inline-radios',
        selected: false,
        title: 'inline-radios',
        textareacontent: 'Enter\nYou\nHere!'
    },
    'number-input': {
        componentname: 'number-input',
        selected: false,
        title: 'number-input',
        remarks: '帮助信息',
        required: false
    },
    'prepended-text': {
        componentname: 'prepended-text',
        selected: false,
        title: 'prepended-text',
        addontext: ':>',
        description: 'placeholder',
        remarks: '帮助信息',
        required: false
    },
    'radio-buttons': {
        componentname: 'radio-buttons',
        selected: false,
        title: 'radio-buttons',
        textareacontent: 'Enter\nYou\nHere!'
    },
    'selectbasic': {
        componentname: 'selectbasic',
        selected: false,
        title: 'selectbasic',
        textareacontent: 'Enter\nYou\nHere!'
    },
    'selectmultiple': {
        componentname: 'selectmultiple',
        selected: false,
        title: 'selectmultiple',
        textareacontent: 'Enter\nYou\nHere!'
    },
    'star-rating': {
        componentname: 'star-rating',
        selected: false,
        title: 'star-rating',
        remarks: '帮助信息'
    },
    'form-textarea': {
        componentname: 'form-textarea',
        selected: false,
        title: 'form-textarea',
        description: 'placeholder',
        remarks: '帮助信息',
        maxlength: 140,
        required: false
    },
    'text-input': {
        componentname: 'text-input',
        selected: false,
        title: 'text-input',
        description: 'placeholder',
        remarks: '帮助信息',
        required: false
    },
    'time-input': {
        componentname: 'time-input',
        selected: false,
        title: 'time-input',
        remarks: '帮助信息',
        required: false
    },
    'form-title': {
        componentname: 'form-title',
        selected: false,
        title: 'form-title',
        remarks: '帮助信息'
    }
}