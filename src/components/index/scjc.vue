<template>
  <div class="row row-s row-s-bg">
    <h2 class="title">监测时长</h2>
    <div id="main3"></div>
  </div>
</template>

 <script>
let echarts = require("echarts");

export default {
  // components: { countTo, count },
  // props:['areacode','areaname'],
  data() {
    return {};
  },
  mounted() {
    this.initEcharts3();
  },
  methods: {
    initEcharts3() {
      let mycharts = echarts.init(document.getElementById("main3"));
      let option = {
        legend: {
          top: "2%",
          data: ["2018", "2019"],
          itemGap: 10,
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            color: "#919191",
            fontSize:12
          }
        },
        tooltip: {
          trigger: "axis",
          confine: true,
          // formatter: function(params) {
          //   console.log(params);
          //   // return ();
          // },
          backgroundColor: "rgba(13,72,132,.9)",
          padding: [5, 15],
          textStyle: {
            color: "#b8eeff",
            fontSize: 12
          }
        },
        // 上下左右间隔
        grid: {
          top: "15%",
          left: "3%",
          right: "10%",
          bottom: "1%",
          containLabel: true
        },
        xAxis: [
          {
            // name: "天",
            // nameTextStyle: {
            //   fontSize: 12,
            //   // padding: [-12, 0, 0, 0],
            //   color: "#919191"
            // },
            type: "value",
            position: "top",
            axisLine: {
              show: false
            },
            // 隔离线样式
            splitLine: {
              // show: true,
              show: false,
              lineStyle: {
                color: "#919191"
              }
            },
            // data: ["1天", "2天", "3天", "4天","5天","6天","7天"],
            axisLabel: {
              formatter: function(v) {
                // console.log(v);

                return v + "天";
              },
              // 文本样式
              textStyle: {
                color: "#919191",
                fontSize: 12
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: "#919191"
              }
            },
            // 数据
            data: ["出境", "进境", "出口", "进口"],
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name:'2018',
            type: "bar",
            itemStyle: {
              emphasis: {
                // 圆角
                barBorderRadius: 10
              },
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                color: function(params) {
                  return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#1d4df4"
                    },
                    {
                      offset: 1,
                      color: "#22bee9"
                    }
                  ]);
                }
              }
            },
            // 柱状图宽度
            barWidth: 10,
            // 数据
            data: [5, 3, 4, 6]
            // data: res.Data1
          },
          {
            name:'2019',
            type: "bar",
            itemStyle: {
              emphasis: {
                // 圆角
                barBorderRadius: 10
              },
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                color: function(params) {
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,

                    [
                      {
                        offset: 0,
                        color: "#ffb80d"
                      },
                      {
                        offset: 1,
                        color: "#ffe201"
                      }
                    ]
                  );
                }
              }
            },
            // 柱状图宽度
            barWidth: 10,
            // 数据
            data: ["8", "2", "4", "3"]
            // data: res.Data1
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
  height: 440px;
  #main3 {
    height: 380px;
    background: #fff;
  }
}
</style>
