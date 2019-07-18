/**
 * 对单位过滤(通常用于页面中显示数据部分,echarts中的Y轴请使用下方的echartsYfilter方法,tooltip提示框继续使用本方法)
 * @param {元-万元-亿元 } num
 * @param {基本单位 例如: 元,票,箱} unit
 */
export const unitFilter = (num,unit) => {
    if (num < 10000 || num == '' || num == 'undefined' || num == undefined) {
        return {
            value:Thounsands(num),
            unit:unit
        }
    } else if (num >= 10000 && num < 100000000) {
        return {
            value: Thounsands((num / 10000).toFixed(2)),
            unit:'万'+unit
        }
    } else if (num >= 100000000 && num < 1000000000000){
        return {
            value: Thounsands((num / 100000000).toFixed(2)),
            unit:'亿'+unit
        }
    } else {
        return {
            value: Thounsands((num / 1000000000000).toFixed(2)),
            unit:'万亿'+unit
        }
    }
}

/**
 * 对EchartsY轴单位过滤  图表的提示框数字不要使用该方法,去使用上方的unitFilter方法过滤
 * @param {Data1(数组) } arr
 * @param {参数2:基本单位  例如: 元,票,箱} unit
 */
export const echartYfilter = (arr,unit) => {
    var newArr = arr.concat([]);
    var val = newArr.sort(function (a,b) {
        return b - a;
    });
    if (val[0] < 10000) {
        return {
            decimal:1,
            unit:unit
        }
    } else if (val[0] >= 10000 && val[0] < 100000000) {
        return {
            decimal:10000,
            unit:'万'+unit
        }
    } else {
        return {
            decimal:100000000,
            unit:'亿'+unit
        }
    }
}

/**
 * 千分位过滤函数
 * @param {参数:数字} num  需要被转换的数字
 */
export const Thounsands = (num) => {
    return (num || 0).toString().replace(/\d+/, function (n) {
        var len = n.length;
        if (len % 3 === 0) {
            return n.replace(/(\d{3})/g, ',$1').slice(1);
        } else {
            return n.slice(0, len % 3) + n.slice(len % 3).replace(/(\d{3})/g, ',$1');
        }
    });
}

/**
 * 对Echarts toolTip 展示
 * @param {params(数组) } arr
 * @param {参数2:基本单位  例如: 元,票,箱} unit
 */
export const toolTipfilter = (params, unit) => {
    var dom = params[0].name + '<br/>';
    params.forEach(item =>{
        if(item.componentSubType == 'line'){
            dom += item.seriesName + " : <span class='tooltipNum'>" + (item.value || 0).toFixed(2) + " %</span>"
        }else{
            dom += item.seriesName + " : <span class='tooltipNum'>" + unitFilter(item.value, unit).value +unitFilter(item.value, unit).unit + " </span><br/>";
        }
    })
    return dom;
}