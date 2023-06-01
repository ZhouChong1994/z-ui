/**
 * 组件工厂
 * 动态获取组件
 */
export default class ComponentSession {
	constructor(lib) {
		this.lib = lib
		this.components = null
		this.getSession()
	}

	getSession() {
		console.log('get components platform is', this.lib)
		if (!this.components) {
			const instance = require(`./${this.lib}-session.js`).default
			if (instance instanceof Function) {
				this.components = instance.getComponent()
			}
			console.log('web components:', this.components)
		}
		return this.components
	}

}