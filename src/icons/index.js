import Vue from 'vue'
import svgIcon from '@pack/common-components/svg-icon' // svg component

// register globally
Vue.component('svg-icon', svgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
