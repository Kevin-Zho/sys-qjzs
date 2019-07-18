<template>
  <div class="row row-s row-s-bg">
    <h2 class="title">月度监测</h2>
    <div id="main2"></div>
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
    this.initEcharts2();
  },
  methods: {
    initEcharts2(dm) {
      // dm = this.$store.getters.areacode;
      // let that = this;
      // document.addEventListener("deviceready", function onDeviceReady() {
      // if(dm==null || dm==''){
      //     dm='0000';
      // }
      // let queryParam={
      //     QUERY_SQL1:dm
      // };
      // let params = [
      //     {sql_key: "QJX_JMBS_CHART"},
      //     {queryParam:encodeURI(JSON.stringify(queryParam))}
      // ];
      // HGRequest.get(baseServer, rootUrl, params, true, function (res){
      //     that.eacharts1.line = [];
      //     that.eacharts1.bar = [];
      //     that.eacharts1.xname = [];
      //     that.eacharts1.line = res.Data1;
      //     that.eacharts1.bar = res.Data2;
      //     that.eacharts1.xname = res.Names;
      //     that.yMax = that.eacharts1.bar.sort(function (a,b) {
      //         return b-a;
      //     });
      let mycharts = echarts.init(document.getElementById("main2"));
      // let dataShadow = [];
      // for (var i = 0; i < that.yMax.length; i++) {
      //     dataShadow.push(that.yMax[0]);
      // }
      let option = {
        title: {
          text: "加工贸易进出口总值月度统计",
          subtext: "",
          top: "3%",
          left: "center",
          textStyle: {
            color: "#818181",
            fontWeight: "normal",
            fontSize: 12
          }
        },
        noDataLodingOption: {
          effect: "bubble",
          text: "暂无数据",
          textStyle: {
            fontSize: 16,
            color: "rgba(27,178,216)"
          },
          effectOption: {
            effect: {
              n: 0
            },
            backgroundColor: "rgba(0,0,0,0)"
          }
        },
        grid: {
          top: "15%",
          left: "12%",
          right: "10%",
          bottom: "25%"
        },
        tooltip: {
          trigger: "axis",
          confine: true,
          textStyle: {
            fontSize: 12,
            fontWeight: "normal"
          },
          formatter: function(param) {
            var result = "";
            var length = param.length;
            result +=
              param[0].name +
              "<br/>" +
              param[1].seriesName +
              "：" +
              (param[1].value / 100000000).toFixed(2) +
              " 亿美元<br/>" +
              param[2].seriesName +
              "：" +
              param[2].value +
              "%";
            return result;
          }
        },
        calculable: true,

        legend: {
          bottom: "1%",
          data: ["加工贸易进出口总值", "加工贸易进出口总值环比"],
          itemGap: 10,
          itemWidth: 20,
          itemHeight: 10
        },
        xAxis: [
          {
            type: "category",
            data: [201901, 201902, 201903, 201904],
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 12,
              formatter: function(v) {
                return v.substring(4, 6);
              },
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: "#919191",
                width: 0,
                type: "solid"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: function(value) {
                return value / 100000000;
              }
            },
            splitArea: { show: false, areaStyle: { show: false } },
            axisLine: {
              lineStyle: {
                color: "white",
                onZero: false,
                show: true,
                width: 0,
                type: "solid",
                color: "#919191"
              }
            },
            nameTextStyle: {
              color: "#f6f6f6",
              fontSize: 12
            }
          },
          //隐藏右边y轴
          {
            type: "value",
            show: true,
            splitNumber: 4,
            axisLabel: {
              formatter: function(value) {
                return value + "%";
              }
            },
            splitLine: {
              show: false
            },
            axisTick: false,
            axisLine: {
              lineStyle: {
                color: "white",
                onZero: false,
                show: true,
                width: 0,
                type: "solid",
                color: "#919191"
              }
            }
          }
        ],
        series: [
          {
            // For shadow
            type: "bar",
            itemStyle: {
              normal: {
                color: "#c6c7cb",
                barBorderRadius: [10, 10, 0, 0]
              }
            },
            barGap: "-100%",
            barCategoryGap: "40%",
            animation: false,
            barMaxWidth: 25,
            data: [200, 300, 400, 500]
          },
          {
            name: "加工贸易进出口总值",
            type: "bar",
            barMaxWidth: 25,
            yAxisIndex: 0,
            data: [600, 500, 400, 300],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#00f0ff"
                  },
                  {
                    offset: 1,
                    color: "#0951b7"
                  }
                ]),
                opacity: 1,
                barBorderRadius: [30, 30, 0, 0]
                // shadowBlur: 10,
                // shadowColor: "rgba(33,33,33,0.5)"
              }
            }
          },
          {
            name: "加工贸易进出口总值环比",
            type: "line",
            symbol: "circle",
            yAxisIndex: 1,
            smooth: true,
            symbolSize: 6,
            lineStyle: {
              width: 2
            },
            itemStyle: {
              normal: {
                color: "#fff100",
                borderColor: "#fff100",
                borderWidth: 3
              }
            },
            data: [250, 350, 450, 650]
          }
        ]
      };
      mycharts.setOption(option);
      //     }, function (error){
      //         console.log('error'+error);
      //     });
      // }, false);
    }
  }
};
</script>

<style scoped lang="scss">
.row {
  height: 300px;
  #main2{
      height: 230px;
      background: #fff;
    }
}
</style>
