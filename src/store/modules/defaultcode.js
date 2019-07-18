export default {
    state: {
        code: "0000"
    },
    mutations: {
        SETDEFAULTCODE: function(state, name) {
            state.code = name;
        }
    },
    actions: {
        // ctx is context
        setdefaultcode({ commit }, name) {
            commit("SETDEFAULTCODE", name)
        }
    },
}