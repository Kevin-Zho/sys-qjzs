<template>
    <div class="container">
        <div id="navmenu">
            <div class='page-header'>
                <button  class="navicon" @click = "menuClick"></button>
                <h1 class='fixtitle'><span class='org' v-if='this.$store.getters.flag'>{{ this.$store.getters.ietitle }}</span>{{ this.$store.getters.title }}</h1>
                <button  class="searchicon" @click = "popupClick" v-if='issearch && this.$store.getters.search'></button>
            </div>
            <!-- 菜单弹窗 -->
            <mt-popup
                v-model="menuVisible"
                position="left">
                <div id="menu">
                    <h2>菜单栏目</h2>
                    <ul>
                        <li v-for="(item,index) in menuList" @click = "activeList(item,index)" :key="item.SORT_ID" :class='{ active:isactive == index }'>
                            <router-link :to='item.CODE_NAME' :class='(item.CODE_NAME).slice(1,item.CODE_NAME.length)'>{{ item.FUNC_NAME }}</router-link>
                        </li>
                    </ul>
                </div>
            </mt-popup>
            <!-- 关区选择弹出窗 -->
            <mt-popup
                class = "popup"
                v-model="popupVisible"
                position="right">
                <popsearch @visible= "popup"></popsearch>
            </mt-popup>

        </div>
        <!-- 暂无数据,确认移动设备是有网络并且网络正常 -->
        <div id="tip" v-if="!contentShow">
            <mt-spinner type="double-bounce"></mt-spinner>
            <div v-if='errorTips' class="bg"></div>
            <p v-if='errorTips'>数据加载缓慢,请检查设备网络是否正常</p>
            <p v-if='errorTips'>{{ notice }}</p>
        </div>
        <router-view v-if="contentShow"></router-view>
    </div>
</template>
<script>
    import '@/styles/navmenu.scss'
    import popsearch from "@/components/popsearch"
    import { setlog } from '@/api/index'
    export default {
        components:{popsearch},
        data () {
            return {
                errorTips:false,
                notice:'',
                navtitle:'',
                issearch:true, // 是否显示搜索框,当开启权限认证时此处默认值应为false
                // 默认页面不展示,仅当用户登录的接口正常通信时,根据用户权限展示相应页面
                contentShow:true,
                popupVisible:false,
                menuVisible:false,
                isactive:0,
                menuList:[],
            }
        },
        created () {
            // this.authinfo(); //开启权限认证
        },
        mounted () {
            // 手机横屏或者屏幕尺寸发生变化时,重载(echarts图不能以当前屏幕尺寸重绘所以无法用vue的重载路由)
            // window.onresize = () => {
            //     window.location.reload();
            // }
            setTimeout(() => {
                this.errorTips = true;
            },3000)
            // 此处menuList的数据仅为google调试时使用,正式上线或移动端测试时需注释或删除此处代码
            this.menuList = [
                {CODE_NAME:'/SYS_YD_QJX',FUNC_NAME:'全局性',SORT_ID:'1'},
                {CODE_NAME:'/SYS_YD_GJDQ',FUNC_NAME:'国家地区主题分析',SORT_ID:'2'},
                {CODE_NAME:'/SYS_YD_SPXM',FUNC_NAME:'商品项目指标分析',SORT_ID:'3'},
                {CODE_NAME:'/SYS_YD_SYSZY',FUNC_NAME:'实验室资源主题分析',SORT_ID:'4'},
            ];
        },
        methods:{
            // 关区选择弹窗
            popupClick () {
                this.popupVisible = true;
            },
            // 菜单弹窗
            menuClick () {
                this.menuVisible = true;
            },
            // 菜单选项执行后关闭菜单窗口
            activeList (item,index) {
                this.isactive = index;
                this.menuVisible = false;
            },
            // 关区选择后,输入框显示当前选中的关区
            popup (v) {
                this.popupVisible = v;
            },
            // 权限加控制
            authinfo () {
                let that = this;
                document.addEventListener("deviceready", function() {
                    HGUser.getUserInfo(function (user) {
                        // 判断guid
                        // document.addEventListener("deviceready", function() {
                        let params = [{guid:user.guid}];
                        HGRequest.get(baseServer, authUrl + "GetUserInfo", params, true,function (res) {
                            // 判断用户的权限给予展示相应的页面,即直属关区还是全国关区
                            if (res.CUSTOM_CODE != '0000') {
                                let areaname = res.CUSTOM_NAME.substring(0,2) + '关区';
                                that.$store.dispatch('setArea', areaname);
                                that.$store.dispatch('setcode', res.CUSTOM_CODE);
                                that.$store.dispatch('setdefaultcode', res.CUSTOM_CODE);
                                that.$store.dispatch('setdefaultarea', areaname);
                            } else {
                                // 是否显示关区搜索
                                that.issearch = true;
                            }
                            let code = res.CUSTOM_CODE;
                            // 此时权限控制已经完毕,页面允许展示
                            that.contentShow = true;
                            setlog(code,'全局性');
                        },function (error) {
                            that.notice = error;
                            console.log("HGRequest ERROR: " + error);
                        });
                        // },false);
                        // document.addEventListener("deviceready", function() {
                        HGRequest.get(baseServer, authUrl + "GetUserFuncs", params, true,function (res) {
                            that.menuList = res;
                        },function (error) {
                            console.log("HGRequest ERROR: " + error);
                        });
                        // },false);
                    },function (error) {
                        console.log("HGUser ERROR: " + error);
                    });
                },false);
            },
        }
    }
</script>
<style scoped>
.container {
    /* overflow: hidden; */
    height: 100%;
}
#tip {
    width: 90%;
    height: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
#tip p {
    color: #4578ec;
    font-size: 22px;
    margin-top: 10%;
}
#tip .bg {
    background: url('../assets/images/404.png') no-repeat;
    background-size: contain;
    background-position: center bottom;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
}
#tip p:last-child {
    color: rgba(202, 49, 49, 0.7411764705882353);
}
</style>


