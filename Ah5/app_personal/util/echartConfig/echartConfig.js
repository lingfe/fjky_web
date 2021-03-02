var config = {};
export default config = {
	//仪表盘图系列-单数据渲染
	//步数
	stepNumber: function(n) {
		if (n == '未测量') {
			n = 0;
		}
		return {
			series: [{
				type: 'gauge',
				startAngle: 90,
				endAngle: -270,
				pointer: {
					show: false,
				},
				max: 10000,
				min: 0,
				progress: {
					show: true,
					overlap: false,
					roundCap: true,
					clip: false,
					itemStyle: {
						color: '#00D193',
					},

				},
				itemStyle: {
					shadowColor: 'red',
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
					name: '步',
					title: {
						offsetCenter: ['0%', '35%']
					},
					detail: {
						offsetCenter: ['0%', '-10%']
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
					borderRadius: 20,
					formatter: '{value}'
				}
			}]
		};
	},
	//血压
	bloodPressure: function(n) {
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
						// return Math.round(value * 100) + '分'; 
						return value + '/85';
					},
					color: 'black',
				},
				data: [{
					value: n,
					name: '次/分'
				}]
			}]
		};
	},
	//心率
	heartRate: function(n) {
		if (n == '未测量') {
			n = 0;
		}
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
					name: '次/分',
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
					formatter: '{value}bmp'
				}
			}]
		};
	},
	//血氧
	bloodOxygen: function(n) {
		if (n == '未测量') {
			n = 0;
		}
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
	},
	//尿酸
	uricAcid: function(n) {
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
	},
	//血脂
	bloodFat: function(n) {
		if (n == '未测量') {
			n = 0;
		}
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
					offsetCenter: ['-30%', '-30%'],
					valueAnimation: true,
					formatter: function(value) {
						return value;
					},
					color: 'black'
				},
				data: [{
					value: n,
					name: 'mmol/L'
				}]
			}]
		};
	},
	//血糖
	bloodSugar: function(n) {
		if (n == '未测量') {
			n = 0;
		}
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
						return value + `mmol/L`;
					},
					color: 'black',
				},
				data: [{
					value: n,
					name: '总胆固醇',
				}]
			}]
		};
	},
	//体温
	tiwen: function(n) {
		if (n == '未测量') {
			n = 0;
		}
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
	},
	//睡眠
	shuimian: function(n) {
		if (n == '未测量') {
			n = 0;
		}
		return {
			series: [{
				type: 'gauge',
				startAngle: 90,
				endAngle: -270,
				pointer: {
					show: false,
				},
				max: 9,
				min: 0,
				progress: {
					show: true,
					overlap: false,
					roundCap: true,
					clip: false,
					itemStyle: {
						color: '#BC3FFF',
					},
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
					distance: 160
				},
				data: [{
					value: n,
					name: 'h',
					title: {
						offsetCenter: ['40%', '0%']
					},
					detail: {
						offsetCenter: ['-5%', '-5%']
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
					borderRadius: 20,
					formatter: '{value}'
				}
			}]
		};
	},
	//折线图系列-多条数据渲染
	//步数
	stepNumber_lineChart: function() {
		return {
			xAxis: {
				type: 'category',
				data: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
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
				data: [2, 4, 6, 10, 20, 4],
				type: 'line',
			}]
		};
	},
	//血压
	bloodPressure_lineChart: function() {
		return {
			color: ['#329BFE', '#FF9A21'],
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
			yAxis: {
				scale: true,
				max: 20,
				min: 0,
				splitNumber: 5,
				boundaryGap: [5, 5],
				axisTick: {
					show: false,
					length: 15,
					splitNumber: 10,
				},
				name: '单位：次/分',
				nameTextStyle: {
					padding: [0, 0, 10, 35]
				},
			},
			series: [{
				symbol: "none",
				name: '舒张压',
				data: [18, 4, 6, 10, 2, 4],
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}, {
				name: '收缩压',
				symbol: "none",
				data: [16, 20, 9, 14, 20, 8],
				type: 'line',
				lineStyle: {
					color: '#ffA438'
				}
			}]
		};
	},
	//心率
	heartRate_lineChart: function() {
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
					name: "最大心率", // 图例文字内容
					icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
				}]
			}],
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
			yAxis: {
				scale: true,
				max: 150,
				min: 50,
				splitNumber: 5,
				boundaryGap: [5, 5],
				axisTick: {
					show: false,
					length: 15,
					splitNumber: 10,
				},
				name: '单位：次/分',
				nameTextStyle: {
					padding: [0, 0, 10, 35]
				},
			},
			series: [{
				symbol: "none",
				name: '最大心率',
				data: [80, 100, 90, 110, 120, 140],
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}, {
				name: '最小心率',
				symbol: "none",
				data: [50, 60, 70, 75, 85, 95],
				type: 'line',
				lineStyle: {
					color: '#ffA438'
				}
			}]
		};
	},
	//血氧
	bloodOxygen_lineChart: function() {
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
					name: "脉率", // 图例文字内容
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
					name: "饱和度", // 图例文字内容
					icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
				}]
			}],
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
					name: '饱和度',
					data: [70, 100, 90, 130, 120, 180, 100],
				},
				{
					type: 'value',
					min: 0,
					max: 150,
					interval: 50,
					axisLabel: {
						formatter: '{value} %',
					},
					symbol: "none",
					data: [80, 40, 60, 95, 105, 95, 65],
				}
			],
			// {
			// 	scale: true,
			// 	max: 150,
			// 	min: 50,
			// 	splitNumber: 5,
			// 	boundaryGap: [5, 5],
			// 	axisTick: {
			// 		show: false,
			// 		length: 15,
			// 		splitNumber: 10,
			// 	},
			// 	name: '单位：次/分',
			// 	nameTextStyle: {
			// 		padding: [0, 0, 10, 35]
			// 	}, 
			// },
			series: [{
				symbol: "none",
				name: '饱和度',
				data: [80, 100, 90, 110, 120, 140],
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}, {
				name: '脉率',
				symbol: "none",
				data: [50, 60, 70, 75, 85, 95],
				type: 'line',
				lineStyle: {
					color: '#ffA438'
				}
			}]
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
	bloodFat_lineChart: function() {
		return {
			legend: [{
				bottom: "10%",
				right: "5%",
				textStyle: {
					// 图例文字样式
					color: "black",
					fontSize: 12,
					fontFamily: "微软雅黑"
				},
				itemWidth: 12, // 图例图形的宽度
				itemHeight: 12, // 图例图形的高度
				data: [{
					name: "总胆固醇", // 图例文字内容
					icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
				}, {
					name: "甘油三脂", // 图例文字内容
					icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
				}, {
					name: "高密度脂蛋白", // 图例文字内容
					icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
				}, {
					name: "低密度脂蛋白", // 图例文字内容
					icon: 'rect', // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
				}]
			}],
			color: ['#329BFE', '#FF9A21', '#F72600', '#21FFF8'],
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
				max: 6,
				interval: 1,
				name: '单位mmol/L',
			}, ],
			series: [{
					symbol: "none",
					data: [3.1, 1.4, 1.3, 1.5, 3.9, 3.5],
					type: 'line',
					name: '总胆固醇',
					lineStyle: {
						color: '#329BFE',
					}
				},
				{
					symbol: "none",
					data: [2.3, 2, 2.4, 2.1, 2.8, 2.1],
					type: 'line',
					name: '甘油三脂',
					lineStyle: {
						color: '#FF9A21',
					}
				}, {
					symbol: "none",
					data: [3.4, 3.1, 3.3, 3.1, 3.2, 3.6],
					type: 'line',
					name: '高密度脂蛋白',
					lineStyle: {
						color: '#F72600',
					}
				}, {
					symbol: "none",
					data: [5.1, 5.6, 5.2, 5.3, 5.2, 5.8],
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
	bloodSugar_lineChart: function() {
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
			}, ],
			series: [{
				symbol: "none",
				data: [50, 10, 90, 50, 120, 150],
				type: 'line',
				lineStyle: {
					color: '#329BFE',
				}
			}]
		};
	},
	//体温
	tiwen_lineChart: function() {
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
	//睡眠
	shuimian_lineChart: function() {
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
			}, ],
			series: [{
				symbol: "none",
				data: [50, 10, 90, 50, 10, 50],
				type: 'line',
				lineStyle: {
					color: '#329BFE', 
				}
			}]
		};

	}
}
