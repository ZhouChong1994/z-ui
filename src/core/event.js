function bindEvent(safe, name, event) {
    typeof safe[name] === 'function' && safe[name]({value: safe.value, column: safe.column})
    safe.$emit(name, safe.value, event)
}

export default function () {
    return {
        methods: {
            handleFocus(event) {
                this.$emit('focus', event)
            },
            handleBlur(event) {
                this.$emit('blur', event)
            },
            handleChange(event) {
                this.$emit('change', event)
            },
            handleClick(event) {
                this.$emit('click', event)
            },
        }
    };
}
