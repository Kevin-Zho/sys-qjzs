export default {
    state: {
        area: "全国"
    },
    mutations: {
        SETAREA: function(state, name) {
            state.area = name;
        }
    },
    actions: {
        // ctx is context
        setArea({ commit }, name) {
            commit("SETAREA", name)
        }
    },
}