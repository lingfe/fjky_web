// 登记用户   缓动动画
$(".content .info").each(function() {
    var rows = $(this).children().clone();
    $(this).append(rows);
});
// 转换echarts图内fontSize为rem单位。实现自适应
// function remFontSize(rem) {
//     var fontSize = document.documentElement.style.fontSize;
//     return Math.floor(rem * fontSize.replace('px', ''))
// }
window = onload = function() {
    //定时器每秒调用一次fnDate()
    setInterval(function() {
        fnDate();
    }, 1000);
}


//js 获取当前时间
function fnDate() {
    var t = document.getElementById("t");
    var d = document.getElementById("d");
    var date = new Date();
    var year = date.getFullYear(); //当前年份
    var month = date.getMonth(); //当前月份
    var data = date.getDate(); //天
    var hours = date.getHours(); //小时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var oDate = year + "年" + fnW((month + 1)) + "月" + fnW(data) + "日";
    var oTime = fnW(hours) + ":" + fnW(minute) + ":" + fnW(second);
    d.innerHTML = oDate;
    t.innerHTML = oTime;
}
//补位 当某个字段不是两位数时补0
function fnW(str) {
    var num;
    str >= 10 ? num = str : num = "0" + str;
    return num;
}

// 环形图
(function() {
    let myChart = echarts.init(document.getElementById('xinlv'));
    myChart.showLoading();
    var data = 120;
    var fontColor = "#fff";
    let noramlSize = 16;
    var datas = {
        value: data,
        ringColor: [{
            offset: 0,
            color: '#010638' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#E9276D' // 100% 处的颜色
        }]
    }
    var option = {
        title: {
            text: datas.value,
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtext: '心率',
            subtextStyle: {
                color: '#E9276D',
                fontSize: '12',
            }
        },

        legend: {
            show: false,
            data: []
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '77%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: datas.value,
                name: '',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: datas.ringColor

                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '',
                value: 150 - datas.value,
                itemStyle: {
                    normal: {
                        color: '#00b7ee',
                        opacity: 0.08,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            }]
        }]
    };
    myChart.hideLoading();
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 血压
(function() {
    let myChart = echarts.init(document.getElementById('xueya'));
    myChart.showLoading();
    var fontColor = "#fff";
    let noramlSize = 16;
    var datas = {
        value: 77,
        ringColor: [{
            offset: 0,
            color: '#01053B' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#1CC5F8' // 100% 处的颜色
        }]
    }
    var option = {
        title: {
            text: datas.value,
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtext: '血压',
            subtextStyle: {
                color: '#1CC5F8',
                fontSize: '12',
            }
        },

        legend: {
            show: false,
            data: []
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '77%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: datas.value,
                name: '',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: datas.ringColor

                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '',
                value: 100 - datas.value,
                itemStyle: {
                    normal: {
                        color: '#00b7ee',
                        opacity: 0.08,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            }]
        }]
    };
    myChart.hideLoading();
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 血氧
(function() {
    let myChart = echarts.init(document.getElementById('xueyang'));
    myChart.showLoading();

    var fontColor = "#fff";
    let noramlSize = 16;
    var datas = {
        value: '95',
        ringColor: [{
            offset: 0,
            color: '#010861' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#FFF262' // 100% 处的颜色
        }]
    }
    var option = {
        title: {
            text: ' ' + datas.value + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtext: '血氧',
            subtextStyle: {
                color: '#FFF262',
                fontSize: '12',
            }
        },

        legend: {
            show: false,
            data: []
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '77%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: datas.value,
                name: '',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: datas.ringColor

                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '',
                value: 120 - datas.value,
                itemStyle: {
                    normal: {
                        color: '#00b7ee',
                        opacity: 0.08,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            }]
        }]
    };
    myChart.hideLoading();
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 体温
(function() {
    let myChart = echarts.init(document.getElementById('tiwen'));
    myChart.showLoading();

    var fontColor = "#fff";
    let noramlSize = 16;
    var datas = {
        value: '37.5',
        ringColor: [{
            offset: 0,
            color: '#010964' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#FF5050' // 100% 处的颜色
        }]
    }
    var option = {
        title: {
            text: datas.value,
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtext: '体温',
            subtextStyle: {
                color: '#FF5050',
                fontSize: '12',
            }
        },

        legend: {
            show: false,
            data: []
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '77%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: datas.value,
                name: '',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: datas.ringColor

                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '',
                value: 50 - datas.value,
                itemStyle: {
                    normal: {
                        color: '#00b7ee',
                        opacity: 0.08,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            }]
        }]
    };

    myChart.hideLoading();
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 尿酸
(function() {
    let myChart = echarts.init(document.getElementById('niaosuan'));
    myChart.showLoading();

    var fontColor = "#fff";
    let noramlSize = 16;
    var datas = {
        value: '123',
        ringColor: [{
            offset: 0,
            color: '#010861' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#3AFFE4' // 100% 处的颜色
        }]
    }
    var option = {
        title: {
            text: datas.value,
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtext: '尿酸',
            subtextStyle: {
                color: '#3AFFE4',
                fontSize: '12',
            }
        },

        legend: {
            show: false,
            data: []
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '77%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: datas.value,
                name: '',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: datas.ringColor

                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '',
                value: 200 - datas.value,
                itemStyle: {
                    normal: {
                        color: '#00b7ee',
                        opacity: 0.08,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            }]
        }]
    };

    myChart.hideLoading();
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 血糖
(function() {
    let myChart = echarts.init(document.getElementById('sugar'));
    myChart.showLoading();

    var fontColor = "#fff";
    let noramlSize = 16;
    var datas = {
        value: '0.76',
        ringColor: [{
            offset: 0,
            color: '#010964' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#FF9E00' // 100% 处的颜色
        }]
    }
    var option = {
        title: {
            text: datas.value,
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtext: '血糖',
            subtextStyle: {
                color: '#FF9E00',
                fontSize: '12',
            }
        },

        legend: {
            show: false,
            data: []
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '77%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: datas.value,
                name: '',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: datas.ringColor

                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '',
                value: 1.2 - datas.value,
                itemStyle: {
                    normal: {
                        color: '#00b7ee',
                        opacity: 0.08,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            }]
        }]
    };

    myChart.hideLoading();
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 睡眠
(function() {
    let myChart = echarts.init(document.getElementById('sleep'));
    myChart.showLoading();

    var fontColor = "#fff";
    let noramlSize = 16;
    var datas = {
        value: '8.2',
        ringColor: [{
            offset: 0,
            color: '#051A6F' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#D437FF' // 100% 处的颜色
        }]
    }
    var option = {
        title: {
            text: datas.value,
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtext: '睡眠',
            subtextStyle: {
                color: '#D437FF',
                fontSize: '12',
            }
        },

        legend: {
            show: false,
            data: []
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '77%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: datas.value,
                name: '',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: datas.ringColor

                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '',
                value: 12 - datas.value,
                itemStyle: {
                    normal: {
                        color: '#00b7ee',
                        opacity: 0.08,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            }]
        }]
    };

    myChart.hideLoading();
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 步数
(function() {
    let myChart = echarts.init(document.getElementById('steps'));
    myChart.showLoading();


    var fontColor = "#fff";
    let noramlSize = 16;
    var datas = {
        value: '6770',
        ringColor: [{
            offset: 0,
            color: '#010762' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#00FF8A' // 100% 处的颜色
        }]
    }
    var option = {
        title: {
            text: datas.value,
            top: 'center',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtext: '步数',
            subtextStyle: {
                color: '#00FF8A',
                fontSize: '12',
            }
        },

        legend: {
            show: false,
            data: []
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['70%', '77%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: datas.value,
                name: '',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: datas.ringColor

                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '',
                value: 10000 - datas.value,
                itemStyle: {
                    normal: {
                        color: '#00b7ee',
                        opacity: 0.08,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            }]
        }]
    };

    myChart.hideLoading();
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();