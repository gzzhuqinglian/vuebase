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
			<h3>pop</h3>
		</div>
		
		<div v-on:click='showloaddialog' class="padtb10">
			<div  class="ct_btn">
					<a href="javscript:void(0)">弹出框</a>
			</div>
		</div>
		
		   
        
   </div>
</template>
<script>
  

    export default {
		data() {
			return {
				
			}
		},
		mounted:function(){
			
		},
		methods:{
			showloaddialog(){
				this.$root.dia.title='这是我的标题,哈哈哈'
				this.$root.dialog=true;
				this.$root.suredo=function(){
					console.log('你点击了确定按钮')
				}
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