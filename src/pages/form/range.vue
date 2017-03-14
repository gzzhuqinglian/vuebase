<style lang="less" scoped>
	.ableft{
		position: absolute;
		left: 0;
	}
	
	.range{
		position: relative;
		height: 2px;
		background-color: #CCCCCC;
		line-height: 0px;
		
		
		input[type="range"]::-webkit-slider-thumb{
		  -webkit-appearance: none;
		  width:20px;
		  height:20px;
		  background:#26A2FF;
		  border-radius:50%;
		  transition:.2s;        /* 點選放大時候的漸變時間 */
		}
		input[type="range"]{
		  -webkit-appearance: none;
		  overflow:hidden;     /* 限定範圍 */
		  outline : none;      /* 避免點選會有藍線或虛線 */
		  background:none;
		} 
	}
	
	
	
	.rang-con{
		width: 100%;margin-right: 20px;position: relative;
	}
	
	.range-active{
		display: inline-block;
		height: 2px;
		width:27%;
		background-color: #1199EE;
    	vertical-align: middle;
    	pointer-events: none;
	}
	
	.range-hide{
		position: absolute;
	    top: 50%;
	    -webkit-transform: translateY(-50%);
	    -moz-justify-transform: translateY(-50%);
	    -ms-justify-transform: translateY(-50%);
	    -o-justify-transform: translateY(-50%);
	    transform: translateY(-50%);
	    width:100%;
	}
	
</style>
<template>
	<div>
		<div class="header">
			<a class="icon_back ableft" v-on:click="goback"></a>
			<h3>range</h3>
		</div>
		<div class="padl10 padtb10 bgw">
			
			<div class="border-bottom padtb10">
				原始滑块
			</div>
			<div class="padtb10 border-bottom" >
				<input v-model='range' type="range" name="points" min="1" max="10" />
			</div>
			<div class="border-bottom padtb10">
				{{range}}
			</div>
			<div class="padtb10 border-bottom">
				组件滑块
			</div>
			<div class="padtb10 border-bottom" style="overflow: hidden;">
				<div class="range">
					<div class="rang-con">
						<span class="range-active" v-bind:style="{width:rangehide+'%'}"></span>
					</div>
					<input class="flex-item range-hide" v-model='rangehide' type="range" style="opacity: 1;z-index: 100000;" name="" id="" value="" />
				</div>
			</div>
			{{rangehide}}
		</div>     
        
   </div>
</template>
<script>
  

    export default {
		data() {
			return {
				check:true,
				checkbox:[],
				checkbox1:[],
				range:3,
				rangehide:3
			}
		},
		mounted:function(){
			
		},
		methods:{
			nextpage(){
				this.$router.push({ path: '/login' })
			},
			goback(){
				this.$router.go(-1)
			}
		},
		components: {
		    
		}
    }
</script>