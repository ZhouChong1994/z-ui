import regexpList from './regexpList'

export default {
    /**
     * 判断是否为空
     */
    validatenull: (val) => {
        if (typeof val === 'boolean') {
            return false
        }
        if (typeof val === 'number') {
            return false
        }
        if (val instanceof Array) {
            if (val.length == 0) return true
        } else if (val instanceof Object) {
            if (JSON.stringify(val) === '{}') return true
        } else {
            if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true
            return false
        }
        return false
    },

    /**
     * 正则校验
     * @param key  regexpList的key
     * @param value  需要验证的值
     * @return {boolean|*}
     */
    validateRegExp: (key, value) => {
        const reg = regexpList.get(key)
        if (!reg) return true;
        return reg.test(value)
    },

    // 深拷贝对象
    deepClone
}


function deepClone(obj){
    const _toString = Object.prototype.toString

    // null, undefined, non-object, function
    if (!obj || typeof obj !== 'object') {
    return obj
    }

    // DOM Node
    if (obj.nodeType && 'cloneNode' in obj) {
    return obj.cloneNode(true)
    }

    // Date
    if (_toString.call(obj) === '[object Date]') {
    return new Date(obj.getTime())
    }

    // RegExp
    if (_toString.call(obj) === '[object RegExp]') {
    const flags = []
    if (obj.global) { flags.push('g') }
    if (obj.multiline) { flags.push('m') }
    if (obj.ignoreCase) { flags.push('i') }

    return new RegExp(obj.source, flags.join(''))
    }

    const result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {}

    for (const key in obj) {
    result[key] = deepClone(obj[key])
    }

    return result
}