
<template>
  <div class="zall-input-container">
    <el-input
        ref="zallInputRef"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :autosize="autosize"
        :readonly="readonly"
        :class="{ 'input-show-limit': showLimit }"
        @input="handleInput($event)"
        @change="handleChange($event)"
        @keydown.enter.native="handleKeydown"
    />
    <span v-if="showLimit && maxlength" class="zall-input-number">{{
        (maxlength - (value ? value.length : 0)) < 0 ? 0 : (maxlength - (value ? value.length : 0))
      }}</span>
  </div>
</template>

<script>
export default {
  name: "z-input",
  props: {
    type: {
      type: String,
      default: 'input'
    },
    maxlength: {
      type: [Number, String],
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },

    placeholder: {
      type: String,
      default: '请输入'
    },

    showLimit: {
      type: Boolean,
      default: false
    },

    autosize: {
      type: [Object, Boolean],
      default: () => {
        return { minRows: 1, maxRows: 3 }
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      inputVal: '',

      vaildVal: true
    }
  },
  watch: {},

  mounted() {},
  methods: {
    handleInput(val) {
      this.$emit('input', val)
    },
    handleChange(val) {
      this.$emit('change', val)
    },
    focus() {
      this.$refs.zallInputRef.focus()
    },
    handleKeydown(val) {
      const e = window.event || arguments[0]
      // console.log(e,e.keyCode)
      if (e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13) {
        e.returnValue = false
        return false
      }
    }
  }
}
</script>

