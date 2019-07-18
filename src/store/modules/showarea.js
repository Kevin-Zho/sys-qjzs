export default {
    state: {
        showqg: true
    },
    mutations: {
        isSHOWQG: function (state, text) {
            state.showqg = text;
        }
    },
    actions: {
        // ctx is context
        isshowqg({ commit }, text) {
            commit("isSHOWQG", text)
        }
    },
}