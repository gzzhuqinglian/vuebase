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
			<h3>bubble</h3>
		</div>
		
		<div class="padtb10">
			<div v-on:click='showloadbubble' class="ct_btn">
					<a href="javscript:void(0)">冒泡</a>
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
			showloadbubble(){
				this.$root.bubbletext='泡泡的我的测试'
				this.$root.bubble=true;
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