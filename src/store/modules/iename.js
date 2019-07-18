export default {
    state: {
        iename: ""
    },
    mutations: {
        SETIENAME: function (state, text) {
            state.iename = text;
        }
    },
    actions: {
        // ctx is context
        setiename({ commit }, text) {
            commit("SETIENAME", text)
        }
    },
}