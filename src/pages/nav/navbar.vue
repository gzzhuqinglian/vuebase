<style lang="less" scoped>
	.ableft{
		position: absolute;
		left: 0;
	}
	
	.active{
		background-color: #1199EE;
	}
	
	.test-enter{
		transform: translateX(100%);
	}
	.test-enter-active{
		transition: all 0.5s;
	}
	
	
	
</style>
<template>
	<div>
		<div class="header">
			<a class="icon_back ableft" v-on:click="goback"></a>
			<h3>navbar</h3>
		</div>
		
		<div class="flex text-align-center border-bottom  flex-align-items-center">
			<div :class="{active:activetab=='one'}" v-on:click='navbarchange("one")' class="flex-item border-right padtb10">
				选项一
			</div>
			<div :class="{active:activetab=='two'}" v-on:click='navbarchange("two")' class="flex-item border-right padtb10">
				选项二
			</div>
			<div class="flex-item padtb10" :class="{active:activetab=='there'}" v-on:click='navbarchange("there")'>
				选项三
			</div>
		</div>
		<div class="bgw">	
			<transition name='test'>
				<div v-show='activetab=="one"' class=""  >
					<div v-for='item in tap1' class="border-bottom padtb10 padr10 padl10">
						{{item}}
					</div>
				</div>
			</transition>
			
				
		
			<transition name='test'>
				<div v-show='activetab=="two"' class=""  >
					<div v-for='item in tap2' class="padr10 padl10 border-bottom padtb10">
						{{item}}
					</div>
				</div>
			</transition>
			<transition name='test'>
				<div v-show='activetab=="there"' class=""  >
					<div v-for='item in tap3' class="border-bottom padtb10 padr10 padl10">
						{{item}}
					</div>
				</div>
			</transition>
			
		</div>	   
        
   </div>
</template>
<script>
  

    export default {
		data() {
			return {
				activetab:'one',
				tap1:['1',2,3,4,5,6,7,8,9,10],
				tap2:['2选项1','2选项2','2选项3','2选项4','2选项5','2选项6','2选项7','2选项8','2选项9','2选项10','2选项11','2选项12'],
				tap3:['3选项1','3选项2','3选项3','3选项4','3选项5','3选项6','3选项7','3选项8','3选项9','3选项10','3选项11','3选项12']
			}
		},
		mounted:function(){
			
		},
		methods:{
			showloadbubble(){
				this.$root.bubbletext='泡泡的我的测试'
				this.$root.bubble=true;
			},
			navbarchange(val){
				this.activetab=val;
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