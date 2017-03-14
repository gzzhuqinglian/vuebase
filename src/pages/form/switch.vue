<style lang="less" scoped>
	.ableft{
		position: absolute;
		left: 0;
	}
	
	
	.label{
		display: inline-block;
	}
	.core{
		display: inline-block;
	    position: relative;
	    width: 52px;
	    height: 32px;
	    border: 1px solid #d9d9d9;
	    border-radius: 16px;
	    box-sizing: border-box;
	    background: #fdfdfd;
	    vertical-align: middle;
	}
	.core:after{
		content: '';
		display: inline-block;
		width: 30px;
    	height: 30px;
    	background-color: #fff;
   		box-shadow: 0 1px 3px rgba(0,0,0,.4);
   		position: absolute;
   		left: 0;
   		border-radius: 16px;
   		 transition: transform 0.3s ;
	    -webkit-transition: -webkit-transform 0.3;
	}
	.switch:checked+.core {
	    border-color: #26a2ff;
	    background-color: #26a2ff;
	}
	.switch:checked+.core:after {
     	transform:translateX(20px);
		-ms-transform:translateX(20px); 	/* IE 9 */
		-moz-transform:translateX(20px); 	/* Firefox */
		-webkit-transform:translateX(20px); /* Safari 和 Chrome */
		-o-transform:translateX(20px); 	/* Opera */
	}
	
	
	
	
	
	
</style>
<template>
	<div>
		<div class="header">
			<a class="icon_back ableft" v-on:click="goback"></a>
			<h3>switch</h3>
		</div>
		<div class="padl10 padtb10 bgw">
			<div class="padtb10 border-bottom text-vertical-center">
				开关
				<label class="label">
					<input v-model='check' class='switch' type="checkbox" style="display: none;" name="" id="" value="" />
					<span class='core'></span>
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