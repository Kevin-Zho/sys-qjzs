export default {
    state:{
        search:false
    },
    mutations:{
        SHOWSEARCH:function (state,v) {
            state.search = v;
        }
    },
    actions:{
        showsearch({ commit },v) {
            commit("SHOWSEARCH",v);
        }
    }
}