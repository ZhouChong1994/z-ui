export default function () {
    return {
        props: {
            blur: Function,
            focus: Function,
            change: Function,
            click: Function,
            params: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            value: {},
            column: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            label: {
                type: String,
                default: ''
            },
            readonly: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: ''
            },
            tip: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            dataType: {
                type: String
            },
            clearable: {
                type: Boolean,
                default: true
            },
            type: {
                type: String,
                default: ''
            },

            placeholder: {
                type: String,
                default: ''
            },

            min: {
                type: Number
            },
            max: {
                type: Number
            },
            multiple: {
                type: Boolean,
                default: false
            },
            button: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: false
            },
        }
    };
}
