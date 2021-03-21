<template>
	<view class="content" style='border-top:1px solid #eeeeee;'>
		<view class='items' v-for='(item,index) in items'>
			<view class='item' @click="goto.goto(item.url_goto)"> 
				<view>
					<img class='title_img' :src="item.title_img" alt="">
				</view>
				<view class='text_type'>
					<text class='title_type'>{{item.title_text}}</text>
					<text class='title_type_2'>{{item.subTitle_text}}</text>
				</view>
				<view style='width: 20%;text-align: right;'>
					<img class='arrow' src="../../static/arrow-right-gray.png" alt="">
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import goto from '../../util/tool/tool.js';
	import app from '../../util/tool/andoridFun.js';
	import http from '../../util/tool/http.js';
	export default {
		data(){
			return{
				goto:goto,
				items:[
					{
						title_img:'../../static/indexImg/a.png',
						title_text:'慢性病服务体验服务评估',
						subTitle_text:'您还没有评估哦，赶紧去评估吧',
						url_goto:'../evaluationCenter-evaluations/chronicDisease/index',
					},
					{
						title_img:'../../static/indexImg/b.png',
						title_text:'心理健康评估',
						subTitle_text:'您还没有评估哦，赶紧去评估吧',
						url_goto:'../evaluationCenter-evaluations/mentalHealth/index',
					},
					{
						title_img:'../../static/indexImg/c.png',
						title_text:'自理能力评估',
						subTitle_text:'您还没有评估哦，赶紧去评估吧',
						url_goto:'../evaluationCenter-evaluations/selfCareAbility/index',
					},
					{
						title_img:'../../static/indexImg/d.png',
						title_text:'认知能力评估',
						subTitle_text:'您还没有评估哦，赶紧去评估吧',
						url_goto:'../evaluationCenter-evaluations/cognitiveAbility/index',
					},
				]
			}
		},
		onShow(){ 
			this.getData();
		},
		methods:{
			getData(){
				let that = this;
				//获取评估结果的数据
				http.Post('sys_fkcy/eva_res/getUserEvaRes',{'user_id':appToast.appUserId()},(res) => {
					console.log(res);
					//慢性病 心理健康 自理能力 认知能力
					if(res.data.eva_mxb_res!=undefined){
						that.items[0].subTitle_text = res.data.eva_mxb_res;
						that.items[0].url_goto = that.items[0].url_goto+'?result='+res.data.eva_mxb_res;
					}
					if(res.data.eva_xljk_res  !=undefined){
						that.items[1].subTitle_text = res.data.eva_xljk_res;
						that.items[1].url_goto = that.items[1].url_goto+'?result='+res.data.eva_xljk_res;
					}
					if(res.data.eva_zlnl_res  !=undefined){
						that.items[2].subTitle_text = res.data.eva_zlnl_res;
						that.items[2].url_goto = that.items[2].url_goto+'?result='+res.data.eva_zlnl_res;
					}
					if(res.data.eva_rznl_res !=undefined){
						that.items[3].subTitle_text = res.data.eva_rznl_res;
						that.items[3].url_goto = that.items[3].url_goto+'?result='+res.data.eva_rznl_res;
					}
				})
			}
		}
	}
</script>
<style>
	@import url("../../util/tool/common.css");
	.title_type_2{
		color:gray;
		font-size: .7rem;
	}
	.item{
		border: 1px solid white;
		font-size: .8rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-shadow: 0 0 .8rem #dddddd;
		margin-top: 1rem;
		width: 92%;
		margin-left: 4%;
		border-radius: .5rem;
	}
	.title_img{
		width: 2rem;
		padding: .8rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	.arrow{
		width: 2rem;
	}
	.text_type{
		display: flex;
		flex-direction: column;
		width: 60%;
	}
	.title_type{
		color: black;
		font-weight: 600;
		padding-bottom: .5rem;
		font-size: .8rem;
	}
</style>