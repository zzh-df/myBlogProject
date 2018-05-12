// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// css初始化
import './assets/style/base.css'
import base from '@/assets/style/reset.scss'

// 引入字体图标
import './assets/iconfont/iconfont.css'

import store from '@/vuex'
import Axios from 'axios'
// 时间格式化
import dateFormat from '@/components/utilJs/dateFormat.js'


// 按需引入组件
// import {DatePicker} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.component(DatePicker.name, DatePicker)
// 全部引入组件
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$Axios=Axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
