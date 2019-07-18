<template>
  <div class="page-box" v-if="contentShow">
    <ul class="navtop" ref="navtop">
      <li ref="titleLi" v-for="(item,index) in titles" :key="item.tid" @click="elenav(index)" :class="{active: curindex == index}">
        <p>{{item.name}}</p>
      </li>
    </ul>
    <div class="main">
      <!-- 总体情况 -->
      <ztqk :areacode="areacode" :areaname="areaname"></ztqk>
      <!-- 监测业务量 -->
      <jcywl></jcywl>
      <!-- 月度监测 -->
      <ydjc></ydjc>
      <!-- 时长监测 -->
      <scjc></scjc>
      <!-- 商品类型 -->
      <splx></splx>
      <!-- 不合格商品排行榜 -->
      <bhgsp></bhgsp>
      <!-- 实时预警信息 -->
      <yjxx></yjxx>
    </div>
  </div>
</template>
<script>
import ztqk from "@/components/index/ztqk";
import jcywl from "@/components/index/jcywl";
import ydjc from "@/components/index/ydjc";
import scjc from "@/components/index/scjc";
import splx from "@/components/index/splx";
import bhgsp from "@/components/index/bhgsp";
import yjxx from "@/components/index/yjxx";
import { mapActions } from "vuex";
export default {
  components: { ztqk, jcywl, ydjc, scjc, splx, bhgsp, yjxx },
  data() {
    return {
      contentShow: true,
        //当前默认高亮
      curindex:0,
      areacode: this.$store.getters.areacode,
      areaname: this.$store.getters.area,
      titles: [
        { name: "总体情况" },
        { name: "监测业务量" },
        { name: "月度监测" },
        { name: "时长监测" },
        { name: "商品类型" },
        { name: "不合格商品排行榜" },
        { name: "实时预警信息" }
      ]
    };
  },
  beforeCreate() {
    // 每个子页面顶部标题
    this.$store.dispatch(
      "settitle",
      "中华人民共和国海关总署 | 实验室大数据分析"
    );
    // 是否需要显示关区搜索
    this.$store.dispatch("showsearch", true);
    // 关区搜索是否需要显示全国关区(一般直属关区版本的页面默认都不显示全国关区)
    this.$store.dispatch("isshowqg", true);
    // 设置用户进入页面后保存其登录时使用的关区号和关区名称
    if (this.$store.getters.decode == "0000") {
      this.$store.dispatch("setcode", "0000");
      this.$store.dispatch("setArea", "全国");
    } else {
      this.$store.dispatch("setcode", this.$store.getters.decode);
      this.$store.dispatch("setArea", this.$store.getters.dearea);
    }
  },
  // 监听code  name改变时刷新页面数据
  watch: {
    areacode(v) {
      console.log(v);
    },
    areaname(v) {
      console.log(v);
    }
  },
  mounted() {
    // 页面数据定时刷新
    if (this.timer) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        this.contentShow = false;
        setTimeout(() => {
          this.contentShow = true;
        }, 100);
      }, 360000);
    }
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    // 顶部电梯导航
    elenav(index) {
        this.curindex = index;
        if(index > 3 && index < this.titles.length-1 ){
            console.log(this.$refs.navtop.style.left);
            this.$refs.navtop.style.left = -(index - 3) * 60 + 'px';         
        }else if(index < 3){
            this.$refs.navtop.style.left = '0px'; 
        }
      $("body,html").animate({
        scrollTop:
          $(".row.row-s.row-s-bg")
            .eq(index)
            .offset().top -
          $(".page-header").height() -
          $(".navtop").height() -
          10 +
          "px"
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/index.scss";
</style>
