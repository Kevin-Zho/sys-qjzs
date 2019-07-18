<template>
  <div class="row row-s row-s-bg">
    <h2 class="title">商品类别</h2>
    <div class="wrap">
      <div id="main4"></div>
      <div class="table">
        <ul class="tab-head">
          <li class="first-li">商品类别</li>
          <li>
            检测批次
            <span>(批)</span>
          </li>
          <li>
            不合格批次
            <span>(批)</span>
          </li>
        </ul>
        <ul class="tab-body">
          <li v-for="(item,index) in tabBody" :key="index">
            <span>{{item.name}}</span>
            <span class="last-span">{{item.num | Thounsands }}</span>
            <span class="last-span">{{item.noNum | Thounsands }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts");

export default {
  data() {
    return {
      tabBody: [
        { name: "食品", num: 44000, noNum: 142 },
        { name: "植物", num: 26000, noNum: 142 },
        { name: "动物", num: 3700, noNum: 1422 },
        { name: "工业品", num: 38000, noNum: 142 },
        { name: "其他", num: 13000, noNum: 142 }
      ]
    };
  },
  mounted() {
    this.initEcharts4();
  },
  methods: {
    initEcharts4() {
      let mycharts = echarts.init(document.getElementById("main4"));
      let option = {
        legend: {
          data: ["图一", "图二"],
          bottom: 0,
          textStyle: {
            fontSize: 8,
            color: "#979aa4"
          },
          itemGap: 30,
          itemWidth: 10,
          itemHeight: 5
        },
        radar: [
          {
            indicator: [
              { name: "食品" },
              { name: "植物" },
              { name: "工业品" },
              { name: "动物" },
              { name: "其他" }
            ],
            center: ["50%", "50%"],
            radius: 50,
            startAngle: 90,
            splitNumber: 4,
            shape: "circle",
            name: {
              textStyle: {
                color: "#000",
                fontSize: 8
              }
            },
            splitArea: {
              areaStyle: {
                color: [
                  "rgba(255, 255, 255, 0.2)",
                  "rgba(255, 255, 255, 0.2)",
                  "rgba(255, 255, 255, 0.2)",
                  "rgba(235, 240, 246, 1)",
                  "rgba(240, 246, 251, 1)"
                ],
                shadowColor: "rgba(0, 0, 0, 0.3)", // 阴影颜色
                shadowBlur: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: "#fff" //五角星线颜色
              }
            },
            splitLine: {
              lineStyle: {
                color: "#8fb9d8" //圆圈线颜色
              }
            }
          }
        ],
        series: [
          {
            name: "雷达图",
            type: "radar",
            itemStyle: {
              emphasis: {
                // color: 各异,
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                value: [100, 8, 0.4, -80, 2000],
                name: "图一",
                symbol: "rect",
                symbolSize: 5,
                areaStyle: {
                  normal: {
                    color: "rgba(102, 142, 255, 0.8)"
                  }
                },
                lineStyle: {
                  color: "#0076ff" //线
                }
              },
              {
                value: [60, 5, 0.3, -100, 1500],
                name: "图二",
                areaStyle: {
                  normal: {
                    color: "rgba(199, 231, 94, 0.6)"
                  }
                },
                lineStyle: {
                  color: "#ffff00" //线
                }
              }
            ]
          }
        ]
      };
      mycharts.setOption(option);
    }
  }
};
</script>

<style scoped lang="scss">
.row {
  height: 390px;
  .wrap {
    height: 330px;
    display: flex;
    justify-content: space-between;
    #main4 {
      width: 330px;
      height: 330px;
      background: #fff;
    }
    .table {
      width: 375px;
      background: #fff;
      height: 330px;
      .tab-head {
        height: 60px;
        display: flex;
        font-size: 12px;
        li {
          width: 142px;
          line-height: 60px;
          text-align: center;
          span{
            color: #ff9000;
          }
        }
        .first-li {
          width: 90px;
        }
      }
      .tab-body {
        height: 260px;
        font-size: 12px;
        li{
          border-top: 1px solid #ccc;
          height: 50px;
          line-height: 50px;
          display: flex;
          span:first-child {
             text-align: center;
            width: 90px;  
          }
          .last-span{
            width: 142px;
            text-align: right;
            color: #ff9000;
          }
        }
      }
    }
  }
}
</style>
