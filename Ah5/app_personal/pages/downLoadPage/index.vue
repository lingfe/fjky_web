<template>
	<view class='pageDownload'>
		<img src="../../static/logo.png" alt="">
		<text class='type-name'>梵净康养乐园APPv1.0</text>
		<a href="http://47.106.198.137:81/uploadFiles/publics/fjkyly_v1.0.apk">下载</a>
	</view>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		methods:{
			envriment_(){
				//平台、设备和操作系统 
				  var system = {
				   win: false, 
				   mac: false, 
				   xll: false, 
				   ipad: false
				  }; 
				  //检测平台 
				  var p = navigator.platform; 
				  system.win = p.indexOf("Win") == 0; 
				  system.mac = p.indexOf("Mac") == 0; 
				  system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 
				  system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false; 
				  //跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面 
				  if (system.win || system.mac || system.xll || system.ipad) { 
				   alert("在PC端上打开的");
				  } else { 
				   var ua = navigator.userAgent.toLowerCase(); 
				   if(ua.match(/MicroMessenger/i)=="micromessenger") { 
				    alert("在手机端微信上打开的"); 
				   } else { 
				    alert("在手机上非微信上打开的");
				   } 
				  }
			}
		},
		mounted() {
			envriment_();
		}
	}
</script>
<style>
	a{
		margin-top: 2rem;
		width: 80%;
		padding: .5rem;
		text-align: center;
		background-color: #05c261;
		color: white;
		text-decoration:none;
		border-radius: .3rem;
	}
	img{
		width: 5rem;
		padding-top: 2rem;
	}
	.type-name{
		font-size: 1rem;
		font-weight: 700;
		color: #000000;
		padding-top: .5rem;
	}
	.pageDownload{
		position: relative;
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: center;
	}
</style>
