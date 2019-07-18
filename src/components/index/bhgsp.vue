<template>
  <div class="row row-s row-s-bg">
    <h2 class="title">不合格商品排行榜</h2>
    <div id="main6"></div>
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
    this.initEcharts6();
  },
  methods: {
    initEcharts6(dm) {
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
      let mycharts = echarts.init(document.getElementById("main6"));
      // let dataShadow = [];
      // for (var i = 0; i < that.yMax.length; i++) {
      //     dataShadow.push(that.yMax[0]);
      // }
      let option = {
        // noDataLodingOption: {
        //   effect: "bubble",
        //   text: "暂无数据",
        //   textStyle: {
        //     fontSize: 16,
        //     color: "rgba(27,178,216)"
        //   },
        //   effectOption: {
        //     effect: {
        //       n: 0
        //     },
        //     backgroundColor: "rgba(0,0,0,0)"
        //   }
        // },
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
            // return param;
          }
        },
        calculable: true,
        legend: {
            data:['报单关票数','金额'],
            bottom: "2%",
            textStyle: {
                color:'#919191',
                fontSize:12
            },
            itemGap: 50,
            itemWidth:25,
            itemHeight:10,
            borderRadius:5
        },
        xAxis: {
            type: 'category',
            boundaryGap:false,  //是否取消X轴与Y轴的横向间距
            data:['纺织类','动物园','植物园','工业路','矿物类'],
            axisLine:{
                lineStyle:{
                    color:'#919191', // 纵坐标轴线以及刻度值的颜色
                    width:1,
                }
            },
            axisLabel: {
                color:'#919191', // 刻度值的颜色
            },
            axisTick: {
                show:false // 刻度线是否显示
            }
        },
        yAxis: [
            {
                // name:'(单位)',
                type: "value",
                axisLine:{
                    lineStyle:{
                        color:'#919191',
                        width:1,
                    },
                    show:true
                },
                splitLine: {
                    show:false,
                    lineStyle: {
                        color: '#0d3a84'
                    }
                },
                axisTick: {
                    show:false // 刻度线是否显示
                }
            }
        ],
        series: [
            {
                name:'报单关票数',
                type:'line',
                // yAxisIndex:0,
                smooth:true,
                symbolSize:6,
                data:[29,51,47,38,55],
                itemStyle: { 
                    normal: {
                        color: "#00baff",
                        borderWidth: 1,
                        borderColor: "#00baff",
                        lineStyle: {
                        width: "1",
                        color: "#00baff"
                        }
                    }
                },
                areaStyle: {
                normal: {
                    // color: "#f47482",
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgba(15,157,237,1)"
                        },
                        {
                            offset: 0.35,
                            color: "rgba(15,157,237,0.6)"
                        },
                        {
                            offset: .75,
                            color: "rgba(63,51,94,.28)"
                        },
                        {
                            offset: 1,
                            color: "rgba(63,51,94,.28)"
                        }
                    ]),
                    opacity: 1
                }
                },
            },
            {
                name:'金额',
                type:'line',
                // yAxisIndex:1,
                smooth:true,
                symbolSize:6,
                data:[24,58,34,27,96],
                itemStyle: {
                    normal: {
                        color: "rgba(217,72,75,1)",
                        borderWidth: 2,
                        borderColor: "#b8eeff",
                        lineStyle: {
                            width: "2",
                            color: "#cecec1"
                        }
                    }
                },
                areaStyle: {
                normal: {
                    // color: "#f47482",
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgba(217,72,75,1)"
                        },
                        {
                            offset: 0.35,
                            color: "rgba(217,72,75,0.6)"
                        },
                        {
                            offset: .75,
                            color: "rgba(63,51,94,.28)"
                        },
                        {
                            offset: 1,
                            color: "rgba(63,51,94,.28)"
                        }
                    ]),
                    opacity: 1
                }
                },
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
  height: 500px;
  #main6{
      height: 430px;
      background: #fff;
    }
}
</style>
