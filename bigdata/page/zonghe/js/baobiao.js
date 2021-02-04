/*老龄化人口统计*/
(function () {
    let myChart = echarts.init(document.getElementById('leftcon1'));
    myChart.showLoading();
    let option = {
        title: {
            text: '老龄化人口统计',
            // subtext: '老龄化人口统计',
            textStyle: {
                color: '#54C7FF'
            }

        },

        textStyle: {
            fontSize: 12,
            fontWeight: 'bolder',
            color: '#80D0FF'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [
                {
                    name: '死亡率',
                    //    icon : 'circle',
                    textStyle: {
                        color: '#F49215'          // 图例文字颜色
                    }
                },
                {
                    name: '增长率',
                    //    icon : 'rect',
                    textStyle: {
                        color: '#2FE172'          // 图例文字颜色
                    }
                }
            ]

            ,
            top: 5,
            right: 10,

        },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: 'none'
        //         },
        //         dataView: { readOnly: false },
        //         magicType: { type: ['line', 'bar'] },
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
xAxis: {
            type: 'category',
            boundaryGap: false,

            splitLine: { show: false },
            data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            /*改变x轴颜色*/
            // axisLine: {
            //     lineStyle: {
            //         color: '#325684',
            //     }
            // },

        },
        yAxis: {
            type: 'value',
            name: '（万）',
            splitLine: {
                lineStyle: {
                    color: ['#315070'],
                    width: 1,
                    type: 'solid'
                }
            },

        },

        series: [
            {
                name: '死亡率',
                type: 'line',
                color: '#F49215',
                data: [105, 90, 80, 55, 30, 15, 6],
                // markPoint: {
                //     data: [
                //         { type: 'max', name: '最大值' },
                //         { type: 'min', name: '最小值' }
                //     ]
                // },
                // markLine: {
                //     data: [
                //         { type: 'average', name: '平均值' }
                //     ]
                // }
            },
            {
                name: '增长率',
                type: 'line',
                data: [10, 25, 40, 60, 55, 86, 110],
                itemStyle: {
                    normal: {
                        color: '#2FE172'
                    }
                },
                // markPoint: {
                //     data: [
                //         { name: '死亡率', value: -2, xAxis: 1, yAxis: -1.5 }
                //     ]
                // },
                // markLine: {
                //     data: [
                //         { type: 'average', name: '平均值' },
                //         [{
                //             symbol: 'none',
                //             x: '90%',
                //             yAxis: 'max',
                //         }, {
                //             symbol: 'circle',
                //             label: {
                //                 position: 'start',
                //                 formatter: '最大值'
                //             },
                //             type: 'max',
                //             name: '最高点'
                //         }]
                //     ]
                // }
            }
        ]
    };
    myChart.hideLoading();
    myChart.setOption(option);
})();
/*大健康数据分析 -- 慢性病*/ 
(function () {
    let myChart = echarts.init(document.getElementById('leftcon2'));
    myChart.showLoading();
    var  getsyzl=['冠心病','心脏病','病种','病种','病种','病种','病种','病种','病种','病种'];
    var  getwkrs=[826,673,588,782,779,855,686,703,788,882,779,785];
    
    option= {
        grid: {
            top: '15%',
            left: '5%',
            right: '10%',
            bottom: '20%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        // legend: {
        //     data: ['病种'],
        //     right: "3%",
        //     top:"4%",
        //     textStyle: {
        //         color: "#A1D5FF",
        //         fontSize: 12
        //     }, 
        //     itemWidth: 12,  // 设置宽度
        //     itemHeight:16, // 设置高度
        //     itemGap: 12 // 设置间距
        // },
        xAxis: [{
            data: getsyzl,
            axisLabel: {
                margin: 10,
                color: '#A1D5FF',
                
                textStyle: {
                    fontSize: 8
                },
                splitLine: {
                    lineStyle: {
                        color: ['#315070'],
                        width: 1,
                        type: 'solid'
                    }
                },
            },
                /*改变y轴颜色*/
                axisLine: {
                    lineStyle: {
                        color: '#80D0FF',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#315070'],
                        width: 1,
                        type: 'solid'
                    }
                },
        }],
        yAxis: [{
            name:'（万）',
            type:'value',
              /*改变y轴颜色*/
              axisLine: {
                lineStyle: {
                    color: '#80D0FF',
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#315070'],
                    width: 1,
                    type: 'solid'
                }
            },
        }],
        series: [
        {
            name: "病种",		
            type: 'bar',
            data: getwkrs,
            barWidth: '8px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(85,244,255,0.9)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'transparent' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [20, 20, 0, 0],
                }
            },
        }
        ]
    }
    myChart.hideLoading();
    myChart.setOption(option);
})();
/*yilia医疗数据*/
(function () {
    let myChart = echarts.init(document.getElementById('leftcon-two'));
    myChart.showLoading();
    let option = {
        legend: {},
        tooltip: {},
        grid: {
            top: '15%',
            left: '5%',
            right: '10%',
            bottom: '20%',
            containLabel: true
        },
        dataset: {
            source: [
                ['健康状态', 90.3, 30.8, 0],
                ['体检数据', 83.1, 73.4, 55.1],
                ['就医统计', 86.4, 65.2, 82.5],
                ['药品购买', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {
            type: 'category',
            /*改变x轴颜色*/
            axisLine: {
                lineStyle: {
                    color: '#80D0FF',
                }
            },
        },
        yAxis: {
            name: '（万）',
            /*改变y轴颜色*/
            axisLine: {
                lineStyle: {
                    color: '#80D0FF',
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#315070'],
                    width: 1,
                    type: 'solid'
                }
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
                type: 'bar',
                barWidth:15,
                color: '#52DF9A'
            },
            {
                type: 'bar',
                barWidth:15,
                color: '#6CC2FD'
            },
            {
                type: 'bar',
                barWidth:15,
                color: '#22C3E6'
            }
        ]
    };

    myChart.hideLoading();
    myChart.setOption(option);
})();
/*养老服务需求*/
//leftcon-three
(function () {
    let myChart = echarts.init(document.getElementById('leftcon-three'));
    myChart.showLoading();
    let index = 0;
    var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']
    function fun() {
        var timer = setInterval(function () {
            myChart.dispatchAction({
                type: 'hideTip',
                seriesIndex: 0,
                dataIndex: index
            });
            // 显示提示框
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index
            });
            // 取消高亮指定的数据图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: index == 0 ? 4 : index - 1
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: index
            });
            index++;
            if (index > 4) {
                index = 0;
            }
        }, 3000)
    }

    fun()
    setTimeout(function () { fun() }, 5000);
    
    let option = {
      
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        series: [{
            name: '',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['40%', '50%'],
            roseType: 'radius',
            label: {
                show: true,
                normal: {
                    position: 'outside',
                    fontSize: 16
                }
            },
            labelLine: {
                length: 1,
                length2: 20,
                smooth: true
            },
            data: [
                {
                    value: 1,
                    name: '精神慰藉',
                    itemStyle: {
                        color: "rgba(244,146,21,0.7)",
                        borderColor: "rgba(244,146,21,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 2,
                    name: '家政',
                    itemStyle: {
                        color: "rgba(228,217,91,0.7)",
                        borderColor: "rgba(228,217,91,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 3,
                    name: '医疗保健',
                    itemStyle: {
                        color: "rgba(82,223,154,0.7)",
                        borderColor: "rgba(82,223,154,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 4,
                    name: '生活照料',
                    itemStyle: {
                        color: "rgba(53,201,231,0.7)",
                        borderColor: "rgba(53,201,231,1)",
                        borderWidth: 3
                    }
                }
            ]
        }]
    };
    myChart.hideLoading();
    myChart.setOption(option);
})();
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
            { name: "碧江区", value: 199 },
            { name: "万山区", value: 42 },
            { name: "江口县", value: 102 },
            { name: "玉屏侗族自治县", value: 81 },
            { name: "松桃苗族自治县", value: 47 },
            { name: "印江土家族苗族自治县", value: 67 },
            { name: "思南县", value: 82 },
            { name: "石阡县", value: 123 },
            { name: "德江县", value: 28 },
            { name: "沿河土家族自治县", value: 24 }
        ];

        //各项指令数据
        option = {
            //背景颜色
            backgroundColor: 'rgba(128, 128, 128, 0.01)', //rgba设置透明度0.1 
            // backgroundColor: {
            //     type: 'linear',
            //     x: 0,
            //     y: 0,
            //     x2: 1,
            //     y2: 1,
            //     colorStops: [{
            //         offset: 0, color: '#0f378f' // 0% 左上角到中间 处的颜色
            //     }, {
            //         offset: 1, color: '#00091a' // 100% 右下角到中间 处的颜色
            //     }],
            //     globalCoord: false
            // },//标题内容
            // title: {
            //     text: '铜仁地区实时地图(2020)',
            //     subtext: '梵净.康养 www.fjkyly.com',
            //     sublink: 'http://fjkyly.com/', //跳转路径url
            //     left: 'right',
            //     textStyle: {
            //         color: '#fff'
            //     }
            // },//标签
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
            // toolbox: {
            //     show: true,
            //     //orient: 'vertical',
            //     left: 'left',
            //     iconStyle: {
            //         normal: {
            //             color: '#fff',//设置颜色
            //         }
            //     },
            //     top: 'top',
            //     feature: {
            //         dataView: { readOnly: false },
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            // tooltip: {
            //     trigger: 'item',
            //     formatter: function (params) {
            //       if(typeof(params.value)[2] == "undefined"){
            //           return params.name + ' : ' + params.value;
            //       }else{
            //           return params.name + ' : ' + params.value[2];
            //       }
            //     }
            // },
         
            
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
                            color:'#fff',
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color:'#fff',
                            areaColor: '#3a7fd5',
                            borderColor: '#0a53e9',//线
                            shadowColor: '#092f8f',//外发光
                            shadowBlur: 20
                        },
                         emphasis: {
                            areaColor: '#0a2dae',//悬浮区背景
                        }
                    },
                 
                    // 文本位置修正
                    textFixed: {
                        Alaska: [20, -20]
                    },
                    data: data
                },
            ]
        }

        //设置
        myChart.setOption(option);
    });
})();
/*设备分析
 报表地址：https://gallery.echartsjs.com/editor.html?c=xtv96q-x7e
*/
(function () {
    let myChart = echarts.init(document.getElementById('zhejiu'));
    myChart.showLoading();
    var img = 'data:image/png;base64,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';

    var trafficWay = [{
        name: '软件设备',
        value: 20
    },  {
        name: '硬件设备',
        value: 30
    }, {
        name: '穿戴设备',
        value: 40
    }];

    var data = [];
    var color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
    for (var i = 0; i < trafficWay.length; i++) {
        data.push({
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: color[i],
                    shadowColor: color[i]
                }
            }
        }, {
            value: 2,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        });
    }
    var seriesOption = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [50, 50],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#80D0FF',
                    formatter: function (params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < trafficWay.length; i++) {
                            total += trafficWay[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return  params.name + '\n' + '\n' + '' + percent + '%';
                        } else {
                            return '';
                        }
                    },
                },
                labelLine: {
                    length: 10,
                    length2: 25,
                    show: true,
                    color: '#00ffff'
                }
            }
        },
        data: data
    }];
    option = {
        // backgroundColor: '#0A2E5D',
        color: color,
        // title: {
        //     text: '交通方式',
        //     top: '48%',
        //     textAlign: "center",
        //     left: "49%",
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 22,
        //         fontWeight: '400'
        //     }
        // },
        graphic: {
            elements: [{
                type: "image",
                z: 3,
                style: {
                    image: img,
                    width: 80,
                    height: 80
                },
                left: 'center',
                top: 'center',
                position: [100, 100]
            }]
        },
        tooltip: {
            show: false
        },
        // legend: {
        //     icon: "circle",
        //     orient: 'horizontal',
        //     // x: 'left',
        //     data: ['火车', '飞机', '客车', '轮渡'],
        //     right: 340,
        //     bottom: 150,
        //     align: 'right',
        //     textStyle: {
        //         color: "#fff"
        //     },
        //     itemGap: 20
        // },
        toolbox: {
            show: false
        },
        series: seriesOption
    }
    myChart.hideLoading();
    myChart.setOption(option);
})();
/*水柱 --设备折旧率*/
(function () {
    let myChart = echarts.init(document.getElementById('shuizhu'));
    myChart.showLoading();
    var value = 0.4;
    var data = [value, value, value,];
    var option = {

        title: {
            text: (value * 100).toFixed(0) + '{a|%}',
            textStyle: {
                fontSize: 20,
                fontFamily: 'Microsoft Yahei',
                fontWeight: 'normal',
                color: '#fff',
                rich: {
                    a: {
                        fontSize: 10,
                    }
                }
            },
            x: 'center',
            y: '35%'
        },
        graphic: [{
            type: 'group',
            left: '15%',
            top: '80%',
            children: [{
                type: 'text',
                z: 100,
                left: 'center',
                top: 'top',
                style: {
                    fill: '#80D0FF',
                    text: '设备折旧率',
                    fontSize:15,
                }
            }]
        }



        ],

        series: [
            {
                type: 'liquidFill',
                radius: '15%',
                center: ['40%', '40%'],
                //  shape: 'roundRect',
                data: data,

                outline: {
                    borderDistance: 0,
                    itemStyle: {
                        borderWidth: 0,

                        shadowBlur: 10,
                        shadowColor: 'rgba(13, 13, 46, 0)'
                    }
                },
                color: new echarts.graphic.RadialGradient(0.6, 0, 1, [{
                    offset: 0,
                    color: 'rgba(178, 251, 105, 0)'
                }, {
                    offset: 1,
                    color: 'rgba(10, 203, 135, 0)'
                }]),
                label: {
                    normal: {
                        formatter: '',
                    }
                }
            },
            {
                type: 'liquidFill',
                radius: '80%',
                center: ['50%', '50%'],
                //  shape: 'roundRect',
                data: data,
                backgroundStyle: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.7,
                        colorStops: [{
                            offset: 1,
                            color: 'rgba(50, 65, 96, 1)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(50, 65, 96, 1)'
                        }, {
                            offset: 0,
                            color: 'rgba(111, 117, 139, 1)'
                        }],
                        globalCoord: false
                    },
                },
                outline: {
                    borderDistance: 0,
                    itemStyle: {
                        borderWidth: 0,
                        borderColor: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(212, 252, 125, 1)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(2, 193, 131, 1)'
                            }, {
                                offset: 1,
                                color: 'rgba(2, 193, 131, 1)'
                            }],
                            globalCoord: false
                        },
                        shadowBlur: 10,
                        shadowColor: 'rgba(13, 13, 46, 1)'
                    }
                },
                color: new echarts.graphic.RadialGradient(0.6, 0, 1, [{
                    offset: 0,
                    color: 'rgba(78, 155, 240, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(58, 127, 213, 1)'
                }]),
                label: {
                    normal: {
                        formatter: '',
                    }
                }
            },]
    };
    myChart.hideLoading();
    myChart.setOption(option);
})();

