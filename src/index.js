import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {KEY_COMPONENT_NAME, VERSION, KEY_PLATFORM} from "@/config";
import ComponentSession from "@/controller/componentSession";
import './icons'
import BaseUtils from '@/utils/utils';
import EventBus from '@/utils/eventBus';
import Watermark from '@/utils/watermark';
import Directives from '@/directives';
import './style/index.scss';

Vue.use(ElementUI)
Vue.config.productionTip = false

let KEY = KEY_PLATFORM
let components = {}

const install = function (Vue, opts = {}) {

  Object.keys(components).map(ele => {
    let component = components[ele];
    let name = component.name || '';
    name = name.startsWith(KEY_COMPONENT_NAME) ? name : KEY_COMPONENT_NAME + name;
    console.log(name)
    Vue.component(name, component);
  });

  Vue.prototype.$baseUtils = BaseUtils
  Vue.prototype.$eventBus = new EventBus()
  Vue.prototype.$watermark = Watermark
  Vue.prototype.$zall = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.use(Directives);
};

if (typeof window !== 'undefined' && window.Vue) {
  components = new ComponentSession(KEY).components
  install(window.Vue);
}


export default function (lib) {
  KEY = lib
  components = new ComponentSession(KEY).components
  return {
    version: VERSION,
    install,
    ...components
  }
}
