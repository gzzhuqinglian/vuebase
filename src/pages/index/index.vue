<style lang="less" scoped>
	.btnText {
	    height: 44px;
	    line-height: 44px;
	    padding: 0 15px;
	    color: #fff;
	}
	.spho{
		width:100%;
	}
	.top_title{
		padding: 16px 20px 1px;
        text-align: left;
        span{
        	float:right;
        	color:#888;
        }
	}
	.fix_con{
		display: flex;
		background-color:#fff;
		border: solid #e5e5e5;
   		border-width: 1px 0;
		li{
			flex: 1;
			text-align:center;

		}
		li:before{
				width:50px;
				height:50px;
				content: "";
			    display: block;
			    margin: auto;
				background: url('./background.png') no-repeat;
				background-size: cover;
			} 
		li:nth-child(2){
			border-left:1px solid #e5e5e5;
			border-right:1px solid #e5e5e5;
		}
		li:nth-child(2):before {
		    background-position: -50px 0;
		}
		li:nth-child(3):before {
		    background-position: -100px 0;
		}
	}
	.fix_bot{
		padding:20px;
	}
	.btn{
		display:block;
		background: #e52f17;
	    border-radius: 5px;
	    height: 44px;
	    line-height: 44px;
	    text-align:center;
	    color: #ffffff;
        font-size: 16px;
        margin: 20px 0;
	}
	.cell_btn{
		background: none;
    	border: 1px solid #cacaca;
    	color:#666
	}
	.ligter{
		color:#888;
	}
</style>
<template>
	<div>
		<v-header title='股票开户'>
			<a href="#" class='btnText' slot='right'>设置</a>
		</v-header>
		<div>
		 	<img :src="s_pho" alt="" class="spho">
		<div>
		<div class="top_title">
        	<span>开户时间：每天8:30-22:30</span>开户需准备
        </div>
        <div class="fix_con">
        	<li>二代身份证</li>
        	<li>银行借记卡</li>
        	<li>WIFI/4G/3G</li>
        </div>

        <div class="fix_bot">
        	<a class="btn" @click="nextpage">立即开户</a>
        	<a class="btn cell_btn" @click="nextpage">继续开户</a>   
        </div>

        <div class="fix_bot">
        	<div class="ligter">营业部：XXX营业部</div>
        	<div class="ligter">客户经理：XXX</div>
        </div>


		
	</div>
</template>
<script>
  

  import  s_pho from './appAd_2.png'
    export default {
		data() {
			return {
				s_pho:s_pho,
	
			}
		},
		methods:{
			nextpage(){
				this.$router.push({ path: '/login' })
			}
		},
		components: {
		    
		}
    }
</script>