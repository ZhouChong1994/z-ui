/**
 * Vue 自定义指令实现点击元素外触发事件
 * directives: {clickOutside}
 * <div v-click-outside="closeDialog"></div>
 * @type {{bind(*, *, *): void, unbind(*, *): void, update()}}
 */
export default {
    // 初始化指令
    bind(el, binding) {
        function clickHandler(e) {
            const { value, expression } = binding
            // 这里判断点击的元素是否是本身，是本身，则返回
            if (el.contains(e.target)) return false;

            // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
            if (expression) value(e);
        }

        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = clickHandler;
        document.addEventListener('click', clickHandler);
    },
    update() {
    },
    unbind(el, binding) {
        // 解除事件监听
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
};
