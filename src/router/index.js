import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index' // 主页面
import qjx from '@/views/qjx' // 全局性
import gjdq from '@/views/gjdq/gjdq' // 国家地区主题分析
import spxm from '@/views/spxm/spxm' // 商品项目指标分析
import syszy from '@/views/syszy/syszy' // 实验室资源主题分析
Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name:'index',
            component:index,
            redirect:'/SYS_YD_QJX',
            children:[
                {
                    path: '/SYS_YD_QJX',
                    name: 'qjx',
                    component: qjx
                },
                {
                    path: '/SYS_YD_GJDQ',
                    name: 'gjdq',
                    component: gjdq
                },
                {
                    path: '/SYS_YD_SPXM',
                    name: 'spxm',
                    component: spxm
                },
                {
                    path: '/SYS_YD_SYSZY',
                    name: 'syszy',
                    component: syszy
                }
            ]
        },
    ]
})
