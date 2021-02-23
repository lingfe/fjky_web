<template>
	<view class="content">
		<!-- 用户信息 -->
		<view class='userInfo'>
			<img src="../../static/touxiang.png" alt="">
			<view>
				<view style='font-family: PingFang-SC-Bold;color: #FFFFFF 100%;margin-bottom:.5rem;font-size: 1rem;'>
					用户姓名
				</view>
				<view style='font-size: .8rem;'>
					健康数据无任何异常情况
				</view>
			</view>
		</view>
		<!-- 健康数据 -->
		<view class='healthyData'>
			<view class='tab-lan'>
				<text :class="[c_this == 'stepNumber'?'tabActive':'tabNoActive']"  @click="getThisTab('stepNumber',10)">步数</text>
				<text :class="[c_this == 'bloodPressure'?'tabActive':'tabNoActive']"  @click="getThisTab('bloodPressure',20)">血压</text>
				<text :class="[c_this == 'heartRate'?'tabActive':'tabNoActive']"  @click="getThisTab('heartRate',30)">心率</text>
				<text :class="[c_this == 'bloodOxygen'?'tabActive':'tabNoActive']"  @click="getThisTab('bloodOxygen',40)">血氧</text>
				<text :class="[c_this == 'uricAcid'?'tabActive':'tabNoActive']"  @click="getThisTab('uricAcid',50)">尿酸</text>
				<text :class="[c_this == 'bloodFat'?'tabActive':'tabNoActive']"  @click="getThisTab('bloodFat',60)">血脂</text>
				<text :class="[c_this == 'bloodSugar'?'tabActive':'tabNoActive']"  @click="getThisTab('bloodSugar',70)">血糖</text>
				<text :class="[c_this == 'tiwen'?'tabActive':'tabNoActive']"  @click="getThisTab('tiwen',70)">体温</text>
				<text :class="[c_this == 'shuimian'?'tabActive':'tabNoActive']"  @click="getThisTab('shuimian',70)">睡眠</text>
			</view>
			<view id='chartBox' class='box-css'></view>
			<view style='border-top:1px solid #eeeeee;width: 111%;text-align: center;padding-top:.8rem;'>
				<text>查看更多</text>
			</view>
		</view>
		<!-- 其他模块tab -->
		<view class='otherTabFunction'>
			<view>
				<img src="../../static/indexImg/icon_jiankang@2x.png" alt="">
				<text>
					健康档案
				</text>
			</view>
			<view>
				<img src="../../static/indexImg/icon_baogao@2x.png" alt="">
				<text>
					健康报告
				</text>
			</view>
			<view>
				<img src="../../static/indexImg/icon_yujing@3x.png" alt="">
				<text>
					预警设置
				</text>
			</view>
			<view>
				<img src="../../static/indexImg/icon_naozhong@3x.png" alt="">
				<text>
					吃药提醒
				</text>
			</view>
			<view>
				<img src="../../static/indexImg/icon_anquan@3x.png" alt="">
				<text>
					安全中心
				</text>
			</view>
			<view>
				<img src="../../static/indexImg/icon_pinggu@3x.png" alt="">
				<text>
					评估中心
				</text>
			</view>
			<view>
				<img src="../../static/indexImg/icon_yiyuan@2x.png" alt="">
				<text>
					合作医院
				</text>
			</view>
			<view>
				<img src="../../static/indexImg/icon_yisheng@3x.png" alt="">
				<text>
					合作医生
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	import echarts from 'echarts';
	export default {
		data() {
			return {
				c_this:'stepNumber',
			}
		},
		methods: {
			getThisTab(n,m){
				var root = getComputedStyle(document.documentElement);
				document.documentElement.style.setProperty('--beforeW', m);
				var color = root.getPropertyValue('--beforeW').trim();
				// console.log(color);  // '100px'
				this.c_this = n;
				//请求相关的健康数据，渲染新的报表
				console.log(n);
				//不同类型的数据将渲染不同的报表格式
				//步数 血压 心率 血氧 尿酸 血脂 血糖
				//stepNumber bloodPressure heartRate bloodOxygen uricAcid bloodFat bloodSugar
				var option_stepNumber = {
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
								borderWidth: 1,
								// borderColor: '#464646',
								color: '#00D193',
							}
						},
						axisLine: {
							lineStyle: {
								width: 10
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
							value: 30,
							name: '步',
							title: {
								offsetCenter: ['0%', '20%']
							},
							detail: {
								offsetCenter: ['0%', '-20%']
							}
						}, ],
						title: {
							fontSize: 15
						},
						detail: {
							width: 50,
							height: 14,
							fontSize: 20,
							color: 'auto',
							borderColor: 'auto',
							borderRadius: 20,
							// borderWidth: 1,
							formatter: '{value}'
						}
					}]
				};
				var option_bloodPressure = {
				    series: [{
				        type: 'gauge',
				        startAngle: 180,
				        endAngle: 0,
				        min: 0,
				        max: 1,
				        splitNumber: 8,
						progress: { 
							show: false,
						},
				        axisLine: {
				            lineStyle: {
				                width: 6,
				                color: [
				                    [0.25, '#FF6E76'],
				                    [0.5, '#FDDD60'],
				                    [0.75, '#58D9F9'],
				                    [1, '#7CFFB2']
				                ]
				            }
				        },
				        pointer: {
				            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
				            length: '12%',
				            width: 20,
				            offsetCenter: [0, '-40%'],
				            itemStyle: {
				                color: 'red'
				            }
				        },
				        axisTick: {
				            length: 12,
				            lineStyle: {
				                color: 'auto',
				                width: 2
				            }
				        },
				        splitLine: {
				            length: 20,
				            lineStyle: {
				                color: 'auto',
				                width: 5
				            }
				        },
				        axisLabel: {
				            color: '#464646',
				            fontSize: 20,
				            distance: -60,
				            formatter: function (value) {
				                if (value === 0.875) {
				                    return '优';
				                }
				                else if (value === 0.625) {
				                    return '中';
				                }
				                else if (value === 0.375) {
				                    return '良';
				                }
				                else if (value === 0.125) {
				                    return '差';
				                }
				            }
				        },
				        title: {
				            offsetCenter: [0, '-20%'],
				            fontSize: 20
				        },
				        detail: {
				            fontSize: 18,
				            offsetCenter: [0, '0%'],
				            valueAnimation: true,
				            formatter: function (value) {
				                return Math.round(value * 100) + '分';
				            },
				            color: 'auto'
				        },
				        data: [{
				            value: 0.10,
				            name: '成绩评定'
				        }]
				    }]
				};
				if(n == 'stepNumber'){
					//渲染步数的数据和报表 得分环
					this.chartLine.setOption(option_stepNumber);
				}
				else if(n == 'bloodPressure'){
					//渲染血压的数据和报表  仪表盘
					this.chartLine.setOption(option_bloodPressure);
				}
				else if(n == 'heartRate'){
					//渲染心率的数据和报表 得分环
					
				}
				else if(n=='bloodOxygen'){
					//渲染血氧的数据和报表  仪表盘
					
				}
				else if(n== 'uricAcid'){
					//渲染尿酸的数据和报表 仪表盘
					
				}
				else if(n =='bloodFat'){
					//渲染血脂的数据和报表 仪表盘
					
				}
				else if( n == 'bloodSugar'){ 
					//渲染血糖的数据和报表 仪表盘
					
				}
				else if( n == 'tiwen'){
					//渲染血糖的数据和报表 仪表盘
					
				}
				else if( n == 'shuimian'){
					//渲染血糖的数据和报表 仪表盘
					
				}
				
				
			}, 
			appToast(){
				//安卓对象
				appNative.toast();
			}
		},
		mounted(){
			let echarts = require('echarts');
			this.chartLine = echarts.init(document.getElementById('chartBox'));
			var option_stepNumber = {
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
							borderWidth: 1,
							// borderColor: '#464646',
							color: '#00D193',
						}
					},
					axisLine: {
						lineStyle: {
							width: 10
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
						value: 30,
						name: '步',
						title: {
							offsetCenter: ['0%', '20%']
						},
						detail: {
							offsetCenter: ['0%', '-20%']
						}
					}, ],
					title: {
						fontSize: 15
					},
					detail: {
						width: 50,
						height: 14,
						fontSize: 20,
						color: 'auto',
						borderColor: 'auto',
						borderRadius: 20,
						// borderWidth: 1,
						formatter: '{value}'
					}
				}]
			};
			var option_bloodPressure = {
			    series: [{
			        type: 'gauge',
			        startAngle: 180,
			        endAngle: 0,
			        min: 0,
			        max: 1,
			        splitNumber: 8,
			        axisLine: {
			            lineStyle: {
			                width: 6,
			                color: [
			                    [0.25, '#FF6E76'],
			                    [0.5, '#FDDD60'],
			                    [0.75, '#58D9F9'],
			                    [1, '#7CFFB2']
			                ]
			            }
			        },
			        pointer: {
			            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
			            length: '12%',
			            width: 20,
			            offsetCenter: [0, '-60%'],
			            itemStyle: {
			                color: 'auto'
			            }
			        },
			        axisTick: {
			            length: 12,
			            lineStyle: {
			                color: 'auto',
			                width: 2
			            }
			        },
			        splitLine: {
			            length: 20,
			            lineStyle: {
			                color: 'auto',
			                width: 5
			            }
			        },
			        axisLabel: {
			            color: '#464646',
			            fontSize: 20,
			            distance: -60,
			            formatter: function (value) {
			                if (value === 0.875) {
			                    return '优';
			                }
			                else if (value === 0.625) {
			                    return '中';
			                }
			                else if (value === 0.375) {
			                    return '良';
			                }
			                else if (value === 0.125) {
			                    return '差';
			                }
			            }
			        },
			        title: {
			            offsetCenter: [0, '-20%'],
			            fontSize: 30
			        },
			        detail: {
			            fontSize: 50,
			            offsetCenter: [0, '0%'],
			            valueAnimation: true,
			            formatter: function (value) {
			                return Math.round(value * 100) + '分';
			            },
			            color: 'auto'
			        },
			        data: [{
			            value: 0.70,
			            name: '成绩评定'
			        }]
			    }]
			};
			this.chartLine.setOption(option_stepNumber);
		},
	}
