import Vue from 'vue'
import Vuex from 'vuex'

import getarea from './modules/getarea'
import getcode from './modules/getcode'
import gettitle from './modules/gettitle'
import showflag from './modules/showflag'
import showsearch from './modules/showsearch'
import isshowqg from './modules/showarea'
import ietitle from './modules/ietitle'
import iename from './modules/iename'
import defaultarea from './modules/defaultarea'
import defaultcode from './modules/defaultcode'
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        // 搜索查询关区部分
        getarea,
        // 关区代码
        getcode,
        // 导航标题
        gettitle,
        // 进出口
        iename,
        // 是否显示进出口悬浮球
        showflag,
        // 标题中显示 进出口状态
        ietitle,
        // 搜索关区的图表什么时候出现
        showsearch,
        // 是否显示全国关区选项
        isshowqg,
        // 进入页面时的身份
        defaultcode,
        defaultarea
    },
    getters
})