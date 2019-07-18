export default {
    state: {
        ietitle: "进出口"
    },
    mutations: {
        SETIETITLE: function (state, text) {
            state.ietitle = text;
        }
    },
    actions: {
        // ctx is context
        setietitle({ commit }, text) {
            commit("SETIETITLE", text)
        }
    },
}