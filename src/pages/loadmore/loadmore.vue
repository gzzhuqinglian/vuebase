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
	.loadmoreCon{
		overflow: hidden;
	}
	.scroll{
		overflow: scroll;
	}
	
	
	
</style>
<template>
	<div>
		<div class="header">
			<div v-on:click='goback' class="icon_back ableft">
				
			</div>
			<h3>加载更多</h3>
		</div>
		<div class="loadmoreCon">
			<div class="bgw scroll">
				<v-loadmore :bottom-all-loaded="allLoaded"  :autoFill='false' :topMethod='loadagin' :bottomMethod='loadbottom' ref='loadmore'>
					<div v-for="item in items" class="padtb10 border-bottom padrl10 text-align-center">
						{{item}}
					</div>
				
				
				</v-loadmore>
			</div>
			
		</div>
   </div>
</template>
<script>
	import loadmore from 'mint-ui/lib/loadmore';  
	import  'mint-ui/lib/style.css';  
    export default {
		data() {
			return {
				items:[
				1,2,3,4,5,6,7,8,9,10
				
				],
				index:10,
				allLoaded:false
			}
		},
		mounted:function(){
			
		},
		methods:{
			loadagin(){
				console.log('good');
				var that=this;
				setTimeout(function(){
					that.$refs.loadmore.onTopLoaded();
				},20000)
				
			},
			loadbottom(){
				var that=this;
				setTimeout(function(){
					for(var i=0;i<5;i++){
						that.items.push(++that.index);
					}
					if(that.index>40){
						that.allLoaded=true
					}
					that.$refs.loadmore.onBottomLoaded();
				},2000)
			},
			goback(){
				this.$router.go(-1);
			}
		},
		components: {
		    'v-loadmore':loadmore
		},
		watch:function(){
			
		}
    }
</script>