<template>
  <div class="row row-s row-s-bg">
    <h2 class="title">监测业务量</h2>
    <div id="main"></div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {

  data() {
    return {
      eacharts:{
        line1:[],
        line2:[],
        xname:[]
      }
    };
  },
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts(dm) {
      // dm = this.$store.getters.areacode;
      let that = this;
        // document.addEventListener("deviceready", function () {
            // if(dm==null || dm==''){
            //   dm='0000';
            // }
            // let queryParam={
            //     QUERY_SQL1:dm
            // };
            // let params = [
            //     {sql_key: "QJX_GSZG_CHART"},
            //     {queryParam:encodeURI(JSON.stringify(queryParam))}
            // ];
            // HGRequest.get(baseServer, rootUrl, params, true, function (res){
              // that.eacharts1.line1 = [];
              // that.eacharts1.line2 = [];
              // that.eacharts1.xname = [];
              // that.eacharts1.line1 = res.Data1;
              // that.eacharts1.line2 = res.Data2;
              // that.eacharts1.xname = res.Names;
                let myChart = echarts.init(document.getElementById("main"));
                // 绘制图表
                let option = {
                  toolbox: {
                    show: false
                  },
                  noDataLoadingOption:{
                      effect:'bubble',
                      text:'暂无数据',
                      textStyle:{
                          fontSize:16,
                          color:'rgba(27,178,216)'
                      },
                      effectOption:{
                          effect:{
                              n:0
                          },
                          backgroundColor:'rgba(0,0,0,0)'
                      }
                  },
                  title: {
                    text: "税收入库月度统计",
                    right:"45%",
                    textStyle: {
                      color: "#f7a507",
                      fontSize: 12,
                      fontWeight:'normal'
                    }
                  },
                  legend: {
                    // data: ["税收入库", "减免税金额"]
                    itemGap:6,
                    right: 0,
                    itemWidth:6,
                    data: [
                      {
                        name: "税收入库",
                        icon: "circle",
                        textStyle: {
                          color: "#919191",
                          fontSize:12
                        }
                      },
                      {
                        name: "减免税金额",
                        icon: "circle",
                        textStyle: {
                          color: "#919191",
                          fontSize:12
                        }
                      }
                    ]
                  },
                  tooltip: {
                    confine:true,
                    trigger: "axis",
                    formatter: function(param) {
                        var result = "";
                        result += param[0].name +
                         "月<br/>" +
                         param[0].seriesName +
                        "：" +
                        (param[0].value / 100000000).toFixed(2) +
                        " 亿元<br/>" +
                        param[1].seriesName +
                        "：" +
                        (param[1].value / 100000000).toFixed(2) +
                        " 亿元"
                        return result;
                    },
                    textStyle: {
                      fontSize: 12,
                      fontWeight: "normal"
                    }
                  },
                  grid: {
                    left: "12%",
                    right: "9%",
                    bottom: "20%",
                    top: "25%"
                  },
                  xAxis: [
                    {
                      type: "category",
                      boundaryGap: false,
                      data: ["全国海关","深圳海关","天津海关","北京海关"],
                      axisLabel: {
                        fontSize:12,
                        formatter: function(v) {
                            return v.substring(4,6);
                            // return v;
                        },
                        interval: 0
                      },
                      axisLine: {
                        lineStyle: {
                          color: "#999"
                        }
                      },
                      splitLine: {
                        show: false
                      }
                    }
                  ],
                  yAxis: [
                    {
                      type: "value",
                      position: "left",
                      textStyle: {
                        color: "#a9e3ef"
                      },
                      axisTick: false,
                      axisLabel: {
                        textStyle: {
                          color: "#919191"
                        },
                        formatter: function (value) { return (value/100000000); }
                      },
                      axisLine: {
                        lineStyle: {
                          color: "#a9e3ef"
                        }
                      },
                      splitLine: {
                        show: true,
                        lineStyle: {
                          color: "#e7e7e7"
                        }
                      }
                    },
                    {
                      type: "value",
                      position: "right",
                      axisTick: false,
                      axisLabel: {
                        formatter: function (value) { return (value/100000000); },
                        textStyle: {
                          color: "e4e4e4"
                        }
                      },
                      axisLine: { lineStyle: { color: "#a9e3ef" } },
                      splitLine: { show: false }
                    }
                  ],
                  series: [
                    {
                      name: "税收入库",
                      type: "line",
                      smooth: true,
                      symbolSize: 6,
                      symbol: "circle",
                      itemStyle: {
                        normal: {
                          color: "#0078ff",
                          borderWidth: 1,
                          borderColor: "#e0edfc",
                          lineStyle: {
                            width: "1",
                            color: "#f2f6fc"
                          }
                        }
                      },
                      areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                          { offset: 0, color: "#277dcc" },
                          { offset: 1, color: "#00deff" }
                        ]),
                        opacity: 1
                      },
                      data: [100,200,300,400]
                    },
                    {
                      name: "减免税金额" ,
                      type: "line",
                      yAxisIndex: 1,
                      smooth: true,
                      symbolSize: 6,
                      symbol: "circle",
                      itemStyle: {
                        normal: {
                          color: "#ed1c24",
                          borderWidth: 1,
                          borderColor: "#e0edfc",
                          lineStyle: {
                            width: "1",
                            color: "#f2f6fc"
                          }
                        }
                      },
                      areaStyle: {
                        normal: {
                          // color: "#f47482",
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                              offset: 0,
                              color: "#f54cab"
                            },
                            {
                              offset: 1,
                              color: "#f1b541"
                            }
                          ]),
                          opacity: 1
                        }
                      },
                      data: [500,400,300,200]
                    }
                  ]
                };
                myChart.setOption(option);
            // }, function (error){
            //     console.log('error' + error)
            // });
        // }, false);
    }
  }
};
</script>

<style scoped lang="scss">
  .row{
    height: 300px;
    #main{
      height: 230px;
      background: #fff;
    }
  }
</style>
