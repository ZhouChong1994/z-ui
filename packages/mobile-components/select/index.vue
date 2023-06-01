<template>
	<div class="select-container">
		<el-select
			ref="selectRef"
			v-model="selected"
			:placeholder="placeholder"
			:size="size"
			:loading="loading"
			:loading-text="loadingText"
			:multiple="multiple"
			:multiple-limit="limit"
			:filterable="filterable"
			popper-class="zs-el-select"
			@visible-change="visibleChange"
			:before-add="beforeAdd"
			:style="{ width: width }"
			:disabled="disabled"
		>
			<template #empty>
				<div :style="{ width: minWidth }" style="margin-top: 6px" v-if="isAdd">
					<div class="add-warp" v-if="!filterable">
						<el-input
							v-model.trim="currentVal"
							size="small"
							type="text"
							:placeholder="addPlaceholder"
							maxlength="10"
						></el-input>
						<div class="add-warp-icon el-icon-plus" style="cursor: pointer" @click="onAdd"></div>
					</div>
					<p class="el-select-dropdown__empty" style="margin-top: 20px">
						{{ noDataText }}
					</p>
				</div>
			</template>

			<li style="margin-bottom: 6px" :style="{ width: minWidth }" v-if="isAdd">
				<div class="add-warp">
					<el-input
						v-model.trim="currentVal"
						size="small"
						type="text"
						:placeholder="addPlaceholder"
						maxlength="10"
					></el-input>
					<div class="add-warp-icon" style="cursor: pointer" @click="onAdd">
						<i class="el-icon-plus"></i>
					</div>
				</div>
			</li>

			<el-option
				v-for="item in optionsDic"
				:key="item[optionKey]"
				:label="item[optionLabel]"
				:value="item[optionKey]"
				:disabled="item.disabled"
			/>
		</el-select>
	</div>
</template>

<script>

import { validatenull } from "@/utils/utils";

export default {
	name: 'z-select',
	data() {
		return {
			selected: this.value,
			optionsDic: this.options,
			currentVal: '',
			minWidth: this.width,
			filteredEmpty: false,
		}
	},
	props: {
		value: {},
		options: {
			type: Array,
			default: () => []
		},
		optionLabel: {
			type: String,
			default: 'label'
		},
		optionKey: {
			type: String,
			default: 'value'
		},
		placeholder: {
			type: String,
			default: '请选择'
		},
		addPlaceholder: {
			type: String,
			default: '请输入'
		},
		noDataText: {
			type: String,
			default: '无数据'
		},
		isAdd: {
			type: Boolean,
			default: false
		},
		beforeAdd: {
			type: Function
		},
		disabled: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: '100%'
		},
		size: {
			type: String,
			default: 'small'
		},
		loading: {
			type: Boolean,
			default: false
		},
		loadingText: {
			type: String
		},
		multiple: {
			type: Boolean,
			default: false
		},
		// 多选时用户最多可以选择的项目数，为 0 则不限制
		limit: {
			type: Number,
			default: 0
		},
		filterable: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		value(val) {
			if (!validatenull(val)) {
				this.selected = val
			}
		},
		options(val) {
			this.optionsDic = val || []
			this.minWidth = this.$refs.selectRef.$el.getBoundingClientRect().width + 'px'
		},
		selected(val) {
			console.log('selected-1', val)
			this.$emit('input', val)
		}
	},
	computed: {},
	methods: {
		visibleChange() {
			this.currentVal = ''
		},
		onAdd() {
			if (!this.currentVal) return
			const none = () => {
				this.currentVal = ''
			}
			if (typeof this.beforeAdd === 'function') {
				this.beforeAdd(none, this.currentVal)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.zs-el-select {
	.add-warp {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		border: 1px solid #2749f1;
		padding: 0 6px 0 0;
		margin: 0 8px;
		box-sizing: border-box;
		::v-deep .el-input {
			flex: 1;
			.el-input__inner {
				border: none;
			}
		}
		.add-warp-icon {
			height: 20px;
			width: 20px;
			border-radius: 4px;
			display: flex;
			justify-content: center;
			align-items: center;
			&:hover {
				color: #4a77f3;
			}
		}
	}
	.el-select-dropdown__item > span {
		padding: 0 8px !important;
	}
	.el-select-dropdown__item.hover,
	.el-select-dropdown__item:hover {
		background: #f0f2fd;
	}
}
</style>
