<template>
  <div
    ref="selectContainer"
    class="zall-select-container"
    :class="{ 'border-bottom': borderBottom }"
  >
    <el-select
      ref="selectRef"
      v-model="selectedVal"
      :placeholder="placeholder"
      size="small"
      popper-class="zall-el-select"
      :class="className"
      :style="[styles, { width: borderBottom ? '100%' : selLen }]"
      :automatic-dropdown="automatic"
      :disabled="disabled"
      :clearable="clearable"
      :no-data-text="$slots.empty ? null : noDataText"
      @visible-change="visibleChange"
      @change="changeVal"
    >
      <!-- <slot name="empty" slot="empty" /> -->
      <template slot="empty" v-if="$slots.empty">
        <slot name="empty"></slot>
      </template>
      <el-option
        v-for="item in list"
        :key="item[config.value]"
        :label="item[config.label]"
        :value="item[config.value]"
        :disabled="item.disabled"
      />
    </el-select>
    <div :class="['common-drop-down', { visible: visible }]">
      <svg-icon name="icon-down" />
    </div>
  </div>
</template>

<script>
import { getCharSizeByCanvas } from "./util";

export default {
  name: "z-select",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
    items: {
      type: Array,
      default: () => [],
    },
    className: {
      type: String,
      default: "",
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => ({
        label: "label",
        value: "value",
      }),
    },
    borderBottom: {
      type: Boolean,
      default: false,
    },
    noDataText: {
      type: String,
      default: "无数据",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    const label = this.getLabel(this.items, this.value);
    const sel = label || this.placeholder;
    return {
      selLen: `${46 + getCharSizeByCanvas(sel).width}px`,
      selectedVal: this.value,
      list: this.items,
      visible: false,
      automatic: false,
    };
  },
  watch: {
    selectedVal: function (val) {
      const label = this.getLabel(this.list, val);
      this.selLen = `${46 + getCharSizeByCanvas(label).width}px`;
      this.$emit("get-value", val, label, this.type);
    },
    value: function (val) {
      this.selectedVal = val;
    },
    items: function (val) {
      this.list = val;
      const label = this.getLabel(val, this.selectedVal);
      this.selLen = `${46 + getCharSizeByCanvas(label).width}px`;
    },
  },
  // created(){}
  methods: {
    getLabel(list, val) {
      return typeof list[0] === "string"
        ? list?.find((item) => item === val) || list[0]
        : list?.find((item) => item[this.config.value] === val)?.[
            this.config.label
          ] ||
            list[0]?.[this.config.label] ||
            val ||
            this.placeholder;
    },
    visibleChange(val) {
      this.visible = val;
      this.$refs.selectContainer.click();
    },
    show() {
      this.$refs.selectRef.focus();
      this.automatic = true;
    },
    blur() {
      this.$refs.selectRef.blur();
    },
    changeVal(val) {
      const label = this.getLabel(this.list, val);
      this.$emit("change-val", val, label, this.type);
      this.$emit("change", val, label, this.type);
    },
  },
};
</script>
<style lang="scss" scoped></style>
