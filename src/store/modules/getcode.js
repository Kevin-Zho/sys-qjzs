export default {
    state: {
        areacode: "0000"
    },
    mutations: {
        SETCODE: function (state, code) {
            state.areacode = code;
        }
    },
    actions: {
        // ctx is context
        setcode({ commit }, code) {
            commit("SETCODE", code)
        }
    },
}