const state = {
    snowTimer:''
}

const getters = {
    snowTimer(state){
        return state.snowTimer;
    }
}

const mutations = {
    changeSnowTimer(state,{newTimer}){
        state.snowTimer = newTimer;
    }
}

const actions = {
    changeSnowTimer({commit},{newTimer}){
        commit('changeSnowTimer',{newTimer})
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}