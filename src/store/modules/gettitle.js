export default {
    state: {
        title: "全景业务监测与展示系统"
    },
    mutations: {
        SETTITLE: function (state, text) {
            state.title = text;
        }
    },
    actions: {
        // ctx is context
        settitle({ commit }, text) {
            commit("SETTITLE", text)
        }
    },
}