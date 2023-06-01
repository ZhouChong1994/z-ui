<template>
  <span :class="[sizeCls,'el-avatar']"
        :style="sizeStyle">
    <img v-if="src"
         :src="src"
         alt="">
    <i :class="icon"
       v-else-if="icon"></i>
    <span v-else
          :style="sizeChildrenStyle"
          ref="avatarChildren">
      <slot></slot>
    </span>
  </span>
</template>
<script>
const prefixCls = "el-avatar";
export default {
	name: "z-avatar",
	props: {
		src: String,
		shape: {
			validator: val => ["circle", "square"].includes(val),
			default: "circle"
		},
		size: {
			validator: val => {
				return (
						typeof val === "number" || ["small", "large", "medium"].includes(val)
				);
			},
			default: "large"
		},
		icon: String
	},
	data () {
		return {
			scale: 1
		};
	},

	updated () {
		this.$nextTick(() => {
			this.setScale();
		});
	},
	computed: {
		sizeChildrenStyle () {
			let childrenStyle = {};
			const childrenNode = this.$refs.avatarChildren;
			const transformString = `scale(${this.scale}) translateX(-50%)`;
			childrenStyle = {
				msTransform: transformString,
				WebkitTransform: transformString,
				transform: transformString
			};
			if (typeof this.size === "number") {
				childrenStyle.lineHeight = `${this.size}px`;
			}
			return childrenStyle;
		},
		sizeCls () {
			return {
				[`${prefixCls}--${this.shape}`]: this.shape,
				[`${prefixCls}--large`]: this.size === "large",
				[`${prefixCls}--medium`]: this.size === "medium",
				[`${prefixCls}--small`]: this.size === "small"
			};
		},
		sizeStyle () {
			return typeof this.size === "number"
					? {
						width: `${this.size}px`,
						height: `${this.size}px`,
						lineHeight: `${this.size}px`,
						fontSize: this.icon ? `${this.size / 2}px` : "18px",
					}
					: {};
		}
	},
	mounted () {
		this.$nextTick(() => {
			this.setScale();
		});
	},
	methods: {
		setScale () {
			const childrenNode = this.$refs.avatarChildren;
			if (childrenNode) {
				const childrenWidth = childrenNode.offsetWidth;
				const avatarWidth = this.$el.getBoundingClientRect().width;
				if (avatarWidth - 8 < childrenWidth) {
					this.scale = (avatarWidth - 8) / childrenWidth;
				} else {
					this.scale = 1;
				}
			}
		}
	}
}
</script>
