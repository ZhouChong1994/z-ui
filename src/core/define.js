
import { KEY_COMPONENT_NAME } from '@/config'

/**
 * 声明函数
 * 用于包裹组件实例，并返回合成实例
 * @param component
 * @return {VueComponents} component
 */

export default function(component) {
  component.name = KEY_COMPONENT_NAME + (component.name || '');

  Object.assign(component.methods || {}, {
    b (el = '', prefix = '__') {
      if(this.$options instanceof Object)
        throw new Error('Maybe you are not calling methods within mobile-components')

      const { name } = this.$options;
      if (el === 'string') el = [el];

      const synthetic = (name, el, tag) => el ? name + tag + el : name;

      return el.map(item => synthetic(name, item, prefix)).join();
    },


    /**
     * 判断是否为空
     * @param val
     * @return {boolean}
     */
    validatenull(val) {
      if (val instanceof Array) {
         return val.length === 0
      }
      if (val instanceof Object) {
        return JSON.stringify(val) === '{}' || Object.keys(val).length === 0
      }

      return val === 'null' || val == null || val === 'undefined' || val === undefined || val === ''
    }
  })
  return component;
}
