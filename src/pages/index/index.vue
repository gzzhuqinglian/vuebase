<style lang="less" scoped>
	
</style>
<template>
	<div>
		<div class="header">
			<h3>个人组件</h3>
		</div>
		<div class="text-align-center padtb10">
			<h2>form componts</h2>
		</div>
		<div class="border-top border-bottom padl10" style="background-color: #FFFFFF;">
			<div v-on:click="topage('switch')" class="border-bottom padtb10 flex padr10 flex-align-items-center">
				<div class="flex-item">switch</div>
				<div class="arrow"></div>
			</div>
			<div v-on:click='topage("radio")' class="border-bottom padtb10 flex padr10 flex-align-items-center">
				<div class="flex-item">
					单选
				</div>
				<div class="arrow">
					
				</div>
			</div>
			<div v-on:click='topage("checkbox")' class="padtb10 border-bottom flex padr10 flex-align-items-center">
				<div class="flex-item">
					复选
				</div>
				<div class="arrow">
					
				</div>
			</div>
			<div v-on:click='topage("range")' class="padtb10 padtb10 flex padr10 flex-align-items-center">
				<div class="flex-item">
					滑块
				</div>
				<div class="arrow">
					
				</div>
			</div>
		</div>
		
		
		<div class="padtb10 text-align-center">
			<h3>弹出</h3>
		</div>
		<div class="border-bottom border-top padl10 bgw">
			<div v-on:click='topage("loading")' class="border-bottom padrl10 padtb10 flex flex-align-items-center">
				<div class="flex-item">
					加载
				</div>
				<div class="arrow">
					
				</div>
			</div>
			<div v-on:click='topage("bubble")' class="border-bottom padtb10 flex padrl10 flex-align-items-center">
				   <div class="flex-item">
				   		泡泡
				   </div>
				   <div class="arrow">
				   	
				   </div>
			</div>
			<div v-on:click='topage("pop")' class="padtb10 flex padrl10 flex-align-items-center">
				   <div class="flex-item">
				   		弹出
				   </div>
				   <div class="arrow">
				   	
				   </div>
			</div>
			
		</div>
		
		<div v-on:click='topage("transition")' class="padrl10 bgw border-bottom flex flex-align-items-center border-top padtb10 text-align-center mt30">
			<div class="flex-item">
				动画效果展示
			</div>
			<div class="arrow">
				
			</div>
		</div>
		<div class="text-align-center padtb10">
			<h3>导航</h3>
		</div>
		<div class="border-top border-top bgw padl10 ">
			<div v-on:click='topage("navbar")' class="padr10 flex flex-align-items-center border-bottom padtb10">
				<div class="flex-item">
					navbar
				</div>
				<div class="arrow">
					
				</div>
			</div>
			<div v-on:click='topage("tabbar")' class="padr10 flex flex-align-items-center border-bottom padtb10">
				<div class="flex-item">
					tabbar
				</div>
				<div class="arrow">
					
				</div>
			</div>
		</div>
		
		<div class="padtb10 text-align-center">
			<h3>搜索相关</h3>
		</div>
		<div class="border-bottom border-top bgw padl10">
			<div v-on:click='topage("search")' class="padtb10 flex flex-align-items-center padr10 border-bottom">
				<div class="flex-item">
					搜索
				</div>
				<div  class="arrow">
					
				</div>
			</div>
		</div>
		
		<div class="padtb10 text-align-center">
			<h3>加载更多</h3>
		</div>
		<div class="border-bottom border-top padl10 bgw">
			<div v-on:click="topage('loadmore')" class="padr10 border-bottom padtb10 flex flex-align-items-center">
				<div class="flex-item">
					加载更多					
				</div>
				<div class="arrow">
					
				</div>
			</div>
		</div>
		
		
	</div>
</template>
<script>
  

    export default {
		data() {
			return {
				show:false
			}
		},
		mounted:function(){
			
		},
		methods:{
			nextpage(){
				this.$router.push({ path: '/login' })
			},
			topage(page){
				this.$router.push(page);
			}
		},
		components: {
		    
		}
    }
</script>