<template>
  <el-button class="z-button"
             :icon="icon"
             :type="type"
             :size="size"
             :plain="plain"
             :round="round"
             :loading="loading"
             :circle="circle"
             :disabled="disabled"
             @click="(evt) => { $emit('click', evt); }"
  >
    <slot />
  </el-button>
</template>

<script>
import define from "@/core/define";

export default define( {
  name: 'button',
  props: {
    icon: String,
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'small'
    },
    plain: {
      type: Boolean,
      default: 	false
    },
    round: {
      type: Boolean,
      default: 	false
    },
    loading: {
      type: Boolean,
      default: 	false
    },
    disabled: {
      type: Boolean,
      default: 	false
    },
	  circle: {
		  type: Boolean,
		  default: 	false
	  },
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
