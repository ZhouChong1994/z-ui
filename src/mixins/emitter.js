/**
 * 事件发送器
 * 派发与广播机制
 * 派发事件到父组件
 * 广播事件到指定子组件
 */


function broadcast(componentName, eventName, params) {
	this.$children.forEach(child => {
		const name = child.$options.name;
		if (name === componentName) {
			child.$emit.apply(child, [eventName].concat(params));
		} else {
			broadcast.apply(child, [componentName, eventName].concat([params]));
		}
	});
}

export default {
	methods: {
		dispatch(componentName, eventName, params) {
			let parent = this.$parent || this.$root;
			let name = parent.$options.name;

			while (parent && (!name || name !== componentName)) {
				parent = parent.$parent;

				if (parent) {
					name = parent.$options.name;
				}
			}
			if (parent) {
				parent.$emit.apply(parent, [eventName].concat(params));
			}
		},
		broadcast(componentName, eventName, params) {
			broadcast.call(this, componentName, eventName, params);
		}
	}
};