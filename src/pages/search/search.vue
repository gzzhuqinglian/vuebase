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
	
	
	
	.search-con{
		padding: 8px 10px;
		background-color: #EFEFF4;
		position: relative;
	}
	.search-show{
		position: absolute;
		width:100%;
		height: 100%;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 8px 10px;
		box-sizing: border-box;
		background-color: #EFEFF4;
		.datai{
			background-color: #FFFFFF;
			height: 100%;
		}
	}
	.input_search{
		height: 26px;
		border: none;
		
	}
	.search-icon{
		display: inline-block;
		height: 26px;
	    background-color: #FFFFFF;
	    width: 26px;
	    background-image: url(search.png);
	    background-size: 80%;
	    background-repeat: no-repeat;
	    background-position: center;
	}
	.search-span-show{
		vertical-align: top;
	    line-height: 26px;
	    font-size: 16px;
	}
	.search-span{
		 font-size: 16px;
   		 padding-left: 4px;
   		color: #1199EE;
	}
	
	
	
</style>
<template>
	<div>
		<div class="header">
			<div class="icon_back ableft" v-on:click='goback'>
			</div>
			<h3>搜索</h3>
		</div>
		<div class="search-con">
			<div v-on:click='sarcheact=false' v-show="sarcheact" class="search-show">
				<div class="datai text-align-center">
					<i class="search-icon"></i>
					<span class="search-span-show">搜索</span>
				</div>
			</div>
			<div class="search flex flex-align-items-center">
				<i class="search-icon"></i>
				<input  v-on:search="search" type="search" placeholder="搜索" class="flex-item input_search" name="" id="" value="" />
				<span v-on:click='sarcheact=true' class="search-span">取消</span>
			</div>
		</div>
		
		<div class="bgw border-bottom border-top padrl10">
			<div v-for="item in itemsr" class="border-bottom border-top padtb10">
				{{item.name}}
			</div>
		</div>
	</div>
</template>
<script>
  

    export default {
		data() {
			return {
				'sarcheact':true,
				searchkey:'',
				items:[
				 {name:'张三'},
				 {name:'李四'},
				 {name:'王五'},
				 {name:'孙六'},
				 {name:'张三1'}
				]
			}
		},
		computed:{
			itemsr(){
				var that=this;
				if(that.searchkey){
				 	return	this.items.filter(function(item){
					return item.name.indexOf(that.searchkey)!=-1
					})
				}
				else{
					return	this.items;
				}
				
				
				
			}
		},
		mounted:function(){
			
		},
		methods:{
			goback(){
				this.$router.go(-1);
			},
			search(e){
				this.searchkey=e.target.value
			}
		},
		components: {
		    
		},
		watch:function(){
			
		}
    }
</script>