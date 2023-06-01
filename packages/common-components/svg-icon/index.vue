<template>
	<span>
		<svg
			:class="`${className} ${spin ? 'zall-svg-animation' : ''}`"
			class="zall-svg-icon"
			aria-hidden="true"
			v-on="$listeners"
			v-if="hasExit"
		>
			<use :xlink:href="iconName" />
		</svg>
		<i
			:class="name.replace(/\-$/, '')"
			v-if="!hasExit && isLower"
			style="text-align: left; width: 1em; height: 1em; margin-right: 0; transform: translateY(-2px)"
		/>
	</span>
</template>

<script>
export default {
	name: 'zall-icon',
	props: {
		// svg图标名
		name: {
			type: String,
			required: true
		},
		//自定义类名
		className: {
			type: String,
			default: ''
		},
		// 是否旋转
		spin: {
			type: Boolean,
			default: false
		},
		//是否降级兼容  当找不到icon时，匹配elementui图标
		isLower: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		iconName() {
			return this.name.startsWith('#icon-') ? this.name : `#icon-${this.name}`
		},
		hasExit() {
			if (this.name.startsWith('#icon-')) return true
			let exist = false
			try {
				exist = require(`@/icons/svg/${this.name}.svg`)
			} catch (e) {
				exist = false
			}
			return !!exist
		}
	}
}
</script>

<style lang="scss" scoped>
.zall-svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;

	&.zall-svg-animation {
		animation: rotate 2s linear infinite;
	}
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
}
</style>
