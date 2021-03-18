var config = {};
export default config = {
	//仪表盘图系列-单数据渲染
	//步数
	stepNumber: function(n,num){
		if (n == '未测量'){
			n = 0;
		let value = n;
		var option = {
		    backgroundColor: 'white',
		    title: {
		        text:value,
		        textStyle: {
		            color: "#765EF9",
		            fontSize: 25,
		            fontWeight: '100',
		            rich: {
		                a: {
		                    fontSize: 48,
		                    color: '#765EF9'
		                },
		
		                c: {
		                    fontSize: 40,
		                    lineHeight: 75,
		                    color: '#4E7EFA',
		                    // padding: [5,0]
		                }
		            }
		        },
		        x: "center",
		        y: "center"
		    },
		    series: [{
		            type: 'pie',
		            zlevel: 1,
		            silent: true,
		            /*
		            radius
		            饼图的半径。可以为如下类型：
		            number：直接指定外半径值。
		            string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
		            Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
		            */
		            radius: ['77%', '78%'],
		            hoverAnimation: false,
		            //color: "rgba(88,142,197,0.5)",
		            color: {
		                type: 'linear',
		                x: 0,
		                y: 0,
		                x2: 0,
		                y2: 1,
		                colorStops: [{
		                    offset: 0,
		                    color: '#9933FF' // 0% 处的颜色
		                }, {
		                    offset: 1,
		                    color: '#00CCFF' // 100% 处的颜色
		                }],
		                global: false // 缺省为 false
		            },
		            // animation:false,    //charts3 no
		            label: {
		                normal: {
		                    show: false
		                },
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data: [1]
		        },
		        {
		            type: 'pie',
		            zlevel: 2,
		            silent: true,
		            radius: ['70%', '71%'],
		            startAngle: 90,
		            hoverAnimation: false,
		            // animation:false,    //charts3 no
		            color: {
		                type: 'linear',
		                x: 0,
		                y: 0,
		                x2: 0,
		                y2: 1,
		                colorStops: [{
		                    offset: 0,
		                    color: '#9933FF' // 0% 处的颜色
		                }, {
		                    offset: 1,
		                    color: '#00CCFF' // 100% 处的颜色
		                }],
		                global: false // 缺省为 false
		            },
		            label: {
		                normal: {
		                    show: false
		                },
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data: _pie2()
		        },
		        {
		            type: 'pie',
		            zlevel: 3,
		            silent: true,
		            radius: ['63%', '64%'],
		            label: {
		                normal: {
		                    show: false
		                },
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data: _pie3()
		        },
		
		        {
		            name: "",
		            type: 'custom',
		            zlevel: 7,
		            coordinateSystem: "none",
		            renderItem: function(params, api) {
		                return {
		                    type: 'arc',
		                    shape: {
		                        cx: api.getWidth() / 2, // 图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。
		                        cy: api.getHeight() / 2, // 图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
		                        r: Math.min(api.getWidth(), api.getHeight()) / 3 * 0.75, // 外半径。
		                        startAngle: (0 + num) * Math.PI / 180, // 开始弧度。
		                        endAngle: (5 + num) * Math.PI / 180, // 结束弧度。
		                        clockwise: false, //是否顺时针。
		                    },
		
		                    style: {
		                        // #00CEF3
		                        stroke: "#765EF9",
		                        fill: "transparent",
		                        shadowBlur: 2, //阴影
		                        shadowOffsetX: 0,
		                        shadowOffsetY: 0,
		                        shadowColor: '#4E7EFA',
		                        lineWidth: 9,
		                    },
		                    silent: true
		                };
		            },
		            data: [0]
		        },
		    ]
		};
		function _pie1() {
		    let dataArr = [];
		    for (var i = 0; i < 8; i++) {
		
		        dataArr.push({
		            name: (i + 1).toString(),
		            value: 20,
		            itemStyle: {
		                normal: {
		                    color: "rgba(88,142,197,0.4)",
		                    borderWidth: 0,
		                    borderColor: "rgba(0,0,0,0)"
		                }
		            }
		        })
		
		    }
		    return dataArr
		
		}
		function _pie2() {
		    let dataArr = [];
		    let _color = {
		        type: 'linear',
		        x: 0,
		        y: 0,
		        x2: 0,
		        y2: 1,
		        colorStops: [{
		            offset: 0,
		            color: '#9933FF' // 0% 处的颜色
		        }, {
		            offset: 1,
		            color: '#00CCFF' // 100% 处的颜色
		        }],
		        global: false // 缺省为 false
		    }
		    for (var i = 0; i < 16; i++) {
		        if (i % 4 === 0) {
		            dataArr.push({
		                name: (i + 1).toString(),
		                value: 50,
		                itemStyle: {
		                    normal: {
		                        //color: "rgba(88,142,197,0.5)",
		                        borderWidth: 0,
		                        borderColor: "rgba(0,0,0,0)"
		                    }
		                }
		            })
		        } else if (i % 4 === 1) {
		            dataArr.push({
		                name: (i + 1).toString(),
		                value: 2,
		                itemStyle: {
		                    normal: {
		                        color: "rgba(88,142,197,0)",
		                        borderWidth: 0,
		                        borderColor: "rgba(0,0,0,0)"
		                    }
		                }
		            })
		        } else if (i % 4 === 2) {
		            dataArr.push({
		                name: (i + 1).toString(),
		                value: 20,
		                itemStyle: {
		                    normal: {
		                        //color: "rgba(88,142,197,0.2)",
		                        borderWidth: 0,
		                        borderColor: "rgba(0,0,0,0)"
		                    }
		                }
		            })
		        } else {
		            dataArr.push({
		                name: (i + 1).toString(),
		                value: 2,
		                itemStyle: {
		                    normal: {
		                        //color: "rgba(0,0,0,0)",
		                        color: "rgba(88,142,197,0)",
		                        borderWidth: 0,
		                        borderColor: "rgba(0,0,0,0)"
		                    }
		                }
		            })
		        }
		
		    }
		    return dataArr
		
		}
		function _pie3() {
		    let dataArr = [];
		    for (var i = 0; i < 100; i++) {
		        if (i % 2 === 0) {
		            dataArr.push({
		                name: (i + 1).toString(),
		                value: 25,
		                itemStyle: {
		                    normal: {
		                        color: "rgb(126,190,255)",
		                        borderWidth: 0,
		                        borderColor: "rgba(0,0,0,0)"
		                    }
		                }
		            })
		        } else {
		            dataArr.push({
		                name: (i + 1).toString(),
		                value: 20,
		                itemStyle: {
		                    normal: {
		                        color: "rgba(0,0,0,0)",
		                        borderWidth: 0,
		                        borderColor: "rgba(0,0,0,0)"
		                    }
		                }
		            })
		        }
		
		    }
		    return dataArr
		
		}	
		return option;
		// 	return {
		// 		series: [{
		// 			type: 'gauge',
		// 			startAngle: 90,
		// 			endAngle: -270,
		// 			pointer: {
		// 				show: false,
		// 			},
		// 			max: 10000,
		// 			min: 0,
		// 			progress: {
		// 				show: true,
		// 				overlap: false,
		// 				roundCap: true,
		// 				clip: false,
		// 				itemStyle: {
		// 					color: '#00D193',
		// 				},
		// 			},
		// 			itemStyle: {
		// 				shadowColor: 'red',
		// 			},
		// 			axisLine: {
		// 				lineStyle: {
		// 					width: 10,
		// 				}
		// 			},
		// 			splitLine: {
		// 				show: false,
		// 				distance: 0,
		// 				length: 20
		// 			},
		// 			axisTick: {
		// 				show: false
		// 			},
		// 			axisLabel: {
		// 				show: false,
		// 				distance: 50
		// 			},
		// 			data: [{
		// 				value: n,
		// 				name: '步',
		// 				title: {
		// 					offsetCenter: ['0%', '35%']
		// 				},
		// 				detail: {
		// 					offsetCenter: ['0%', '-10%']
		// 				}
		// 			}, ],
		// 			title: {
		// 				fontSize: 13,
		// 				color: 'grey',
		// 			},
		// 			detail: {
		// 				width: 50,
		// 				height: 14,
		// 				fontSize: 25,
		// 				color: 'black',
		// 				borderRadius: 20,
		// 				formatter: '未测量'
		// 			}
		// 		}]
		// 	};
		
		} else {
			let value = n;
			var option = {
			    backgroundColor: 'white',
			    title: {
			        text:value ,
			        textStyle: {
			            color: "#765EF9",
			            fontSize: 30,
			            fontWeight: '100',
			            rich: {
			                a: {
			                    fontSize: 25,
			                    color: '#765EF9'
			                },
			
			                c: {
			                    fontSize: 40,
			                    lineHeight: 75,
			                    color: '#4E7EFA',
			                    // padding: [5,0]
			                }
			            }
			        },
			        x: "center",
			        y: "center"
			    },
			    series: [{
			            type: 'pie',
			            zlevel: 1,
			            silent: true,
			            /*
			            radius
			            饼图的半径。可以为如下类型：
			            number：直接指定外半径值。
			            string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
			            Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
			            */
			            radius: ['77%', '78%'],
			            hoverAnimation: false,
			            //color: "rgba(88,142,197,0.5)",
			            color: {
			                type: 'linear',
			                x: 0,
			                y: 0,
			                x2: 0,
			                y2: 1,
			                colorStops: [{
			                    offset: 0,
			                    color: '#9933FF' // 0% 处的颜色
			                }, {
			                    offset: 1,
			                    color: '#00CCFF' // 100% 处的颜色
			                }],
			                global: false // 缺省为 false
			            },
			            // animation:false,    //charts3 no
			            label: {
			                normal: {
			                    show: false
			                },
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data: [1]
			        },
			        {
			            type: 'pie',
			            zlevel: 2,
			            silent: true,
			            radius: ['70%', '71%'],
			            startAngle: 90,
			            hoverAnimation: false,
			            // animation:false,    //charts3 no
			            color: {
			                type: 'linear',
			                x: 0,
			                y: 0,
			                x2: 0,
			                y2: 1,
			                colorStops: [{
			                    offset: 0,
			                    color: '#9933FF' // 0% 处的颜色
			                }, {
			                    offset: 1,
			                    color: '#00CCFF' // 100% 处的颜色
			                }],
			                global: false // 缺省为 false
			            },
			            label: {
			                normal: {
			                    show: false
			                },
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data: _pie2()
			        },
			        {
			            type: 'pie',
			            zlevel: 3,
			            silent: true,
			            radius: ['63%', '64%'],
			            label: {
			                normal: {
			                    show: false
			                },
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data: _pie3()
			        },
			
			        {
			            name: "",
			            type: 'custom',
			            zlevel: 7,
			
			            coordinateSystem: "none",
			            renderItem: function(params, api) {
			                return {
			                    type: 'arc',
			                    shape: {
			                        cx: api.getWidth() / 2, // 图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。
			                        cy: api.getHeight() / 2, // 图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
			                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.75, // 外半径。
			                        startAngle: (0 + num) * Math.PI / 180, // 开始弧度。
			                        endAngle: (5 + num) * Math.PI / 180, // 结束弧度。
			                        clockwise: false, //是否顺时针。
			                    },
			
			                    style: {
			                        // #00CEF3
			                        stroke: "#765EF9",
			                        fill: "transparent",
			                        shadowBlur: 2, //阴影
			                        shadowOffsetX: 6,
			                        shadowOffsetY: 8,
			                        shadowColor: '#4E7EFA',
			                        lineWidth: 15,
			
			                    },
			                    silent: true
			                };
			            },
			            data: [0]
			        },
			    ]
			};
			function _pie1() {
			    let dataArr = [];
			    for (var i = 0; i < 8; i++) {
			
			        dataArr.push({
			            name: (i + 1).toString(),
			            value: 20,
			            itemStyle: {
			                normal: {
			                    color: "rgba(88,142,197,0.4)",
			                    borderWidth: 0,
			                    borderColor: "rgba(0,0,0,0)"
			                }
			            }
			        })
			
			    }
			    return dataArr
			
			}
			function _pie2() {
			    let dataArr = [];
			    let _color = {
			        type: 'linear',
			        x: 0,
			        y: 0,
			        x2: 0,
			        y2: 1,
			        colorStops: [{
			            offset: 0,
			            color: '#9933FF' // 0% 处的颜色
			        }, {
			            offset: 1,
			            color: '#00CCFF' // 100% 处的颜色
			        }],
			        global: false // 缺省为 false
			    }
			    for (var i = 0; i < 16; i++) {
			        if (i % 4 === 0) {
			            dataArr.push({
			                name: (i + 1).toString(),
			                value: 50,
			                itemStyle: {
			                    normal: {
			                        //color: "rgba(88,142,197,0.5)",
			                        borderWidth: 0,
			                        borderColor: "rgba(0,0,0,0)"
			                    }
			                }
			            })
			        } else if (i % 4 === 1) {
			            dataArr.push({
			                name: (i + 1).toString(),
			                value: 2,
			                itemStyle: {
			                    normal: {
			                        color: "rgba(88,142,197,0)",
			                        borderWidth: 0,
			                        borderColor: "rgba(0,0,0,0)"
			                    }
			                }
			            })
			        } else if (i % 4 === 2) {
			            dataArr.push({
			                name: (i + 1).toString(),
			                value: 20,
			                itemStyle: {
			                    normal: {
			                        //color: "rgba(88,142,197,0.2)",
			                        borderWidth: 0,
			                        borderColor: "rgba(0,0,0,0)"
			                    }
			                }
			            })
			        } else {
			            dataArr.push({
			                name: (i + 1).toString(),
			                value: 2,
			                itemStyle: {
			                    normal: {
			                        //color: "rgba(0,0,0,0)",
			                        color: "rgba(88,142,197,0)",
			                        borderWidth: 0,
			                        borderColor: "rgba(0,0,0,0)"
			                    }
			                }
			            })
			        }
			
			    }
			    return dataArr
			
			}
			function _pie3() {
			    let dataArr = [];
			    for (var i = 0; i < 100; i++) {
			        if (i % 2 === 0) {
			            dataArr.push({
			                name: (i + 1).toString(),
			                value: 25,
			                itemStyle: {
			                    normal: {
			                        color: "rgb(126,190,255)",
			                        borderWidth: 0,
			                        borderColor: "rgba(0,0,0,0)"
			                    }
			                }
			            })
			        } else {
			            dataArr.push({
			                name: (i + 1).toString(),
			                value: 20,
			                itemStyle: {
			                    normal: {
			                        color: "rgba(0,0,0,0)",
			                        borderWidth: 0,
			                        borderColor: "rgba(0,0,0,0)"
			                    }
			                }
			            })
			        }
			
			    }
			    return dataArr
			}	
			return option;
		// 	return {
		// 		series: [{
		// 			type: 'gauge',
		// 			startAngle: 90,
		// 			endAngle: -270,
		// 			pointer: {
		// 				show: false,
		// 			},
		// 			max: 10000,
		// 			min: 0,
		// 			progress: {
		// 				show: true,
		// 				overlap: false,
		// 				roundCap: true,
		// 				clip: false,
		// 				itemStyle: {
		// 					color: '#00D193',
		// 				},

		// 			},
		// 			itemStyle: {
		// 				shadowColor: 'red',
		// 			},
		// 			axisLine: {
		// 				lineStyle: {
		// 					width: 10,
		// 				}
		// 			},
		// 			splitLine: {
		// 				show: false,
		// 				distance: 0,
		// 				length: 20
		// 			},
		// 			axisTick: {
		// 				show: false
		// 			},
		// 			axisLabel: {
		// 				show: false,
		// 				distance: 50
		// 			},
		// 			data: [{
		// 				value: n,
		// 				name: '步',
		// 				title: {
		// 					offsetCenter: ['0%', '35%']
		// 				},
		// 				detail: {
		// 					offsetCenter: ['0%', '-10%']
		// 				}
		// 			}, ],
		// 			title: {
		// 				fontSize: 13,
		// 				color: 'grey',
		// 			},
		// 			detail: {
		// 				width: 50,
		// 				height: 14,
		// 				fontSize: 25,
		// 				color: 'black',
		// 				borderRadius: 20,
		// 				formatter: '{value}'
		// 			}
		// 		}]
		// 	};
		}
	},
	//血压
	bloodPressure: function(n,n2){
		if (n == '未测量') {
			n = 0;
		}
		return {
			series: [{
				type: 'gauge',
				startAngle: 180,
				endAngle: 0,
				min: 0,
				max: 200,
				splitNumber: 8,
				progress: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						width: 13,
						color: [
							[0.33, '#FF9A21'],
							[0.66, '#00D193'],
							[1, '#F72600'],
						]
					}
				},
				pointer: {
					show: true,
					icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
					length: '10%',
					width: 15,
					offsetCenter: [0, '-80%'],
					itemStyle: {
						color: 'white'
					}
				},
				axisTick: {
					show: false,
					length: 12,
					lineStyle: {
						color: 'auto',
						width: 2
					}
				},
				splitLine: {
					show: false,
					length: 20,
					lineStyle: {
						color: 'auto',
						width: 5
					}
				},
				axisLabel: {
					show: false,
					color: '#464646',
					fontSize: 20,
					distance: -60,
					formatter: function(value) {
						if (value === 0.875) {
							return '优';
						} else if (value === 0.625) {
							return '中';
						} else if (value === 0.375) {
							return '良';
						} else if (value === 0.125) {
							return '差';
						}
					}
				},
				title: {
					offsetCenter: [0, '10%'],
					fontSize: 13,
					color: 'gray',
				},
				detail: {
					fontSize: 25,
					offsetCenter: [0, '-30%'],
					valueAnimation: true,
					formatter: function(value) {
						return value + '/'+n2;
					},
					color: 'black',
				},
				data: [{
					value: n,
					name: '收/舒'
				}]
			}]
		};
	},
	//心率
	heartRate: function(n) {
		if (n == '未测量') {
			return {
				series: [{
					type: 'gauge',
					startAngle: 90,
					endAngle: -270,
					pointer: {
						show: false
					},
					min: 0,
					max: 100,
					progress: {
						show: true,
						overlap: false,
						roundCap: true,
						clip: false,
						itemStyle: {
							borderWidth: 1,
							color: '#FF2B62',
						}
					},
					axisLine: {
						lineStyle: {
							width: 10,
						}
					},
					splitLine: {
						show: false,
						distance: 0,
						length: 20
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false,
						distance: 50
					},
					data: [{
						value: n,
						// name: '次/分',
						name:'',
						title: {
							offsetCenter: ['0%', '20%']
						},
						detail: {
							offsetCenter: ['0%', '-20%']
						}
					}, ],
					title: {
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						width: 50,
						height: 14,
						fontSize: 25,
						color: 'black',
						borderColor: 'auto',
						borderRadius: 20,
						// borderWidth: 1,
						formatter: '未测量',
					}
				}]
			};
		} else {
			return {
				series: [{
					type: 'gauge',
					startAngle: 90,
					endAngle: -270,
					pointer: {
						show: false
					},
					min: 0,
					max: 100,
					progress: {
						show: true,
						overlap: false,
						roundCap: true,
						clip: false,
						itemStyle: {
							borderWidth: 1,
							color: '#FF2B62',
						}
					},
					axisLine: {
						lineStyle: {
							width: 10,
						}
					},
					splitLine: {
						show: false,
						distance: 0,
						length: 20
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false,
						distance: 50
					},
					data: [{
						value: n,
						// name: '次/分',
						name: '',
						title: {
							offsetCenter: ['0%', '20%']
						},
						detail: {
							offsetCenter: ['0%', '0%']
						}
					}, ],
					title: {
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						width: 50,
						height: 14,
						fontSize: 25,
						color: 'black',
						borderColor: 'auto',
						borderRadius: 20,
						// borderWidth: 1,
						formatter: '{value}',
					}
				}]
			};
		}
	},
	//血氧
	bloodOxygen: function(n) {
		if (n == '未测量') {
			n = 0;
			return {
				grid: {
					y: 5,
				},
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 120,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#F72600'],
								[0.66, '#FF9A21'],
								[1, '#00D193'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '12%',
						width: 20,
						offsetCenter: [0, '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: [0, '0%'],
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						fontSize: 25,
						offsetCenter: [0, '-30%'],
						valueAnimation: true,
						formatter: function(value) {
							// return Math.round(value * 100) + '分';
							return '未测量';
						},
						color: 'black',
					},
					data: [{
						value: n,
						name: '' 
					}]
				}]
			};
		} else {
			return {
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 120,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#F72600'],
								[0.66, '#FF9A21'],
								[1, '#00D193'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '12%',
						width: 20,
						offsetCenter: [0, '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: [0, '10%'],
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						fontSize: 25,
						offsetCenter: [0, '-30%'],
						valueAnimation: true,
						formatter: function(value) {
							// return Math.round(value * 100) + '分';
							return value + '%';
						},
						color: 'black',
					},
					data: [{
						value: n,
						name: '饱和度'
					}]
				}]
			};
		}
	},
	//尿酸
	uricAcid: function(n) {
		if (n == '未测量') {
			n = 0;
			return {
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 200,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#FF9A21'],
								[0.66, '#00D193'],
								[1, '#F72600'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '15%',
						width: 15,
						offsetCenter: [0, '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: [0, '-10%'],
						fontSize: 15,
						color: 'grey',
					},
					detail: {
						fontSize: 25,
						offsetCenter: [0, '-33%'],
						valueAnimation: true,
						formatter: function(value) {
							// return Math.round(value * 100) + '分';
							return '未测量';
						},
						color: 'black',
					},
					data: [{
						value: n,
						name: 'mmol/L',
					}]
				}]
			};
		} else {
			return {
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 200,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#FF9A21'],
								[0.66, '#00D193'],
								[1, '#F72600'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '15%',
						width: 15,
						offsetCenter: [0, '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: [0, '-10%'],
						fontSize: 15,
						color: 'grey',
					},
					detail: {
						fontSize: 25,
						offsetCenter: [0, '-33%'],
						valueAnimation: true,
						formatter: function(value) {
							// return Math.round(value * 100) + '分';
							return value;
						},
						color: 'black',
					},
					data: [{
						value: n,
						name: 'mmol/L',
					}]
				}]
			};
		}
	},
	//血脂
	bloodFat: function(n) {
		console.log(n);
		if (n == '未测量' || n == 0) {
			console.log('123123123');
			console.log(n);
			n = 0;
			return {
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 10,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						show: true,
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#FF9A21'],
								[0.66, '#00D193'],
								[1, '#F72600'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '12%',
						width: 20,
						offsetCenter: [0, '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: ['30%', '-30%'],
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						show: true,
						fontSize: 25,
						offsetCenter: ['0%', '-30%'],
						valueAnimation: true,
						formatter: function(value) {
							return '未测量';
						},
						color: 'black'
					},
					data: [{
						value: '0',
						// name: 'mmol/L'
					}]
				}]
			};
		} else {
			return {
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 10,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						show: true,
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#FF9A21'],
								[0.66, '#00D193'],
								[1, '#F72600'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '12%',
						width: 20,
						offsetCenter: [0, '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: ['30%', '-30%'],
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						fontSize: 25,
						offsetCenter: ['0%', '-30%'],
						valueAnimation: true,
						formatter: function(value) {
							return value;
						},
						color: 'black'
					},
					data: [{
						value: n,
						// name: 'mmol/L'
					}]
				}]
			};

		}
	},
	//血糖
	bloodSugar: function(n){
		if (n == '未测量') {
			n = 0;
			return {
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 10,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						show: true,
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#FF9A21'],
								[0.66, '#00D193'],
								[1, '#F72600'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '12%',
						width: 20,
						offsetCenter: [0, '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: [0, '10%'],
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						fontSize: 25,
						offsetCenter: [0, '-20%'],
						valueAnimation: true,
						formatter: function(value) {
							// return Math.round(value * 100) + '分';
							return '未测量';
						},
						color: 'black',
					},
					data: [{
						value: n,
						// name: '总胆固醇',
					}]
				}]
			};
		} else {
			return {
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 10,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						show: true,
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#FF9A21'],
								[0.66, '#00D193'],
								[1, '#F72600'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '12%',
						width: 20,
						offsetCenter: [0, '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: [0, '10%'],
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						fontSize: 25,
						offsetCenter: [0, '-20%'],
						valueAnimation: true,
						formatter: function(value) {
							// return Math.round(value * 100) + '分';
							return value ;
						},
						color: 'black',
					},
					data: [{
						value: n,
						// name: '总胆固醇',
					}]
				}]
			};
		}
	},
	//体温
	tiwen: function(n){
		if (n == '未测量') {
			n = 0;
			return {
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 100,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#72A7FE'],
								[0.66, '#00D193'],
								[1, '#F72600'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '10%',
						width: 20,
						offsetCenter: ['0', '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: ['25%', '-20%'],
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						fontSize: 25,
						offsetCenter: ['-5%', '-20%'],
						valueAnimation: true,
						formatter: function(value) {
							// return Math.round(value * 100) + '分';
							return '未测量';
						},
						color: 'black',
					},
					data: [{
						value: n,
						name: '°C'
					}]
				}]
			};
		} else {

			return {
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 100,
					splitNumber: 8,
					progress: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							width: 13,
							color: [
								[0.33, '#72A7FE'],
								[0.66, '#00D193'],
								[1, '#F72600'],
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '10%',
						width: 20,
						offsetCenter: ['0', '-80%'],
						itemStyle: {
							color: 'white'
						}
					},
					axisTick: {
						show: false,
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						show: false,
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						show: false,
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function(value) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
							}
						}
					},
					title: {
						offsetCenter: ['25%', '-20%'],
						fontSize: 13,
						color: 'grey',
					},
					detail: {
						fontSize: 25,
						offsetCenter: ['-5%', '-20%'],
						valueAnimation: true,
						formatter: function(value) {
							// return Math.round(value * 100) + '分';
							return value;
						},
						color: 'black',
					},
					data: [{
						value: n,
						name: '°C'
					}]
				}]
			};
		}
	},
	//睡眠
	shuimian: function(n,angle){
		//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
		function getCirlPoint(x0, y0, r, angle) {
		    let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
		    let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
		    return {
		        x: x1,
		        y: y1
		    }
		}
		if (n == '未测量'){
			 n = 0;
			let value = n;
			let option = {
			     backgroundColor: 'white',
			     title: {
			         text:value+'h',
			         x: 'center',
			         y: 'center',
			         textStyle: {
			             rich: {
			                 a: {
			                     fontSize: 30,
			                     color: '#29EEF3'
			                 },
			
			                 c: {
			                     fontSize: 20,
			                     color: '#ffffff',
			                     // padding: [5,0]
			                 }
			             }
			         }
			     },
			
			     series: [
			         // 紫色
			         {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 return {
			                     type: 'arc',
			                     shape: {
			                         cx: api.getWidth() / 2,
			                         cy: api.getHeight() / 2,
			                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
			                         startAngle: (0 + angle) * Math.PI / 180,
			                         endAngle: (90 + angle) * Math.PI / 180
			                     },
			                     style: {
			                         stroke: "#8383FA",
			                         fill: "transparent",
			                         lineWidth: 1.5
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         }, {
			             name: "ring5", //紫点
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 let x0 = api.getWidth() / 2;
			                 let y0 = api.getHeight() / 2;
			                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
			                 let point = getCirlPoint(x0, y0, r, (90 + angle))
			                 return {
			                     type: 'circle',
			                     shape: {
			                         cx: point.x,
			                         cy: point.y,
			                         r: 4
			                     },
			                     style: {
			                         stroke: "#8450F9", //绿
			                         fill: "#8450F9"
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         },
			         // 蓝色
			
			         {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 return {
			                     type: 'arc',
			                     shape: {
			                         cx: api.getWidth() / 2,
			                         cy: api.getHeight() / 2,
			                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
			                         startAngle: (180 + angle) * Math.PI / 180,
			                         endAngle: (270 + angle) * Math.PI / 180
			                     },
			                     style: {
			                         stroke: "#4386FA",
			                         fill: "transparent",
			                         lineWidth: 1.5
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         },
			         {
			             name: "ring5", // 蓝色
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 let x0 = api.getWidth() / 2;
			                 let y0 = api.getHeight() / 2;
			                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
			                 let point = getCirlPoint(x0, y0, r, (180 + angle))
			                 return {
			                     type: 'circle',
			                     shape: {
			                         cx: point.x,
			                         cy: point.y,
			                         r: 4
			                     },
			                     style: {
			                         stroke: "#4386FA", //绿
			                         fill: "#4386FA"
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         },
			
			         {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 return {
			                     type: 'arc',
			                     shape: {
			                         cx: api.getWidth() / 2,
			                         cy: api.getHeight() / 2,
			                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
			                         startAngle: (270 + -angle) * Math.PI / 180,
			                         endAngle: (40 + -angle) * Math.PI / 180
			                     },
			                     style: {
			                         stroke: "#0CD3DB",
			                         fill: "transparent",
			                         lineWidth: 1.5
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         },
			         // 橘色
			
			         {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 return {
			                     type: 'arc',
			                     shape: {
			                         cx: api.getWidth() / 2,
			                         cy: api.getHeight() / 2,
			                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
			                         startAngle: (90 + -angle) * Math.PI / 180,
			                         endAngle: (220 + -angle) * Math.PI / 180
			                     },
			                     style: {
			                         stroke: "#FF8E89",
			                         fill: "transparent",
			                         lineWidth: 1.5
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         }, {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 let x0 = api.getWidth() / 2;
			                 let y0 = api.getHeight() / 2;
			                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
			                 let point = getCirlPoint(x0, y0, r, (90 + -angle))
			                 return {
			                     type: 'circle',
			                     shape: {
			                         cx: point.x,
			                         cy: point.y,
			                         r: 4
			                     },
			                     style: {
			                         stroke: "#FF8E89", //粉
			                         fill: "#FF8E89"
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         }, {
			             name: "ring5", //绿点
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 let x0 = api.getWidth() / 2;
			                 let y0 = api.getHeight() / 2;
			                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
			                 let point = getCirlPoint(x0, y0, r, (270 + -angle))
			                 return {
			                     type: 'circle',
			                     shape: {
			                         cx: point.x,
			                         cy: point.y,
			                         r: 4
			                     },
			                     style: {
			                         stroke: "#0CD3DB", //绿
			                         fill: "#0CD3DB"
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         }, {
			             name: '吃猪肉频率',
			             type: 'pie',
			             radius: ['50%', '40%'],
			             silent: true,
			             clockwise: true,
			             startAngle: 90,
			             z: 0,
			             zlevel: 0,
			             label: {
			                 normal: {
			                     position: "center",
			
			                 }
			             },
			             data: [{
			                     value: value,
			                     name: "",
			                     itemStyle: {
			                         normal: {
			                             color: { // 完成的圆环的颜色
			                                 colorStops: [{
			                                         offset: 0,
			                                         color: '#A098FC' // 0% 处的颜色
			                                     },
			                                     {
			                                         offset: 0.3,
			                                         color: '#4386FA' // 0% 处的颜色
			                                     },
			                                     {
			                                         offset: 0.6,
			                                         color: '#4FADFD' // 0% 处的颜色
			                                     },
			                                     {
			                                         offset: 0.8,
			                                         color: '#0CD3DB' // 100% 处的颜色
			                                     }, {
			                                         offset: 1,
			                                         color: '#646CF9' // 100% 处的颜色
			                                     }
			                                 ]
			                             },
			                         }
			                     }
			                 },
			                 {
			                     value: 100 - value,
			                     name: "",
			                     label: {
			                         normal: {
			                             show: false
			                         }
			                     },
			                     itemStyle: {
			                         normal: {
			                             color: "#173164"
			                         }
			                     }
			                 }
			             ]
			         },
			         {
			             name: '吃猪肉频率',
			             type: 'pie',
			             radius: ['32%', '35%'],
			             silent: true,
			             clockwise: true,
			             startAngle: 270,
			             z: 0,
			             zlevel: 0,
			             label: {
			                 normal: {
			                     position: "center",
			
			                 }
			             },
			             data: [{
			                     value: value,
			                     name: "",
			                     itemStyle: {
			                         normal: {
			                             color: { // 完成的圆环的颜色
			                                 colorStops: [{
			                                     offset: 0,
			                                     color: '#00EDF3' // 0% 处的颜色
			                                 }, {
			                                     offset: 1,
			                                     color: '#646CF9' // 100% 处的颜色
			                                 }]
			                             },
			                         }
			                     }
			                 },
			                 {
			                     value: 100 - value,
			                     name: "",
			                     label: {
			                         normal: {
			                             show: false
			                         }
			                     },
			                     itemStyle: {
			                         normal: {
			                             color: "#173164"
			                         }
			                     }
			                 }
			             ]
			         },
			
			     ]
			 };
			return option;
			// return {
			// 	series: [{
			// 		type: 'gauge',
			// 		startAngle: 90,
			// 		endAngle: -270,
			// 		pointer: {
			// 			show: false,
			// 		},
			// 		max: 9,
			// 		min: 0,
			// 		progress: {
			// 			show: true,
			// 			overlap: false,
			// 			roundCap: true,
			// 			clip: false,
			// 			itemStyle: {
			// 				color: '#BC3FFF',
			// 			},
			// 		},
			// 		axisLine: {
			// 			lineStyle: {
			// 				width: 10,
			// 			}
			// 		},
			// 		splitLine: {
			// 			show: false,
			// 			distance: 0,
			// 			length: 20
			// 		},
			// 		axisTick: {
			// 			show: false
			// 		},
			// 		axisLabel: {
			// 			show: false,
			// 			distance: 160
			// 		},
			// 		data: [{
			// 			value: n,
			// 			name: 'h',
			// 			title: {
			// 				offsetCenter: ['40%', '0%']
			// 			},
			// 			detail: {
			// 				offsetCenter: ['-5%', '-5%']
			// 			}
			// 		}, ],
			// 		title: {
			// 			fontSize: 13,
			// 			color: 'grey',
			// 		},
			// 		detail: {
			// 			width: 50,
			// 			height: 14,
			// 			fontSize: 25,
			// 			color: 'black',
			// 			borderRadius: 20,
			// 			formatter: '未测量'
			// 		}
			// 	}]
			// };
		} else {
			let angle = 0; //角度，用来做简单的动画效果的
			let value = n;
			let option = {
			     backgroundColor: 'white',
			     title: {
			         text:value,
			         x: 'center',
			         y: 'center',
			         textStyle: {
			             rich: {
			                 a: {
			                     fontSize: 30,
			                     color: '#29EEF3'
			                 },
			
			                 c: {
			                     fontSize: 20,
			                     color: '#ffffff',
			                     // padding: [5,0]
			                 }
			             }
			         }
			     },
			
			     series: [
			         // 紫色
			         {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 return {
			                     type: 'arc',
			                     shape: {
			                         cx: api.getWidth() / 2,
			                         cy: api.getHeight() / 2,
			                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
			                         startAngle: (0 + angle) * Math.PI / 180,
			                         endAngle: (90 + angle) * Math.PI / 180
			                     },
			                     style: {
			                         stroke: "#8383FA",
			                         fill: "transparent",
			                         lineWidth: 1.5
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         }, {
			             name: "ring5", //紫点
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 let x0 = api.getWidth() / 2;
			                 let y0 = api.getHeight() / 2;
			                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
			                 let point = getCirlPoint(x0, y0, r, (90 + angle))
			                 return {
			                     type: 'circle',
			                     shape: {
			                         cx: point.x,
			                         cy: point.y,
			                         r: 4
			                     },
			                     style: {
			                         stroke: "#8450F9", //绿
			                         fill: "#8450F9"
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         },
			         // 蓝色
			         {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 return {
			                     type: 'arc',
			                     shape: {
			                         cx: api.getWidth() / 2,
			                         cy: api.getHeight() / 2,
			                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
			                         startAngle: (180 + angle) * Math.PI / 180,
			                         endAngle: (270 + angle) * Math.PI / 180
			                     },
			                     style: {
			                         stroke: "#4386FA",
			                         fill: "transparent",
			                         lineWidth: 1.5
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         },
			         {
			             name: "ring5", // 蓝色
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 let x0 = api.getWidth() / 2;
			                 let y0 = api.getHeight() / 2;
			                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
			                 let point = getCirlPoint(x0, y0, r, (180 + angle))
			                 return {
			                     type: 'circle',
			                     shape: {
			                         cx: point.x,
			                         cy: point.y,
			                         r: 4
			                     },
			                     style: {
			                         stroke: "#4386FA", //绿
			                         fill: "#4386FA"
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         },
			
			         {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 return {
			                     type: 'arc',
			                     shape: {
			                         cx: api.getWidth() / 2,
			                         cy: api.getHeight() / 2,
			                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
			                         startAngle: (270 + -angle) * Math.PI / 180,
			                         endAngle: (40 + -angle) * Math.PI / 180
			                     },
			                     style: {
			                         stroke: "#0CD3DB",
			                         fill: "transparent",
			                         lineWidth: 1.5
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         },
			         // 橘色
			         {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 return {
			                     type: 'arc',
			                     shape: {
			                         cx: api.getWidth() / 2,
			                         cy: api.getHeight() / 2,
			                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
			                         startAngle: (90 + -angle) * Math.PI / 180,
			                         endAngle: (220 + -angle) * Math.PI / 180
			                     },
			                     style: {
			                         stroke: "#FF8E89",
			                         fill: "transparent",
			                         lineWidth: 1.5
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         }, {
			             name: "ring5",
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 let x0 = api.getWidth() / 2;
			                 let y0 = api.getHeight() / 2;
			                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
			                 let point = getCirlPoint(x0, y0, r, (90 + -angle))
			                 return {
			                     type: 'circle',
			                     shape: {
			                         cx: point.x,
			                         cy: point.y,
			                         r: 4
			                     },
			                     style: {
			                         stroke: "#FF8E89", //粉
			                         fill: "#FF8E89"
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         }, {
			             name: "ring5", //绿点
			             type: 'custom',
			             coordinateSystem: "none",
			             renderItem: function(params, api) {
			                 let x0 = api.getWidth() / 2;
			                 let y0 = api.getHeight() / 2;
			                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
			                 let point = getCirlPoint(x0, y0, r, (270 + -angle))
			                 return {
			                     type: 'circle',
			                     shape: {
			                         cx: point.x,
			                         cy: point.y,
			                         r: 4
			                     },
			                     style: {
			                         stroke: "#0CD3DB", //绿
			                         fill: "#0CD3DB"
			                     },
			                     silent: true
			                 };
			             },
			             data: [0]
			         }, {
			             name: '吃猪肉频率',
			             type: 'pie',
			             radius: ['50%', '40%'],
			             silent: true,
			             clockwise: true,
			             startAngle: 90,
			             z: 0,
			             zlevel: 0,
			             label: {
			                 normal: {
			                     position: "center",
			
			                 }
			             },
			             data: [{
			                     value: value,
			                     name: "",
			                     itemStyle: {
			                         normal: {
			                             color: { // 完成的圆环的颜色
			                                 colorStops: [{
			                                         offset: 0,
			                                         color: '#A098FC' // 0% 处的颜色
			                                     },
			                                     {
			                                         offset: 0.3,
			                                         color: '#4386FA' // 0% 处的颜色
			                                     },
			                                     {
			                                         offset: 0.6,
			                                         color: '#4FADFD' // 0% 处的颜色
			                                     },
			                                     {
			                                         offset: 0.8,
			                                         color: '#0CD3DB' // 100% 处的颜色
			                                     }, {
			                                         offset: 1,
			                                         color: '#646CF9' // 100% 处的颜色
			                                     }
			                                 ]
			                             },
			                         }
			                     }
			                 },
			                 {
			                     value: 100 - value,
			                     name: "",
			                     label: {
			                         normal: {
			                             show: false
			                         }
			                     },
			                     itemStyle: {
			                         normal: {
			                             color: "#173164"
			                         }
			                     }
			                 }
			             ]
			         },
			         {
			             name: '吃猪肉频率',
			             type: 'pie',
			             radius: ['32%', '35%'],
			             silent: true,
			             clockwise: true,
			             startAngle: 270,
			             z: 0,
			             zlevel: 0,
			             label: {
			                 normal: {
			                     position: "center",
			
			                 }
			             },
			             data: [{
			                     value: value,
			                     name: "",
			                     itemStyle: {
			                         normal: {
			                             color: { // 完成的圆环的颜色
			                                 colorStops: [{
			                                     offset: 0,
			                                     color: '#00EDF3' // 0% 处的颜色
			                                 }, {
			                                     offset: 1,
			                                     color: '#646CF9' // 100% 处的颜色
			                                 }]
			                             },
			                         }
			                     }
			                 },
			                 {
			                     value: 100 - value,
			                     name: "",
			                     label: {
			                         normal: {
			                             show: false
			                         }
			                     },
			                     itemStyle: {
			                         normal: {
			                             color: "#173164"
			                         }
			                     }
			                 }
			             ]
			         },
			     ]
			 };
			return option;
			// return {
			// 	series: [{
			// 		type: 'gauge',
			// 		startAngle: 90,
			// 		endAngle: -270,
			// 		pointer: {
			// 			show: false,
			// 		},
			// 		max: 9,
			// 		min: 0,
			// 		progress: {
			// 			show: true,
			// 			overlap: false,
			// 			roundCap: true,
			// 			clip: false,
			// 			itemStyle: {
			// 				color: '#BC3FFF',
			// 			},
			// 		},
			// 		axisLine: {
			// 			lineStyle: {
			// 				width: 10,
			// 			}
			// 		},
			// 		splitLine: {
			// 			show: false,
			// 			distance: 0,
			// 			length: 20
			// 		},
			// 		axisTick: {
			// 			show: false
			// 		},
			// 		axisLabel: {
			// 			show: false,
			// 			distance: 160
			// 		},
			// 		data: [{
			// 			value: n,
			// 			name: 'h',
			// 			title: {
			// 				offsetCenter: ['40%', '0%']
			// 			},
			// 			detail: {
			// 				offsetCenter: ['-5%', '-5%']
			// 			}
			// 		}, ],
			// 		title: {
			// 			fontSize: 13,
			// 			color: 'grey',
			// 		},
			// 		detail: {
			// 			width: 50,
			// 			height: 14,
			// 			fontSize: 25,
			// 			color: 'black',
			// 			borderRadius: 20,
			// 			formatter: '{value}'
			// 		}
			// 	}]
			// };
		}
	},
	//折线图系列-多条数据渲染
	//步数
	stepNumber_lineChart: function(arr, xarr){
		return {
			xAxis: {
				type: 'category',
				data: xarr,
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'grey',
					}
				}
			},
			yAxis: {
				type: 'value',
				scale: true,
				max: 20,
				min: 0,
				splitNumber: 5,
				boundaryGap: [5, 5],
				axisTick: {
					show: false,
					length: 15,
					splitNumber: 10,
				}
			},
			series: [{
				symbol: "none",
				data: arr,
				type: 'line',
			}]
		};
	},
	//血压
	bloodPressure_lineChart: function(arr1, arr2, xarr) {
		return {
			grid: {},
			color: ['#329BFE', '#FF9A21'],
			// legend:['舒张压','收缩压'],
			legend: [{
				top: "5%",
				right: "10%",
				textStyle: {
					// 图例文字样式
					color: "black",
					fontSize: 12,
					fontFamily: "微软雅黑"
				},
				itemWidth: 12, // 图例图形的宽度
				itemHeight: 12, // 图例图形的高度
				data: [{
					name: "收缩压", // 图例文字内容
					icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
				}]
			}, {
				top: "5%",
				right: "30%",
				textStyle: {
					// 图例文字样式
					color: "black",
					fontSize: 12,
					fontFamily: "微软雅黑"
				},
				itemWidth: 12, // 图例图形的宽度
				itemHeight: 12, // 图例图形的高度
				data: [{
					name: "舒张压", // 图例文字内容
					icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
				}]
			}],

			xAxis: {
				type: 'category',
				data: xarr,
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'grey',
					}
				}
			},
			yAxis: {
				scale: true,
				// max: 20,
				// min: 0,
				// splitNumber: 5,
				// boundaryGap: [5, 5],
				axisTick: {
					show: false,
					length: 15,
					splitNumber: 10,
				},
				name: '单位：次/分',
				nameTextStyle: {
					padding: [0, 0, 10, 20]
				},
			},
			series: [{
				symbol: "none",
				name: '舒张压',
				data: arr2,
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}, {
				name: '收缩压',
				symbol: "none",
				data: arr1,
				type: 'line',
				lineStyle: {
					color: '#ffA438'
				}
			}]
		};
	},
	//心率
	heartRate_lineChart: function(arr, xarr) {
		return {
			color: ['#329BFE', '#FF9A21'],
			legend: [{
					show: true,
					top: "5%",
					right: "10%",
					textStyle: {
						// 图例文字样式
						color: "black",
						fontSize: 12,
						fontFamily: "微软雅黑"
					},
					itemWidth: 12, // 图例图形的宽度
					itemHeight: 12, // 图例图形的高度
					data: [{
						name: "最小心率", // 图例文字内容
						icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
					}]
				}
				// , {
				// 	top: "5%",
				// 	right: "30%",
				// 	textStyle: {
				// 		// 图例文字样式
				// 		color: "black",
				// 		fontSize: 12,
				// 		fontFamily: "微软雅黑"
				// 	},
				// 	itemWidth: 12, // 图例图形的宽度
				// 	itemHeight: 12, // 图例图形的高度
				// 	data: [{
				// 		name: "最大心率", // 图例文字内容
				// 		icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
				// 	}]
				// },
			],
			xAxis: {
				type: 'category',
				data: xarr,
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'grey',
					}
				}
			},
			yAxis: {
				scale: true,
				// max: 150,
				// min: 50,
				// interval: 20,
				// boundaryGap: [5, 5],
				axisTick: {
					show: false,
					length: 15,
					splitNumber: 10,
				},
				name: '单位：次/分',
				nameTextStyle: {
					padding: [0, 0, 10, 20]
				},
			},
			series: [{
					symbol: "none",
					name: '最大心率',
					data: arr,
					type: 'line',
					lineStyle: {
						color: '#329BFE',
					}
				},
				// {
				// 	name: '最小心率',
				// 	symbol: "none",
				// 	data: [50, 60, 70, 75, 85, 95],
				// 	type: 'line',
				// 	lineStyle: {
				// 		color: '#ffA438'
				// 	}
				// },
			]
		};
	},
	//血氧
	bloodOxygen_lineChart: function(arr1, xarr) {
		return {
			grid: {
				// x2: 60
				x2: 0,
			},
			color: ['#329BFE', '#FF9A21'],
			// legend: [
			// 	{
			// 	show: true,
			// 	top: "5%",
			// 	right: "10%",
			// 	textStyle: {
			// 		// 图例文字样式
			// 		color: "black",
			// 		fontSize: 12,
			// 		fontFamily: "微软雅黑"
			// 	},
			// 	itemWidth: 12, // 图例图形的宽度
			// 	itemHeight: 12, // 图例图形的高度
			// 	data: [{
			// 		name: "脉率", // 图例文字内容
			// 		icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
			// 	}]
			// },
			// {
			// 	top: "5%",
			// 	right: "5%",
			// 	textStyle: {
			// 		// 图例文字样式
			// 		color: "black",
			// 		fontSize: 12,
			// 		fontFamily: "微软雅黑"
			// 	},
			// 	itemWidth: 12, // 图例图形的宽度
			// 	itemHeight: 12, // 图例图形的高度
			// 	data: [{
			// 		name: "饱和度", // 图例文字内容
			// 		icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
			// 	}]
			// }],
			xAxis: {
				type: 'category',
				data: xarr,
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'grey',
					}
				}
			},
			yAxis: [{
					type: 'value',
					min: 0,
					max: 150,
					interval: 50,
					name: '饱和度',
					data: arr1,
					nameTextStyle: {
						padding: [10, 10, 10, -5]
					},
				}
				// ,
				// {
				// 	type: 'value',
				// 	min: 0,
				// 	max: 150,
				// 	interval: 50,
				// 	axisLabel: {
				// 		formatter: '{value} %',
				// 	},
				// 	symbol: "none",
				// 	data: [80, 40, 60, 95, 105, 95, 65],
				// }
			],
			series: [{
				symbol: "none",
				name: '饱和度',
				data: arr1,
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}]
			// , {
			// 	name: '脉率',
			// 	symbol: "none",
			// 	data: [50, 60, 70, 75, 85, 95],
			// 	type: 'line',
			// 	lineStyle: {
			// 		color: '#ffA438'
			// 	}
			// }]
		};
	},
	//尿酸
	uricAcid_lineChart: function() {
		return {
			color: ['#329BFE', '#FF9A21'],
			xAxis: {
				type: 'category',
				data: ['12.1', '12.2', '12.3', '12.4', '12.5', '12.6', '12:7'],
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'grey',
					}
				}
			},
			yAxis: [{
				type: 'value',
				min: 0,
				max: 150,
				interval: 50,
				name: '单位mmol/L',
				nameTextStyle: {
					padding: [0, 0, 10, 20]
				},
			}, ],
			series: [{
				symbol: "none",
				data: [50, 100, 90, 50, 120, 150],
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}]
		};
	},
	//血脂
	bloodFat_lineChart: function(arr1, xarr) {
		return {
			// legend: [{
			// 	bottom: "2%",
			// 	right: "15%",
			// 	textStyle: {
			// 		// 图例文字样式
			// 		color: "black",
			// 		fontSize: 12,
			// 		fontFamily: "微软雅黑"
			// 	},
			// 	itemWidth: 12, // 图例图形的宽度
			// 	itemHeight: 12, // 图例图形的高度
			// 	data: [{
			// 		name: "总胆固醇", // 图例文字内容
			// 		icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
			// 	}, {
			// 		name: "甘油三脂", // 图例文字内容
			// 		icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
			// 	}, {
			// 		name: "高密度脂蛋白", // 图例文字内容
			// 		icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
			// 	}, {
			// 		name: "低密度脂蛋白", // 图例文字内容
			// 		icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
			// 	}]
			// }],
			color: ['#329BFE', '#FF9A21', '#F72600', '#21FFF8'],
			xAxis: {
				type: 'category',
				data: xarr,
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'grey',
					}
				}
			},
			yAxis: [{
				type: 'value',
				min: 0,
				max: 6,
				interval: 1,
				name: '单位mmol/L',
				nameTextStyle: {
					padding: [0, 0, 10, 20]
				},
			}, ],
			series: [{
					symbol: "none",
					data: arr1,
					type: 'line',
					name: '总胆固醇',
					lineStyle: {
						color: '#329BFE',
					}
				},
				{
					symbol: "none",
					data: [],
					type: 'line',
					name: '甘油三脂',
					lineStyle: {
						color: '#FF9A21',
					}
				}, {
					symbol: "none",
					data: [],
					type: 'line',
					name: '高密度脂蛋白',
					lineStyle: {
						color: '#F72600',
					}
				}, {
					symbol: "none",
					data: [],
					type: 'line',
					name: '低密度脂蛋白',
					lineStyle: {
						color: '#21FFF8',
					}
				}
			]
		};
	},
	//血糖
	bloodSugar_lineChart: function(arr, xarr) {
		return {
			color: ['#329BFE', '#FF9A21'],
			xAxis: {
				type: 'category',
				data: xarr,
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'grey',
					}
				}
			},
			yAxis: [{
				type: 'value',
				min: 0,
				max: 150,
				interval: 50,
				name: '单位mmol/L',
				nameTextStyle: {
					padding: [0, 0, 10, 20]
				},
			}, ],
			series: [{
				symbol: "none",
				data: arr,
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}]
		};
	},
	//体温
	tiwen_lineChart: function(arr, xarr) {
		return {
			color: ['#329BFE', '#FF9A21'],
			xAxis: {
				type: 'category',
				data: xarr,
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'grey',
					}
				}
			},
			yAxis: [{
				type: 'value',
				min: 0,
				max: 150,
				interval: 50,
				name: '单位mmol/L',
				nameTextStyle: {
					padding: [0, 0, 10, 20]
				},
			}, ],
			series: [{
				symbol: "none",
				data: arr,
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}]
		};
	},
	//睡眠
	shuimian_lineChart: function(arr, xarr) {
		return {
			color: ['#329BFE', '#FF9A21'],
			xAxis: {
				type: 'category',
				data: xarr,
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'grey',
					}
				}
			},
			yAxis: [{
				type: 'value',
				min: 0,
				max: 150,
				interval: 50,
				name: '单位mmol/L',
				nameTextStyle: {
					padding: [0, 0, 10, 20]
				},
			}, ],
			series: [{
				symbol: "none",
				data: arr,
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}]
		};
	},
	//慢性病的进度表展示
	chronicAssessmentSchedule: function(n) {
		return {
			series: [{
				type: 'gauge',
				startAngle: 90,
				endAngle: -270,
				pointer: {
					show: false
				},
				progress: {
					show: true,
					overlap: false,
					roundCap: true,
					clip: false,
					itemStyle: {
						color: '#00D193',
					}
				},
				axisLine: {
					lineStyle: {
						width: 10,
					}
				},
				splitLine: {
					show: false,
					distance: 0,
					length: 10
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false,
					distance: 50
				},
				data: [{
					value: n,
					name: '系统评估中……',
					title: {
						offsetCenter: ['0%', '0%']
					},
					detail: {
						offsetCenter: ['0%', '40%']
					}
				}],
				title: {
					fontSize: 20
				},
				detail: {
					show: true,
					width: 50,
					height: 14,
					fontSize: 20,
					color: '#00D193',
					formatter: '{value}%'
				}
			}]
		};
	},
}
