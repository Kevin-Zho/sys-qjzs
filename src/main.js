// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import Mint from 'mint-ui';
import store from './store/index';

import 'mint-ui/lib/style.css'
import "@/styles/common.css"
import "@/utils/flexible.js"
import * as methods from '@/utils/filter.js'

// 千分位过滤函数
Vue.filter('Thounsands',(num) => {
    return (num || 0).toString().replace(/\d+/, function (n) {
        var len = n.length;
        if (len % 3 === 0) {
            return n.replace(/(\d{3})/g, ',$1').slice(1);
        } else {
            return n.slice(0, len % 3) + n.slice(len % 3).replace(/(\d{3})/g, ',$1');
        }
    });
})

// 注册全局函数
for (var key in methods) {
    Vue.prototype[key] = methods[key]
}

// 请求地址前缀,以及server任何文件里其他变量和对象均不可以此命名
//10.99.42.53/WebApi/api/Query/Query
// window.authUrl = "/WebApi/api/Auth/";
// window.baseUrl = "/WebApi/api/Query/Query";
// window.rootUrl = "/WebApi/api/Query/QueryChart";
// window.baseServer = "hgmeap-pluginserver-qjzs";
Vue.use(Mint);
Vue.config.productionTip = false
// Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})