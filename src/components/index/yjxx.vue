<template>
  <div class="row row-s row-s-bg">
    <h2 class="title">预警信息</h2>
    <div id="main7">
        <ul>
          <li class="tab-head">
            <span v-for="(item,index) in tabHead" :key="index">{{item}}</span>
          </li>
          <li class="tab-list" v-for="(item,index) in tabBody" :key="index">
            <span>{{index+1}}</span>
            <span>{{item.name}}</span>
            <span>{{item.jyxm}}</span>
            <span>{{item.zshg}}</span>
            <span>{{item.yjlx}}</span>
            <span>{{item.time}}</span>
          </li>
        </ul>
    </div> 
  </div>
</template>

 <script>

export default {
  // components: { countTo, count },
  // props:['areacode','areaname'],
  data() {
    return {
      tabHead:["序号","商品名称","检验项目","直属海关","预警类型","时间"],
      tabBody:[
        {name:"LUl原油",jyxm:"密度20",zshg:"青岛海关",yjlx:"离群",time:"2019-09-18"},
        {name:"LUl2原油",jyxm:"密度21",zshg:"青地方岛海关",yjlx:"离群",time:"2019-09-18"},
        {name:"LUl3原油",jyxm:"密度22",zshg:"青岛海关",yjlx:"离群",time:"2019-09-18"},
        {name:"LUl4原油",jyxm:"密度23",zshg:"青岛海关",yjlx:"离群",time:"2019-09-18"},
        {name:"LUl5原油",jyxm:"密度24",zshg:"青岛海关",yjlx:"离群",time:"2019-09-18"},
      ]
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
  .row {
    height: 500px;
    #main7{
      height: 430px;
      background: #fff;
      font-size: 12px;
      ul{
          span{
            float: left;
            // border-right: 1px solid red;
            text-align: center;
          }
          span:nth-child(1){width: 50px;}
          span:nth-child(2){width: 190px;}
          span:nth-child(3){width: 100px;}
          span:nth-child(4){width: 140px;}
          span:nth-child(5){width: 90px;}
          span:nth-child(6){width: 130px;}
        .tab-head{
          background: #00f;
          height: 55px;
          color: #fff;
           line-height: 55px;
        }
        .tab-list{
          height: 65px;
          border-bottom: 1px solid #ccc;
          line-height: 65px;
        }
      }
    }
  }
</style>
