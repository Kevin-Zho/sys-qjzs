<template>
	<div class="popup">
    <div class="searchbox">
      <input type="text" :placeholder="defaultVal" v-model="searchVal">
      <span @click = "popVisible">取消</span>
    </div>
    <!-- <div class="allarea">全部关区</div> -->
    <div class="district">
      <mt-button round class="areabtn main" type="default" v-if='this.$store.getters.showarea'  @click.native='choiceArea("全国","0000")'>全国</mt-button>
      <mt-button round class="areabtn" type="default"  v-for ="item in resultdata" @click.native='choiceArea(item.NAME,item.code)' :key="item.code">{{ item.NAME }}</mt-button>
    </div>
  </div>
</template>

<script>
import "@/styles/pop.scss"
import { mapActions } from "vuex"
import { allArea } from '@/api/index.js'
export default {
  data() {
    return {
      defaultVal:'请选择关区',
      searchVal: "",
      areaname: "",
      areacode: "",
      areadata: []
    };
  },
  computed: {
    resultdata: function () {
      var _this = this;
      var resultdata = [];
      this.areadata.map(function (item) {
        if(item.NAME.search(_this.searchVal) != -1 || item.code.search(_this.searchVal) != -1) {
          resultdata.push(item)
        }
      });
      return resultdata;
    }
  },
  watch: {
    defaultVal () {
      this.defaultVal = this.$store.getters.area;
    }
  },
  methods: {
    ...mapActions(["setArea","setcode"]),
    choiceArea(name,code) {
      this.defaultVal = name;
      this.areaname = name.trim();
      this.areacode = code.trim();
      this.setArea(this.areaname);
      this.setcode(this.areacode);
      // alert("当前选中" + this.$store.getters.area);
      this.$emit("visible", false);
    },
    // 侧边搜索框滑出
    popVisible() {
      this.$emit("visible", false);
    },
    // 初始化查询所有关区
    initAllarea () {
      allArea().then(res => {
        res.forEach(item => {
            if (item.NAME != '全国' && item.NAME != '0000') {
                that.areadata.push(item);
            }
        })
      })
    }
  },
  mounted () {
    this.initAllarea();
  }
};
</script>

<style scoped>
.areabtn.main {
  display: block;
  margin-top: 3px;
  margin-left: 0;
  border:1px solid #bdbdbd;
}
</style>