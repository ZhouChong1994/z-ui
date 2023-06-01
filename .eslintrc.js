module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential'],
	rules: {
		'no-console': 'off',
		'vue/multi-word-component-names': 'off'
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		ecmaFeatures: {
			// 支持装饰器
			legacyDecorators: true
		}
	}
}
