<template>
    <div>
        <div id="floatWindow-outer">
            <!-- 悬浮的HTML -->
            <div class="xuanfu" id="floatWindow" ref='oDiv'
            :class='{ transition:istransition }'
            @touchstart.stop="down"
            @touchmove.stop="move"
            @touchend.stop="end"
             >
                <div class="outerball" :class='{ left:isleft,active:showInter }'>
                    <div class='innerball' :class='{ active:isShow }'>
                        <span :class='{active:current == index}' @touchstart.stop='ieFlag(item,index)' v-for='(item,index) in iedatas' :key='item.name'>{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '@/styles/floatWindow.scss'
import { Toast } from 'mint-ui';
export default {
    props:['isShowFlag'],
    data () {
        return {
            istransition:false,
            showInter:false,
            // 悬浮球菜单展开
            isShow:false,
            // 悬浮球在左侧展开
            isleft:false,
            current:2,
            disX:'',
            disY:'',
            moveX:'',
            L:'',
            T:'',
            starX:'',
            starY:'',
            starXEnd:'',
            starYEnd:'',
            starttime:'',
            endTime:'',
            touchTimes:'',
            iedatas:[
                {name:'进口',value:'I'},
                {name:'出口',value:'E'},
                {name:'进出口',value:""},
            ]
        }
    },
    methods: {
        ieFlag (item,index) {
            event.stopPropagation();
            this.$store.dispatch('setiename',item.value);
            this.$store.dispatch('setietitle',item.name);
            this.current = index;
            Toast({
                message:'切换成功,请稍候……',
                position: 'center',
                duration: 2000,
                className:'toastStyle'
            });
        },
        // 手指按下
        down () {
            this.istransition = false;
            this.touchTimes = '';
            this.starttime = Date.now();
            event.preventDefault();//阻止触摸时页面的滚动，缩放
            this.disX = event.touches[0].clientX - this.$refs.oDiv.offsetLeft;
            this.disY = event.touches[0].clientY - this.$refs.oDiv.offsetTop;
        //手指按下时的坐标
            this.starX = event.touches[0].clientX;
            this.starY = event.touches[0].clientY;
        },
        // 拖动
        move () {
            this.endTime = Date.now();
            this.touchTimes = this.endTime - this.starttime;
            if (this.touchTimes < 200) {
                return;
            }
            this.L = event.touches[0].clientX - this.disX ;
            this.T = event.touches[0].clientY - this.disY ;
            //移动时 当前位置与起始位置之间的差值
            this.starXEnd = event.touches[0].clientX - this.starX;
            this.starYEnd = event.touches[0].clientY - this.starY;
            if(this.L < 0){//限制拖拽的X范围，不能拖出屏幕
                this.L = -this.$refs.oDiv.offsetWidth/2;
            }else if(this.L > document.documentElement.clientWidth - this.$refs.oDiv.offsetWidth){
                this.L = document.documentElement.clientWidth - this.$refs.oDiv.offsetWidth + this.$refs.oDiv.offsetWidth /2;
            }
            if(this.T < 0){//限制拖拽的Y范围，不能拖出屏幕
                this.T = 0;
            }else if(this.T > document.documentElement.clientHeight - this.$refs.oDiv.offsetHeight){
                this.T = document.documentElement.clientHeight - this.$refs.oDiv.offsetHeight;
            }
            this.moveX = this.L + 'px';
            this.moveY = this.T + 'px';
            this.$refs.oDiv.style.left = this.moveX;
            this.$refs.oDiv.style.top = this.moveY;

            /**
             * 悬浮球在屏幕的位置判定菜单展开方向
             */
            if (this.L < document.documentElement.clientWidth / 2) {
                this.isleft = true;
            } else {
                this.isleft = false;
            }
        //阻止页面的滑动默认事件
            document.addEventListener("touchmove",function(){
                event.preventDefault();
            },false);
        },
        //鼠标释放时候的函数
        end () {
            this.istransition = true;
            let width = document.documentElement.clientWidth;
            // window.screen.width 不适用于移动端
            // console.log(window.screen.width)
            // 根据触摸时长判断是点击还是拖动
            if (this.touchTimes < 200) {
                this.isShow = !this.isShow;
                this.showInter = !this.showInter;
                return;
            }
            // 判断松开手指时的悬浮窗处于偏左还是偏右
            if(this.L < width / 2){
                this.L = -this.$refs.oDiv.offsetWidth/2;
                // console.log('left')
            }else {
                this.L = document.documentElement.clientWidth - this.$refs.oDiv.offsetWidth + this.$refs.oDiv.offsetWidth /2;
                // console.log('right')
            }
            this.moveX = this.L + 'px';
            this.$refs.oDiv.style.left = this.moveX;
        },
    }
}
</script>

<style>
    .mint-toast-text {
        font-size: 16px;
        color: #ffffff;
    }
</style>
