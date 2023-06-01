<template>
  <div class="zall-skeleton">
    <template v-if="loading">
      <template v-if="!$slots.template">
        <div class="zall-skeleton--item"
             v-for="(citem,cindex) in number"
             :key="cindex">
          <div class="zall-skeleton--header">
            <span :class="['zall-skeleton--avatar',className]"
                  v-if="avatar"></span>
          </div>
          <div class="zall-skeleton--content">
            <h3 :class="['zall-skeleton--title',className]"></h3>
            <div lass="zall-skeleton--list">
              <li :class="['zall-skeleton--li', className]"
                  :style="styleName"
                  v-for="(item,index) in rows"
                  :key="index"></li>
            </div>
          </div>
        </div>
      </template>
      <slot v-else name="template" />

    </template>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-skeleton",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    avatar: Boolean,
    active: {
      type: Boolean,
      default: true
    },
    block: Boolean,
    number: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  computed: {
    styleName() {
      if (this.block) {
        return {
          width: "100%"
        };
      }
      return {};
    },
    className() {
      let {active} = this;
      return {[`zall-skeleton--loading`]: active};
    }
  }
};
</script>