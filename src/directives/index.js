import ClickOutside from './src/clickOutside';

const Directives = {};

Directives.install = function(Vue) {
    //添加全局资源
    Vue.directive('click-outside', ClickOutside)
};

export default Directives;
