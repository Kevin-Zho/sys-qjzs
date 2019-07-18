export default {
    state: {
        showflag: false
    },
    mutations: {
        SHOWFLAG: function(state, flag) {
            state.showflag = flag;
        }
    },
    actions: {
        // ctx is context
        showflag({ commit }, flag) {
            commit("SHOWFLAG", flag)
        }
    },
}