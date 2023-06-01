import Package from '../package.json'
/**
 * 常用配置项
 * @type {string}
 */

/**
 * 组件平台标识
 * @type {{Web: string, Mobile: string}}
 */
const PLATFORM = {
	Web: 'web',
	Mobile: 'mobile',
}
const VERSION = Package.version // 版本号
const KEY_COMPONENT_NAME = 'z-' // 组件前缀
const KEY_PLATFORM = PLATFORM.Web   // 组件平台标识

export {
	VERSION,
	KEY_COMPONENT_NAME,
	KEY_PLATFORM,
	PLATFORM
}