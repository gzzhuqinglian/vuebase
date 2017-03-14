<style lang="less" scoped>
	.ableft{
		position: absolute;
		left: 0;
	}
	
	
	
	
	
	
	
</style>
<template>
	<div>
		<div class="header">
			<a class="icon_back ableft" v-on:click="goback"></a>
			<h3>loading</h3>
		</div>
		<div class="bgw border-bottom border-top padrl10">
			<div v-for='item in items' class="border-bottom padtb10">
				{{item}}
			</div>
		</div>
		<div class="padtb10">
			<div v-on:click='showloading' class="ct_btn">
					<a href="javscript:void(0)">加载</a>
			</div>
		</div>
		
		   
        
   </div>
</template>
<script>
  

    export default {
		data() {
			return {
				flag:9,
				items:[
				'商品1','商品2','商品3','商品4','商品5','商品6','商品7','商品8'
				
				]
			}
		},
		mounted:function(){
			
		},
		methods:{
			showloading(){
				this.$root.loading=true;
				var that=this;
				setTimeout(function(){
					that.$root.loading=false;
					for(var i=0;i<5;i++){
						that.items.push('商品'+that.flag++);
					}
					
				},2000)
			},
			
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