/*机构物质需求
https://gallery.echartsjs.com/editor.html?c=xU6XzU1VLA
*/
(function () {
    let myChart = echarts.init(document.getElementById('wuzhi'));
    myChart.showLoading();
    let index = 0;
    var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']
    function fun() {
        var timer = setInterval(function () {
            myChart.dispatchAction({
                type: 'hideTip',
                seriesIndex: 0,
                dataIndex: index
            });
            // 显示提示框
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index
            });
            // 取消高亮指定的数据图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: index == 0 ? 5 : index - 1
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: index
            });
            index++;
            if (index > 5) {
                index = 0;
            }
        }, 3000)
    }

    fun()
    setTimeout(function () { fun() }, 5000);
    option = {
        title: {
            text: '占比',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: 20,
                color: '#ACE1FF'
            }
        },
        top: 5,
        left: 30,
        right: 30,
        tooltip: {
            trigger: 'item'
        },
        series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['24%', '45%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            // label: {
            //     show: true,
            //     position: 'outside',
            //     formatter: '{a|{b}：{d}%}\n{hr|}',
            //     rich: {
            //         hr: {
            //             backgroundColor: 't',
            //             borderRadius: 3,
            //             width: 3,
            //             height: 3,
            //             padding: [3, 3, 0, -12]
            //         },
            //         a: {
            //             padding: [-30, 15, -20, 15]
            //         }
            //     }
            // },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 10,
                    lineStyle: {
                        width: 0.5
                    }
                }
            },
            data: [{
                'name': '餐饮',
                'value': 1.45
            }, {
                'name': '老年人用品',
                'value': 2.93
            }, {
                'name': '办公',
                'value': 3.15
            }, {
                'name': '基建',
                'value': 4.78
            }, {
                'name': '药物医疗',
                'value': 5.93
            }, {
                'name': '文化娱乐',
                'value': 5.73
            }
            ],
        }]
    };



    myChart.hideLoading();
    myChart.setOption(option);
})();
/**投诉建议分析
https://gallery.echartsjs.com/editor.html?c=xdXtjwjzA9*/
(function () {
    let myChart = echarts.init(document.getElementById('jianyi'));
    myChart.showLoading();
    barColor=['#54C7FF','#2FE172','#E4D95B','#F49215','#62A4F0','#6AC5F1','#62D4E3','#73DFD9']
    personFloorName=[{value:50,name:'投诉建议1'},{value:12,name:'投诉建议2'},{value:15,name:'投诉建议3'},{value:13,name:'投诉建议4'}]
    option = {
      
          tooltip: {
            show: true,
            trigger: "item",
            formatter: "{b}:{c}"
        },
        polar: {
                radius:['20%','90%']
            },
            angleAxis: {
                show: false,
                clockwise:false,
                // min: function(value) {
                //     return 5
                // },
                max: function(value) {
                    return value.max+2;
                }
            },
            radiusAxis: {
                type: 'category',
                min: function(value) {
                    return -1
                },
                max: function(value) {
                    return value.max;
                },
                axisLabel: {
                    interval: 0,
                    color: function(value, index) {
                        return barColor[index - 1];
                    },
                    fontSize: 10,
                    align:'left',
                    margin:'-10'
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                },
                z:20,
                data: [...personFloorName.map(d => d.name)],
            },
            series: [{
                    type: 'bar',
                    coordinateSystem: 'polar',
                    barWidth: 7, // 10条数据的时候 10
                    barGap:10,
                    showBackground: true,
                    backgroundStyle: {
                        color: "#2468a2"
                    },
                    itemStyle: {
                       color: function(params) {
                          var idx=params.dataIndex;
                            return barColor[idx]
                        },
                    },
                    roundCap: true,
                    data: personFloorName
                },
       
            ]
    };
    myChart.hideLoading();
    myChart.setOption(option);
})();
/*爱心活动数据
https://gallery.echartsjs.com/editor.html?c=x6fvoDh-S
*/
(function () {
    let myChart = echarts.init(document.getElementById('aixin'));
    myChart.showLoading();
    var xData = ["1月", "2月", "3月", "4月", "5月", "6月"],
        yData1 = [76, 54, 64, 23, 76, 45],
        yData2 = [23, 33, 45, 76, 66, 53],
        yData3 = [65, 45, 36, 64, 70, 40],
        yData4 = [80, 56, 36, 34, 46, 70],
        borderData = [],
        legend = ["爱心送餐", "心灵慰问", "清洁护理", "志愿者活跃度"],
        colorArr = [{
            start: "rgba(108, 194, 253,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(71, 173, 245,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(82, 249, 107,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            color: "#00EAFF"
        }
        ];
    var normalColor = "rgba(255,255,255,0.5)";
    //   var fontSize = 20;
    let seriesData = [];
    var borderHeight = 4;
    xData.forEach(element => {
        borderData.push(borderHeight);
    });
    [yData1, yData2, yData3, yData4].forEach((item, index) => {
        var obj1 = {};
        var obj2 = {};
        if (index < 3) {
            obj1 = {
                name: legend[index],
                type: "bar",
                stack: legend[index],
                data: item,
                barWidth: "15%",
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: colorArr[index].start + "0.7)"
                            },
                            {
                                offset: 0.5,
                                color: colorArr[index].start + "0.3)"
                            },
                            {
                                offset: 1,
                                color: colorArr[index].end
                            }
                            ],
                            globalCoord: false
                        }
                    }
                }
            };
            obj2 = {
                name: "",
                type: "bar",
                stack: legend[index],
                itemStyle: {
                    normal: {
                        color: colorArr[index].start + "1)"
                    }
                },
                data: borderData
            };
            seriesData.push(obj1);
            seriesData.push(obj2);
        } else {
            var obj3 = {
                name: legend[index],
                type: "line",
                yAxisIndex: 1,
                smooth: false,
                symbol: "circle",
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                itemStyle: {
                    normal: {
                        color: colorArr[index].color,
                        borderColor: "#fff",
                        borderWidth: 1
                    }
                },
                data: item,
                label: {
                    normal: {
                        show: false
                    }
                }
            };
            seriesData.push(obj3);
        }
    });
    console.log(seriesData);
    option = {
        grid: {
            left: "3%",
            top: "20%",
            right: "3%",
            bottom: '10%',
            containLabel: true
        },
        // legend: {
        //     show: true,
        //     icon: "rect",
        //     itemWidth: 20,
        //     itemHeight: 3,
        //     right: "15%",
        //     top: "0%",
        //     textStyle: {
        //         color: "#fff"
        //     },
        //     data: legend
        // },
        tooltip: {
            trigger: "axis",
            formatter: function (params) {
                var str = "";
                for (var i = 0; i < params.length; i++) {
                    if (params[i].seriesName !== "") {
                        str +=
                            params[i].name +
                            ":" +
                            params[i].seriesName +
                            params[i].value +
                            "<br/>";
                    }
                }
                return str;
            }
        },
        xAxis: [{
            type: "category",
            data: xData,
            axisPointer: {
                type: "shadow",
                color: '#325684'
            },
            axisLabel: {
                textStyle: {
                    color: '#325684',
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#325684'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: "value",
            name: "（次）",
            nameTextStyle: {
                color: normalColor,
                fontSize: 12
            },
            // "min": 0,
            // "max": 50,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: normalColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: normalColor
                }
            }
        },
        {
            type: "value",
            name: "%",
            nameTextStyle: {
                color: normalColor,
                fontSize: 12
            },
            min: 0,
            max: 100,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                /*改变x轴颜色*/
                // axisLine: {
                //     lineStyle: {
                //         color: '#325684',
                //     }
                // },
                lineStyle: {
                    color: '#325684'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: "rgba(255,255,255,0.2)"
                }
            }
        }
        ],
        series: seriesData
    };
    myChart.hideLoading();
    myChart.setOption(option);
})();
/*老年人*/

