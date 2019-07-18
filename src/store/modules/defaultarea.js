export default {
    state: {
        area: "全国"
    },
    mutations: {
        SETDEFAULTAREA: function(state, name) {
            state.area = name;
        }
    },
    actions: {
        // ctx is context
        setdefaultarea({ commit }, name) {
            commit("SETDEFAULTAREA", name)
        }
    },
}