</script>
<style>
	.otherTabFunction{
		position: relative;
		top:-2rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 10px;
	}
	.otherTabFunction img{
		width: 3rem;
	}
	.otherTabFunction view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	:root{
		--beforeW:0;
	}
	.tabActive {
		color: #222222;
		/* color:red; */
		/* text-decoration: underline; */
		/* border: 1px solid red; */
	}
	.tabNoActive{
		
	}
	.tabActive:before{
		color:red;
		content: "";
		display: block;
		position: absolute;
		bottom: -1px;
		left: --beforeW;
		/* left:10px; */
		width: 9%;
 		height: 4px;
		border-radius: 20%;
		background: #00D193;
	}
	
	.tab-lan {
		/* border: 1px solid blue; */
		width: 100%;
		/* margin: .5rem; */
		color: #666666;
		font-weight: 600;
		padding-top: .3rem;
		position: relative;
		left: 0;
		overflow: scroll;
		white-space: nowrap;
	}

	.tab-lan text {
		width: 5rem;
		display: inline-block;
		/* border: 1px solid red; */
		/* text-align: center; */
		padding-bottom: .2rem;
	}

	.text:after {
		content: '';
		display: block;
		margin-top: -5px;
		border-bottom: 2px solid grey;
	}

	.healthyData {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: .5rem;
		background: #FFFFFF;
		box-shadow: 0px 2px 10px 0px rgba(83, 85, 112, 0.36);
		padding: 1rem;
		position: relative;
		top: -3rem;
	}

	.content {
		font-size: .9rem;
	}

	.userInfo {
		width: 100%;
		display: flex;
		background-color: #00D193;
		color: white;
		align-items: center;
		padding-bottom: 3rem;
	}

	.userInfo img {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin: 1rem;
	}

	.box-css {
		/* border: 1px solid red; */
		width: 80%;
		height: 450upx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.otherTabFunction{
		/* border: 1px solid red; */
		width: 90%;
		
		
	}
</style>
