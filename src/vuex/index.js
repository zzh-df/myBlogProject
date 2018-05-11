import Vue from 'vue'
import Vuex from 'vuex'


// 引入全局状态
import state from '@/vuex/state'
import mutations from '@/vuex/mutations'
import actions from '@/vuex/actions'
import getters from '@/vuex/getters'


// 引入组件状态




Vue.use(Vuex)
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        
    }
})