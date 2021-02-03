  // 点击用户行   切换信息数据

  $(".line").click(function() {
      var data = [
          [{ id: 'xinlv', value: 118 }, { id: 'xueya', value: 68 }, { id: 'xueyang', value: '95%' }, { id: 'tiwen', value: '36.7' }, { id: 'niaosuan', value: '123' }, { id: 'sugar', value: 0.76 }, { id: 'sleep', value: 8.2 }, { id: 'steps', value: 6750 }],
          [{ id: 'xinlv', value: 123 }, { id: 'xueya', value: 77 }, { id: 'xueyang', value: '91%' }, { id: 'tiwen', value: '37.2' }, { id: 'niaosuan', value: '122' }, { id: 'sugar', value: 0.66 }, { id: 'sleep', value: 8.0 }, { id: 'steps', value: 3650 }],
          [{ id: 'xinlv', value: 113 }, { id: 'xueya', value: 88 }, { id: 'xueyang', value: '92%' }, { id: 'tiwen', value: '36.5' }, { id: 'niaosuan', value: '119' }, { id: 'sugar', value: 0.67 }, { id: 'sleep', value: 7.0 }, { id: 'steps', value: 7550 }],
          [{ id: 'xinlv', value: 115 }, { id: 'xueya', value: 76 }, { id: 'xueyang', value: '89%' }, { id: 'tiwen', value: '37.1' }, { id: 'niaosuan', value: '117' }, { id: 'sugar', value: 0.68 }, { id: 'sleep', value: 8.1 }, { id: 'steps', value: 4560 }],
          [{ id: 'xinlv', value: 121 }, { id: 'xueya', value: 62 }, { id: 'xueyang', value: '97%' }, { id: 'tiwen', value: '37.4' }, { id: 'niaosuan', value: '115' }, { id: 'sugar', value: 0.69 }, { id: 'sleep', value: 8.2 }, { id: 'steps', value: 9950 }],
          [{ id: 'xinlv', value: 119 }, { id: 'xueya', value: 75 }, { id: 'xueyang', value: '85%' }, { id: 'tiwen', value: '37.3' }, { id: 'niaosuan', value: '125' }, { id: 'sugar', value: 0.78 }, { id: 'sleep', value: 8.3 }, { id: 'steps', value: 1550 }],
          [{ id: 'xinlv', value: 120 }, { id: 'xueya', value: 78 }, { id: 'xueyang', value: '95%' }, { id: 'tiwen', value: '36.5' }, { id: 'niaosuan', value: '127' }, { id: 'sugar', value: 0.76 }, { id: 'sleep', value: 8.4 }, { id: 'steps', value: 3590 }],
          [{ id: 'xinlv', value: 111 }, { id: 'xueya', value: 82 }, { id: 'xueyang', value: '89%' }, { id: 'tiwen', value: '36.8' }, { id: 'niaosuan', value: '111' }, { id: 'sugar', value: 0.78 }, { id: 'sleep', value: 8.5 }, { id: 'steps', value: 4520 }],
          [{ id: 'xinlv', value: 116 }, { id: 'xueya', value: 83 }, { id: 'xueyang', value: '88%' }, { id: 'tiwen', value: '36.7' }, { id: 'niaosuan', value: '110' }, { id: 'sugar', value: 0.77 }, { id: 'sleep', value: 7.2 }, { id: 'steps', value: 9849 }],
          [{ id: 'xinlv', value: 117 }, { id: 'xueya', value: 88 }, { id: 'xueyang', value: '87%' }, { id: 'tiwen', value: '36.6' }, { id: 'niaosuan', value: '114' }, { id: 'sugar', value: 0.75 }, { id: 'sleep', value: 8.1 }, { id: 'steps', value: 2598 }],
          [{ id: 'xinlv', value: 121 }, { id: 'xueya', value: 81 }, { id: 'xueyang', value: '92%' }, { id: 'tiwen', value: '36.8' }, { id: 'niaosuan', value: '115' }, { id: 'sugar', value: 0.65 }, { id: 'sleep', value: 7.8 }, { id: 'steps', value: 2948 }],
          [{ id: 'xinlv', value: 118 }, { id: 'xueya', value: 76 }, { id: 'xueyang', value: '93%' }, { id: 'tiwen', value: '36.8' }, { id: 'niaosuan', value: '112' }, { id: 'sugar', value: 0.69 }, { id: 'sleep', value: 7.9 }, { id: 'steps', value: 8456 }],
          [{ id: 'xinlv', value: 117 }, { id: 'xueya', value: 75 }, { id: 'xueyang', value: '94%' }, { id: 'tiwen', value: '37.2' }, { id: 'niaosuan', value: '113' }, { id: 'sugar', value: 0.71 }, { id: 'sleep', value: 7.6 }, { id: 'steps', value: 2135 }],
          [{ id: 'xinlv', value: 114 }, { id: 'xueya', value: 79 }, { id: 'xueyang', value: '87%' }, { id: 'tiwen', value: '36.9' }, { id: 'niaosuan', value: '119' }, { id: 'sugar', value: 0.76 }, { id: 'sleep', value: 8.6 }, { id: 'steps', value: 5642 }],
          [{ id: 'xinlv', value: 126 }, { id: 'xueya', value: 67 }, { id: 'xueyang', value: '88%' }, { id: 'tiwen', value: '37.0' }, { id: 'niaosuan', value: '126' }, { id: 'sugar', value: 0.80 }, { id: 'sleep', value: 8.5 }, { id: 'steps', value: 1000 }],
          [{ id: 'xinlv', value: 129 }, { id: 'xueya', value: 68 }, { id: 'xueyang', value: '90%' }, { id: 'tiwen', value: '37.2' }, { id: 'niaosuan', value: '122' }, { id: 'sugar', value: 0.81 }, { id: 'sleep', value: 8.0 }, { id: 'steps', value: 1234 }],

      ];
      // 1.点击的同时，得到当前id
      var index = $(this).attr('id');
      if (index == 1) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          $("#name").val('杨桂花');
          $("#gender").val('女');
          $("#age").val('70');
          $("#phone").val('15286425001');
          $("#address").val(' 万山特区万山镇杉木董路6-366号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('124cm');
          $("#weight").val('38kg');
          $("#bmi").val('24.71');
          $("#the_waist").val('70cm');
          $("#hipline").val('80cm');
          $("#scale").val('0.8');
      } else if (index == 2) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          $("#name").val('黄世奇');
          $("#gender").val('男');
          $("#age").val('50');
          $("#phone").val('18985862211');
          $("#address").val(' 万山特区犀牛井社区');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('155cm');
          $("#weight").val('52kg');
          $("#bmi").val('22.21');
          $("#the_waist").val('70cm');
          $("#hipline").val('90cm');
          $("#scale").val('0.87');
      } else if (index == 3) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          myChart.setOption(option);
          $("#name").val('杨胜洪');
          $("#gender").val('男');
          $("#age").val('76');
          $("#phone").val('0856-3525769');
          $("#address").val(' 万山特区万山镇老街居委会龙塘坪组28号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('160cm');
          $("#weight").val('58kg');
          $("#bmi").val('25.71');
          $("#the_waist").val('80cm');
          $("#hipline").val('100cm');
          $("#scale").val('0.97');
      } else if (index == 4) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          myChart.setOption(option);
          $("#name").val('黄世忠');
          $("#gender").val('男');
          $("#age").val('59');
          $("#phone").val('0856-3525769');
          $("#address").val(' 万山特区万山镇冲脚路4-233号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('160cm');
          $("#weight").val('67kg');
          $("#bmi").val('26.17');
          $("#the_waist").val('85cm');
          $("#hipline").val('100cm');
          $("#scale").val('0.8');
      } else if (index == 5) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }
          $("#name").val('熊新保');
          $("#gender").val('男');
          $("#age").val('63');
          $("#phone").val('15286406365');
          $("#address").val(' 万山特区万山镇新街居委会大水溪组8号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('165cm');
          $("#weight").val('60kg');
          $("#bmi").val('24.66');
          $("#the_waist").val('90cm');
          $("#hipline").val('111cm');
          $("#scale").val('0.94');
      } else if (index == 6) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }
          $("#name").val('龙翠芬');
          $("#gender").val('女');
          $("#age").val('87');
          $("#phone").val('0856-3525679');
          $("#address").val(' 万山特区万山镇张家湾路8-134号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('146cm');
          $("#weight").val('44kg');
          $("#bmi").val('20.64');
          $("#the_waist").val('73cm');
          $("#hipline").val('98cm');
          $("#scale").val('0.77');
      } else if (index == 7) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }
          $("#name").val('雷化仙');
          $("#gender").val('女');
          $("#age").val('70');
          $("#phone").val('0856-3525679');
          $("#address").val(' 万山特区万山区谢桥办事处牙溪村组');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('144cm');
          $("#weight").val('48kg');
          $("#bmi").val('25.71');
          $("#the_waist").val('72cm');
          $("#hipline").val('88cm');
          $("#scale").val('0.82');
      } else if (index == 8) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          $("#name").val('李琳燕');
          $("#gender").val('女');
          $("#age").val('57');
          $("#phone").val('0856-3525679');
          $("#address").val(' 万山特区万山镇三角岩路18-563号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('150cm');
          $("#weight").val('52kg');
          $("#bmi").val('27.1');
          $("#the_waist").val('70cm');
          $("#hipline").val('80cm');
          $("#scale").val('0.8');
      } else if (index == 10) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }
          $("#name").val('吴先华');
          $("#gender").val('男');
          $("#age").val('75');
          $("#phone").val('0856-3525679');
          $("#address").val(' 万山特区万山镇官山路24-37号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('166cm');
          $("#weight").val('73kg');
          $("#bmi").val('26.55');
          $("#the_waist").val('90cm');
          $("#hipline").val('123cm');
          $("#scale").val('0.7');
      } else if (index == 11) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          $("#name").val('蒋启亲');
          $("#gender").val('男');
          $("#age").val('56');
          $("#phone").val('0856-3525679');
          $("#address").val(' 万山特区万山镇老中学');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('161cm');
          $("#weight").val('57kg');
          $("#bmi").val('22.71');
          $("#the_waist").val('89cm');
          $("#hipline").val('111cm');
          $("#scale").val('0.69');
      } else if (index == 12) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          $("#name").val('潘木德');
          $("#gender").val('男');
          $("#age").val('82');
          $("#phone").val('0856-3525679');
          $("#address").val(' 万山特区玉屏侗族自治县');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('158cm');
          $("#weight").val('52kg');
          $("#bmi").val('21.71');
          $("#the_waist").val('75cm');
          $("#hipline").val('90cm');
          $("#scale").val('0.8');
      } else if (index == 13) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          $("#name").val('王成举');
          $("#gender").val('男');
          $("#age").val('63');
          $("#phone").val('0856-3525679');
          $("#address").val(' 万山特区万山镇杉木董路6-366号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('168cm');
          $("#weight").val('60.7kg');
          $("#bmi").val('21.61');
          $("#the_waist").val('90cm');
          $("#hipline").val('124cm');
          $("#scale").val('0.75');
      } else if (index == 14) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }
          $("#name").val('赵汉云');
          $("#gender").val('女');
          $("#age").val('80');
          $("#phone").val('0856-3525679');
          $("#address").val(' 万山特区万山镇杉木董路6-366号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('148cm');
          $("#weight").val('45kg');
          $("#bmi").val('21.66');
          $("#the_waist").val('70cm');
          $("#hipline").val('80cm');
          $("#scale").val('0.8');
      } else if (index == 15) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          $("#name").val('吴玉仙');
          $("#gender").val('女');
          $("#age").val('79');
          $("#phone").val('13668563150');
          $("#address").val(' 万山特区万山镇三角岩路18-166号');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('144cm');
          $("#weight").val('52kg');
          $("#bmi").val('22.51');
          $("#the_waist").val('70cm');
          $("#hipline").val('80cm');
          $("#scale").val('0.8');
      } else if (index == 16) {
          var data2 = data[index - 1];
          for (var i = 0; i < data2.length; i++) {
              let myChart = echarts.init(document.getElementById(data2[i].id));
              var option = {
                  title: {
                      text: data2[i].value
                  }
              }
              myChart.setOption(option);
          }

          $("#name").val('杨秀英');
          $("#gender").val('女');
          $("#age").val('86');
          $("#phone").val('0856-3525679');
          $("#address").val(' 万山特区谢桥街道谢桥村');
          $("#live").val('独居');
          $("#self").val('半自理');
          $("#category").val('三无老人');
          $("#contacts").val('健康养老服务热线');
          $("#number").val('12349');
          $("#height").val('142cm');
          $("#weight").val('40kg');
          $("#bmi").val('17.85');
          $("#the_waist").val('78cm');
          $("#hipline").val('102cm');
          $("#scale").val('0.83');
      }
  });