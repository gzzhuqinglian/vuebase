<style lang="less" scoped>
	.ableft{
		position: absolute;
		left: 0;
	}
	.checkbox-icon{
		display: inline-block;
		width: 20px;
		height: 20px;
		vertical-align: middle;
		background-color: #FFFFFF;
		border:1px solid #CCCCCC;
		border-radius: 50%;
		position: relative;
		margin-right: 10px;
	}
	.checkbox:checked+.checkbox-icon{
		background-color: #26A2FF;
		border-color: #26A2FF;
	}
	.checkbox:checked+.checkbox-icon:after{
		display: inline-block;
		content: '';
		width:8px;
		height: 4px;
		border-left: 2px solid #FFFFFF;
		border-bottom: 2px solid #FFFFFF;
		position: absolute;
		top:50%;
		left:50%;
		background-color: transparent;
		transform: translate(-50%,-50%) rotate(-45deg);
		-ms-transform: translate(-50%,-50%) rotate(-45deg); 	/* IE 9 */
		-moz-transform: translate(-50%,-50%) rotate(-45deg);	/* Firefox */
		-webkit-transform: translate(-50%,-50%) rotate(-45deg);/* Safari 和 Chrome */
		-o-transform: translate(-50%,-50%) rotate(-45deg); 	/* Opera */
	}
	
</style>
<template>
	<div>
		<div class="header">
			<a class="icon_back ableft" v-on:click="goback"></a>
			<h3>checkbox</h3>
		</div>
		<div class="padl10 padtb10 bgw">
			
			
			<div class="padtb10">
				复选框右对齐
			</div>
			<div class="padl10 border-bottom border-top">
				<label style="display: block;" class="border-bottom padtb10" >
					<input v-model='checkbox' class="checkbox" type="checkbox" name="checkbox"  value="frist" style="display: none;" />
					<span class="checkbox-icon"></span>
					<span>frist</span>
				</label>
				<label style="display: block;" class="padtb10 border-bottom">
					<input v-model='checkbox' class="checkbox" type="checkbox" name="checkbox"  value="second" style="display: none;" />
					<span class="checkbox-icon"></span>
					<span>second</span>
				</label>
				<label style="display: block;" class="padtb10">
					<input style="display: none;" type="checkbox" class="checkbox" name="checkbox"  value="third" v-model='checkbox' />
					<span class="checkbox-icon"></span>
					<span>third</span>
				</label>
				
			</div>
			<div class="padtb10 border-bottom">
				{{checkbox}}
			</div>
			
			
			
			<div class="padtb10">
				复选框左对齐
			</div>
			<div class="padl10 border-bottom border-top">
				<label  class="border-bottom padtb10 flex flex-align-items-center" >
					<input v-model='checkbox1' class="checkbox " type="checkbox" name="checkbox1"  value="frist1" style="display: none;" />
					<span class="checkbox-icon  flex-order-2" ></span>
					<span class="flex-item flex-order-1" >frist</span>
				</label>
				<label  class="padtb10 border-bottom flex flex-align-items-center">
					<input v-model='checkbox1' class="checkbox" type="checkbox" name="checkbox1"  value="second1" style="display: none;" />
					<span style="order: 2;" class="checkbox-icon flex-order"></span>
					<span class="flex-item" style="order: 1;" >second</span>
				</label>
				<label  class="padtb10 flex flex-align-items-center">
					<input  style="display: none;" type="checkbox" class="checkbox" name="checkbox1"  value="third1" v-model='checkbox1' />
					<span  style="order: 2;" class="checkbox-icon flex-order"></span>
					<span class="flex-item" style="order: 1;" >third</span>
				</label>
				
			</div>
			<div class="padtb10 border-bottom">
				{{checkbox1}}
			</div>
			
		</div>     
        
   </div>
</template>
<script>
  

    export default {
		data() {
			return {
				
				checkbox:[],
				checkbox1:[]
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