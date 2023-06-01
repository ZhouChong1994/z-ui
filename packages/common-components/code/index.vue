<template>
  <div class="code-view">
    <el-scrollbar :style="{height: height + 'px'}">
      <pre>
        <code :class="syntax" ref="container">
          {{ format }}
         <slot />
        </code>
      </pre>
    </el-scrollbar>
  </div>

</template>

<script>
import highlight from 'highlight.js'
export default {
  name: "code-view",
  props: {
    content: {
      type: String,
    },
    height: {
      type: Number,
      default: 240
    },
    syntax: {
      type: String,
      default: "javascript"
    }
  },
  computed: {
    format() {
      return this.content
    }
  },
  mounted() {
    if (!highlight) {
      console.log("hljs");
      return;
    }
    if (highlight && typeof highlight.highlightBlock === "function") {
      highlight.highlightBlock(this.$refs["container"]);
    }
  }
}
</script>
<style>
.code-view {
  border-radius: 4px;
  overflow-x: auto;
  background: #000000;
  color: #ffffff;
}
.hljs-string {
  color: #efd733;
}
</style>
