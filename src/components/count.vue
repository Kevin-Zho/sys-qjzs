<template>
  <span class="animatenum"></span>
</template>

<script>
  import "@/styles/count.scss";
  // import { mapState, mapGetters } from "vuex";
  export default {
    data() {
      return {};
    },
    props: ["start", "end", "duration", 'seperator', "id"],
    watch: {
      end: function (n, o) {
        this.animateNum(n);
      }
    },
    mounted() {
      this.animateNum(this.end);
    },
    methods: {
      toThounsands:function(num) {
        var num = (num || 0).toString(), result = "";
        while (num.length > 3) {
          result = "," + num.slice(-3) + result;
          num = num.slice(0, num.length - 3);
        }
        if (num) {
          result =num+result;
        }
        return result;
      },

      animateNum (n) {
        var cc =
          "<span class='num-box'><span class='num'>0</span><span class='num'>1</span><span class='num'>2</span><span class='num'>3</span><span class='num'>4</span><span class='num'>5</span><span class='num'>6</span><span class='num'>7</span><span class='num'>8</span><span class='num'>9</span><span class='num symbol'>,</span><span class='num symbol'>.</span></span>";
        var countNum = parseInt(n);
        if(this.$store.getters.area == '全国' || this.$store.getters.area == '中国关区'){
          countNum=this.toThounsands(Math.floor(n));
        } else {
          countNum = n.toFixed(0);
        }
        // console.log(n+":"+countNum)
        var str = countNum.toString();
        for (var i = 0; i < str.length; i++) {
          var curLength = this.$el.querySelectorAll("span.num-area").length;
          if (str.length > curLength) {
            var span = document.createElement("span");
            span.className = "num-area";
            span.innerHTML = cc;
            this.$el.appendChild(span);
          }else if(str.length<curLength){
            var doms = this.$el.querySelectorAll("span.num-area:nth-child(n+"+str.length+")");
            var k;
            for(k = 0;k<doms.length;k++) {
              doms[k].parentNode.removeChild(doms[k])
            }
          }
          var a = str[i];
          if (a == ",") {
            a = 10;
          } else if (a == ".") {
            a = 11;
          } else {
            a = parseInt(a);
          }
          // var h = $('.num').height() 此处0.373333应该与实际设置数字所在的容器高度相等 0.363333
          var mtop = -a * 0.373333 + "rem";
          var j = i + 1;
          // this.$el
          //   .querySelectorAll("span.num-area:nth-child(" + j + ")")[0]
          //   .setAttribute("num", a);

          var parentArea = this.$el
            .querySelectorAll("span.num-area:nth-child(" + j + ")")[0];

          if (a == 10 || a == 11) {
            parentArea.className = "num-area symbol";
          } else {
            parentArea.className = "num-area";
          }
          // parentArea.querySelector(".num-box").style.transform =
          // "translateY(" + mtop + ")";
          parentArea.querySelector(".num-box").style.top = mtop;
        }
      }
    }
  };
</script>