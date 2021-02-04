/*地图*/
(function () {
    //加载到该div
    var myChart = echarts.init(document.getElementById('main'));
    //开始加载
    myChart.showLoading();
    //得到地图json数据
    $.get('./json/trs.json', function (usaJson) {
        myChart.hideLoading();
        //熏染
        echarts.registerMap('USA', usaJson);

        //数据信息
        var data = [
            { name: "碧江区", value: [22,22,22] },
            { name: "万山区", value:[22,22,22] },
            { name: "江口县", value: [22,22,22] },
            { name: "玉屏侗族自治县", value: [22,22,22] },
            { name: "松桃苗族自治县", value: [22,22,22] },
            { name: "印江土家族苗族自治县", value: [22,22,22] },
            { name: "思南县", value: [22,22,22] },
            { name: "石阡县", value: [22,22,22] },
            { name: "德江县", value: [22,22,22] },
            { name: "沿河土家族自治县", value: [22,22,22] }
        ];
   
    

        //各项指令数据
        option = {
            //背景颜色
            backgroundColor: 'rgba(128, 128, 128, 0.01)', //rgba设置透明度0.1 

            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
                formatter: function (params) {
                    var value = (params.value + '').split('.');
                    value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                    return params.seriesName + '<br/>' + params.name + ': ' + value;
                }
            },//工具



            series: [
                {
                    name: 'USA 实时数据',
                    type: 'map',
                    symbolSize: 5,
                    roam: true,
                    map: 'USA',
                    selectedMode: false,//single 表示单选;multiple表示多选 默认flase不选
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            color: '#fff',
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            areaColor: '#3a7fd5',
                            borderColor: '#0a53e9',//线
                            shadowColor: '#092f8f',//外发光
                            shadowBlur: 20
                        },
                        emphasis: {
                            areaColor: '#0a2dae',//悬浮区背景
                        }
                    },
                },
                
            ]
        }

        //设置
        myChart.setOption(option);
    });
})();