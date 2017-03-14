
<style type="text/css" lang="less" scoped>
	/*默认的加载*/
	.spinner {
	  width: 150px;
	  text-align: center;
	}
 
	.spinner > div {
	  width: 30px;
	  height: 30px;
	  background-color: #67CF22;
	 
	  border-radius: 100%;
	  display: inline-block;
	  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
	  animation: bouncedelay 1.4s infinite ease-in-out;
	  /* Prevent first frame from flickering when animation starts */
	  -webkit-animation-fill-mode: both;
	  animation-fill-mode: both;
	}
 
	.spinner .bounce1 {
	  -webkit-animation-delay: -0.32s;
	  animation-delay: -0.32s;
	}
	 
	.spinner .bounce2 {
	  -webkit-animation-delay: -0.16s;
	  animation-delay: -0.16s;
	}
 
	@-webkit-keyframes bouncedelay {
	  0%, 80%, 100% { -webkit-transform: scale(0.0) }
	  40% { -webkit-transform: scale(1.0) }
	}
	 
	@keyframes bouncedelay {
	  0%, 80%, 100% {
	    transform: scale(0.0);
	    -webkit-transform: scale(0.0);
	  } 40% {
	    transform: scale(1.0);
	    -webkit-transform: scale(1.0);
	  }
	}
	
	
	
	.container{
		position: fixed;
		top:0;
		bottom:0;
		left: 0;
		right: 0;
		background-color: rgba(0,0,0,0.0);
		
		.bubble{
			height:30px ;
			min-width: 160px;
			box-shadow:0 0 6px #666;
			background:rgba(0,0,0,.75);
			color: #FFFFFF;
		}
		.dialog{
			
			width:70%;
			background-color: #FFFFFF;
    		text-align: center;
    		border-radius: 3px;
    		overflow: hidden;
			.title{
				font-size: 18px;
				color: #000;
				padding: 18px 10px 5px;
				
			}
			.body{
				padding: 0 10px 5px;
				color: #999999;
				font-size: 15px;
				line-height: 22px;
			}
			.foot{
				padding:0 10px;
				border-top: 1px solid #e5e5e5;
				color:#666666;
				line-height: 40px;
				font-size: 18px;
			}
		}
		
	}
</style>
<template>
	<div>
		<div v-show="loading" class="container flex flex-align-items-center flex-justify-content">
			   <div style="max-width: 150px;max-height: 150px;overflow: hidden;" class="flex-align-items-center flex-justify-content">
			   	 <slot name='loading'>
			   	 	<div class="spinner">
					  <div class="bounce1"></div>
					  <div class="bounce2"></div>
					  <div class="bounce3"></div>
					</div
			   	</slot>
			   </div>
		</div>
		
		<div v-show="bubble" class="container flex flex-align-items-center flex-justify-content">
			   <div  class="flex-align-items-center flex-justify-content">
			   	 <slot name='bubble'>
			   	 	<div class="bubble  padrl10 text-align-center" style="border-radius: 4px;">
			   	 		{{bubbletext}}
			   	 	</div>
			   	</slot>
			   </div>
		</div>
		
		
		<div style="background: rgba(0, 0, 0, 0.6);" v-show="dialog" class="container flex flex-align-items-center flex-justify-content">
			<div class="dialog">
				<div v-show='dia.title?true:false' class="title ">
					{{dia.title}}
				</div>
				<div class="body">
					<slot name='dia'>
						<div>{{dia.content}}</div>
					</slot>			
				</div>
				<div class="foot flex">
					<a v-show='dia.showcancel' style="color:#000"  v-on:click='close' class="border-right flex-item padding-top-bottom" href="javascript:void(0)">取消</a>
					<a style="color: #1199EE;" v-on:click='sure' class="flex-item  padding-top-bottom" href="javascript:void(0)">确定</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
        props: {
           loading:{
           	 default:false
           },
           dialog:{
           	default:false
           },
           bubble:{
           	default:false
           },
           bubbletext:{
           	default:'泡泡测试'
           },
           dia:{
           	default:()=>{
           	 return	{
           		content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
           		title:'这是我的标题',
           		showcancel:true
           		}
           	}
           }
        },
        watch:{
        	bubble:function(val){
        		console.log('ddddd')
        		if(val==true){
        			var that=this;
        			window.setTimeout(function(){
        				that.$root.bubble=false;
        			},2000)
        		}
        	}
        },
        methods:{
        	close:function(){
        		this.$root.dialog=false;
        		
        	},
        	sure:function(){
        		this.$root.dialog=false;
        		 this.$emit('diasure')
        	}
        	
        }
    }
</script>