<style lang="less" scoped>
	.ableft{
		position: absolute;
		left: 0;
	}
	
	.tab-icon{
		width: 27px;
	    height: 27px;
	    display: inline-block;
	    background-color: #c5c5d2;
	    border-radius: 4px;
	    border: 0px;
	}
	.activetab{
		.tab-icon{
			background-color: #1199EE;
		}
		span{
			color: #1199EE;
		}
	}
		
	
	
	
</style>
<template>
	<div>
		<div class="header">
			<a class="icon_back ableft" v-on:click="goback"></a>
			<h3>tabbar</h3>
		</div>
		<div class="" style="padding-bottom: 55px;">
			<router-view></router-view>
		</div>
		<div class="flex-align-items-center text-align-center flex border-top" style="padding-top: 4px;padding-bottom: 2px; position: fixed;bottom: 0;width: 100%;">
			<div :class='{"activetab":activetab==tab1}' v-on:click='topage(tab1)' class="flex-item">
				<div>
					<i class="tab-icon"></i>
				</div>
				<div>
					<span>菜单</span>
				</div>
			</div>
			<div :class='{activetab:activetab==tab2}' v-on:click='topage(tab2)' class="flex-item">
				<div>
					<i class="tab-icon"></i>
				</div>
				<div>
					<span>菜单1</span>
				</div>
			</div>
			<div :class='{activetab:activetab==tab3}' v-on:click='topage(tab3)' class="flex-item">
				<div>
					<i class="tab-icon"></i>
				</div>
				<div>
					<span>菜单2</span>
				</div>
			</div>
			<div :class='{activetab:activetab==tab4}' v-on:click='topage(tab4)' class="flex-item">
				<div>
					<i class="tab-icon"></i>
				</div>
				<div>
					<span>菜单3</span>
				</div>
			</div>
		</div>
		
		
		   
        
   </div>
</template>
<script>
  

    export default {
		data() {
			return {
				tab1:'/tabbar/tab1',
				tab2:'/tabbar/tab2',
				tab3:'/tabbar/tab3',
				tab4:'/tabbar/tab4',
				activetab:'/tabbar/tab1'
			}
		},
		mounted:function(){
			var that=this;
			this.$router.afterEach(route=>{
				that.activetab=route.path;
			})
			this.$router.replace('/tabbar/tab1');
		},
		methods:{
			showloadbubble(){
				this.$root.bubbletext='泡泡的我的测试'
				this.$root.bubble=true;
			},
			topage(page){
				this.$router.push(page);
			},
			
			nextpage(){
				this.$router.push({ path: '/login' })
			},
			goback(){
				this.$router.go(-1)
			}
		},
		
		components: {
		    
		},
		watch:function(){
			
		}
    }
</script>