(function () {
    let myChart = echarts.init(document.getElementById('laoren'));
    myChart.showLoading();
 let echartData= [
        { name: "", data: [30] },
        { name: "", data: [20] },
        { name: "", data: [10] },
        { name: "", data: [10] },
        { name: "", data: [30] }
      ];
 let option = {
    // backgroundColor: '#fff',
    grid: {
          containLabel: true,
          left: 20,
          right: 20,
          top: 10,
          bottom: 40,
        },
        tooltip: {
          show: false,
        },
        legend: {
          show: false,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        xAxis: {
          data: ["sss"],
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        color: [
          "#54C7FF",
          "#FF584A",
          "#2FE172",
          "#F49215",
          "#3159FF",
          "#585247",
        ],
        series: [],
 }
 
 echartData.forEach((item, index) => {
        option.series.push({
          type: "bar",
          name: item.name,
          stack: "1",
          label: {
            normal: {
              show: true,
              position: [5, 5],
              formatter: `{value|${item.data}}\n\n{name|${item.name}}`,
              align: "left",
              textStyle: {
                color: "#fff",
                rich: {
                  name: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "gray",
                  },
                  value: {
                    fontSize: "18",
                    fontWeight: 500,
                    color: "#fff",
                  },
                },
              },
            },
          },
          barWidth: 40,
          data: item.data,
          itemStyle: {
            normal: {
              barBorderRadius: [0],
            },
          },
          
        });
        if (index === 0) {
          option.series[index].itemStyle.normal.barBorderRadius = [
            5,
            0,
            0,
            5,
          ];
          option.series[index].tooltip={
               show: true,
                position: 'right',
                formatter: '60-69岁'+'{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                }
          }
        }else if(index ===1){
            option.series[index].tooltip={
               show: true,
                position: 'right',
                formatter: '70-79岁'+'{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                }
          }
        }else if(index ===2){
            option.series[index].tooltip={
               show: true,
                position: 'right',
                formatter: '80-89岁'+'{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                }
          }
        }else if(index ===3){
            option.series[index].tooltip={
               show: true,
                position: 'right',
                formatter: '90-99岁'+'{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                }
          }
        } else if (index === echartData.length - 1) {
          // option.series[index].itemStyle.normal.barBorderRadius = [
          //   1,
          //   1,
          //   1,
          //   1
          // ];
          option.series[index].tooltip={
               show: true,
                position: 'right',
                formatter: '100岁以上'+'{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                }
          }
        } else {
          return;
        }
      });
    myChart.hideLoading();
    myChart.setOption(option);
})();