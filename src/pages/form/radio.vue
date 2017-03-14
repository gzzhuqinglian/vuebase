<style lang="less" scoped>
	.ableft{
		position: absolute;
		left: 0;
	}
	
	.radio-icon{
		width: 20px;
	    height: 20px;
	    display: inline-block;
	    background-color: #fff;
	    border-radius: 50%;
	    border: 1px solid #ccc;
	    vertical-align: middle;
	    position: relative;
	}
	.radio:checked+.radio-icon {
		background-color:  #26a2ff;
		border-color: #26a2ff;
	}
	.radio:checked+.radio-icon:after{
		display: inline-block;
		content: '';
		position: absolute;
		background-color: #fff;
		width:8px;
		height: 8px;
		border-radius: 50%;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%); 
		-ms-transform: translate(-50%,-50%); 	/* IE 9 */
		-moz-transform: translate(-50%,-50%); 	/* Firefox */
		-webkit-transform: translate(-50%,-50%);/* Safari 和 Chrome */
		-o-transform: translate(-50%,-50%); 	/* Opera */
	}
	
	
	
</style>
<template>
	<div>
		<div class="header">
			<a class="icon_back ableft" v-on:click="goback"></a>
			<h3>radio</h3>
		</div>
		<div class="padl10 padtb10 bgw">
			<div class="padtb10">
				单选框
			</div>
			<div class="bgw  border-bottom border-top padl10">
				<label style="display: block;" class="padtb10 border-bottom">
					<input type="radio" class='radio' name="radio"  value="" style="display: none;" />
					<span class="radio-icon">				
					</span>
					<span>
						第一个选项
					</span>
				</label>
				<label style="display: block;" class="padtb10 border-bottom">
					<input type="radio" class='radio' name="radio"  value="" style="display: none;" />
					<span class="radio-icon"></span>
					<span>
						第二个选项
					</span>
				</label>
			</div>
			
			
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