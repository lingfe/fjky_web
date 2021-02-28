var config = {};
export default config = {
	//步数
	stepNumber: {
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
				value: 3000,
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
	},
	//血压
	bloodPressure: {
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
				show:false,
				length: 12,
				lineStyle: {
					color: 'auto',
					width: 2
				}
			},
			splitLine: {
				show:false,
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
				value: 125,
				name: '次/分'
			}]
		}]
	},
	//心率
	heartRate: {
		series: [{
			type: 'gauge',
			startAngle: 90,
			endAngle: -270,
			pointer: {
				show: false
			},
			min:0,
			max:100,
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
				value: 68,
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
				color:'grey',
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
	},
	//血氧
	bloodOxygen: {
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
				show:false,
				length: 12,
				lineStyle: {
					color: 'auto',
					width: 2
				}
			},
			splitLine: {
				show:false,
				length: 20,
				lineStyle: {
					color: 'auto',
					width: 5
				}
			},
			axisLabel: {
				show:false,
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
				color:'grey',
			},
			detail: {
				fontSize: 25,
				offsetCenter: [0, '-30%'],
				valueAnimation: true,
				formatter: function(value) {
					// return Math.round(value * 100) + '分';
					return value+'%';
				},
				color: 'black',
			},
			data: [{
				value: 99,
				name: '饱和度'
			}]
		}]
	},
	//尿酸
	uricAcid: {
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
						[1,'#F72600'],
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
				show:false,
				length: 12,
				lineStyle: {
					color: 'auto',
					width: 2
				}
			},
			splitLine: {
				show:false,
				length: 20,
				lineStyle: {
					color: 'auto',
					width: 5
				}
			},
			axisLabel: {
				show:false,
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
				color:'grey',
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
				value: 123,
				name: 'mmol/L',
			}]
		}]
	},
	//血脂
	bloodFat: {
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
				show:true, 
				lineStyle: { 
					width: 13,
					color: [
					[0.33, '#FF9A21'],
					[0.66, '#00D193'],
					[1,'#F72600'],
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
				show:false,
				length: 12,
				lineStyle: {
					color: 'auto',
					width: 2
				}
			},
			splitLine: {
				show:false,
				length: 20,
				lineStyle: {
					color: 'auto',
					width: 5
				}
			},
			axisLabel: {
				show:false,
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
				color:'grey',
			},
			detail: {
				fontSize: 25,
				offsetCenter: ['-30%','-30%'],
				valueAnimation: true,
				formatter: function(value) {
					return value;
				},
				color: 'black'
			},
			data: [{
				value: 2.9,
				name: 'mmol/L'
			}]
		}]
	},
	//血糖
	bloodSugar: {
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
				show:true,
				lineStyle: {
					width: 13,
					color: [
						[0.33, '#FF9A21'],
						[0.66, '#00D193'],
						[1,'#F72600'],
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
			axisTick:{
				show:false,
				length: 12,
				lineStyle: {
					color: 'auto',
					width: 2
				}
			},
			splitLine: {
				show:false,
				length: 20,
				lineStyle: {
					color: 'auto',
					width: 5
				}
			},
			axisLabel: {
				show:false,
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
				color:'grey',
			},
			detail: {
				fontSize: 25,
				offsetCenter: [0, '-20%'],
				valueAnimation: true,
				formatter: function(value) {
					// return Math.round(value * 100) + '分';
					return value+`mmol/L`;
				},
				color: 'black',
			},
			data: [{
				value: 2.9,
				name: '总胆固醇',
			}]
		}]
	},
	//体温
	tiwen: {
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
					[1,'#F72600'],
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
				show:false,
				length: 12,
				lineStyle: {
					color: 'auto',
					width: 2
				}
			},
			splitLine: {
				show:false,
				length: 20,
				lineStyle: {
					color: 'auto',
					width: 5
				}
			},
			axisLabel: {
				show:false,
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
				color:'grey',
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
				value: 37,
				name: '°C'
			}]
		}]
	},
	//睡眠
	shuimian: {
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
				value: 7.5,
				name: 'h',
				title: {
					offsetCenter: ['25%', '0%']
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
		},
		
	//折线图系列
	stepNumber_lineChart:{
		    xAxis: {
		        type: 'category',
		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [{
		        data: [150, 230, 224, 218, 135, 147, 260],
		        type: 'line'
		    }]
	}
}
