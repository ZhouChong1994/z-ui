<template>
  <div class="search-box"
       :style="{width: width + (width.indexOf('%') !== -1 ? '' : (width.indexOf('px') !== -1 ? '' : 'px'))}">
    <el-input
        :type="type"
        v-model.trim="searchVal"
        :placeholder="placeholder"
        :disabled="disabled"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="onChange"
        @input="onInput"
    >
      <svg-icon v-if="prefixIcon" slot="prefix" :name="prefixIcon"/>
      <svg-icon
          v-if="clearable && searchVal"
          slot="suffix"
          style="cursor: pointer"
          name="search-box-close"
          @click="clean"
      />
      <template slot="prepend"
                v-if="prepend"><span @click="onPrepend()">{{ prepend }}</span>
      </template>
      <template slot="append"
                v-if="append"><span @click="onAppend()">{{ append }}</span></template>
    </el-input>
  </div>
</template>

<script>
import event from "@/core/event";
export default {
  name: 'search-box',
  mixins: [event()],
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '输入关键字搜索'
    },
    width: {
      type: String,
      default: '232'
    },
    type: {
      type: String,
      default: 'text'
    },
    prefixIcon: {
      type: String
    },
    clearable: {
      type: [String, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    append: {
      type: String
    },
    prepend: {
      type: String
    },
    onAppend: {
      type: Function,
      default: () => {
      }
    },
    onPrepend: {
      type: Function,
      default: () => {
      }
    },

  },
  data() {
    return {
      searchIcon: 'search-gray',
      searchVal: this.value
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.searchVal = val
    }
  },
  methods: {
    onChange() {
      this.$emit('change-search-val', this.searchVal)
    },
    onInput() {
      this.$emit('input-search-val', this.searchVal)
    },
    clean() {
      this.searchVal = ''
      this.onChange()
    }
  }
}
</script>
