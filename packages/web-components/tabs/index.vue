<template>
  <el-tabs
    class="z-tabs"
    v-model="activeName"
    :type="type"
    :editable="editable"
    :closable="closable"
    @tab-click="handleClick"
    @tab-add="handleAdd"
    @tab-remove="handleTabRemove"
    @edit="handleTabEdit"
    :before-leave="beforeLeave"
  >
    <el-tab-pane v-for="(item, index) in tabs" :key="index" :name="item.label">
      <span slot="label"
        >{{ item.name }}
        <span v-if="item.num >= 0" :class="'event-num__' + item.label">
          {{ item.num }}</span
        ></span
      >
    </el-tab-pane>
    <div v-if="$slots.panecontent">
      <slot name="panecontent" />
    </div>
  </el-tabs>
</template>

<script>
export default {
  name: "z-tabs",
  props: {
    tabs: {
      type: [Object, Array],
      required: true,
      default: () => [],
    },
    currTab: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    editable: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    beforeLeave: Function,
  },
  data() {
    return {
      activeName: this.currTab ? this.currTab : this.tabs[0].label,
    };
  },
  watch: {
    currTab(val) {
      this.activeName = this.currTab ? this.currTab : this.tabs[0].label;
    },
  },
  computed: {},
  methods: {
    handleClick(tab) {
      this.$emit("change-tabs", tab.name);
    },
    handleAdd() {
      this.$emit("tab-add");
    },
    handleTabRemove(name) {
      this.$emit("tab-remove", name);
    },
    handleTabEdit(tabName, action) {
      this.$emit("tab-edit", tabName, action);
    },
  },
};
</script>
