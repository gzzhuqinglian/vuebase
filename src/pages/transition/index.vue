<style lang="less" scoped>
	.ableft{
		position: absolute;
		left: 0;
	}
	
	
	.democlass{
		
		background-color: #1199EE;
		height: 40px;line-height: 40px;
	}
	
	.select{
		width: 100%;
	    height: 42px;
	    font-size: 22px;
	    margin-top: 40px;
	}
	
	
</style>
<template>
	<div>
		<div class="header">
			<a class="icon_back ableft" v-on:click="goback"></a>
			<h3>transition</h3>
		</div>
		
		
		
		
		<select v-model='select' name="effect" class="select">
			<optgroup label="Bounce">
				<option value="bounce">bounce</option> 
				<option value="bounceDown">bounceDown</option> 
				<option value="bounceLeft">bounceLeft</option> 
				<option value="bounceRight">bounceRight</option> 
				<option value="bounceUp">bounceUp</option>
			</optgroup> 
			<optgroup label="Fade">
				<option value="fade">fade</option> 
				<option value="fadeDown">fadeDown</option> 
				<option value="fadeDownBig">fadeDownBig</option> 
				<option value="fadeLeft">fadeLeft</option> 
				<option value="fadeLeftBig">fadeLeftBig</option> 
				<option value="fadeRight">fadeRight</option> 
				<option value="fadeRightBig">fadeRightBig</option> 
				<option value="fadeUp">fadeUp</option> 
				<option value="fadeUpBig">fadeUpBig</option>
			</optgroup> 
			<optgroup label="Rotate">
				<option value="rotate">rotate</option> 
				<option value="rotateDownLeft">rotateDownLeft</option>
				<option value="rotateDownRight">rotateDownRight</option> 
				<option value="rotateUpLeft">rotateUpLeft</option> 
				<option value="rotateUpRight">rotateUpRight</option>
			</optgroup> 
			<optgroup label="Slide">
				<option value="slideDown">slideDown</option> 
				<option value="slideLeft">slideLeft</option> 
				<option value="slideRight">slideRight</option> 
				<option value="slideUp">slideUp</option>
			</optgroup> 
			<optgroup label="Zoom">
				<option value="zoom">zoom</option> 
				<option value="zoomDown">zoomDown</option> 
				<option value="zoomLeft">zoomLeft</option> 
				<option value="zoomRight">zoomRight</option> 
				<option value="zoomUp">zoomUp</option>
			</optgroup>
		</select>
		
		<div class="ct_btn mt15">
			<a v-on:click='isshow=true' href="javascript:void(0)">展现</a>
		</div>
		<div class="ct_btn mt15">
			<a v-on:click='isshow=false' href="javascript:void(0)">隐藏</a>
		</div>
		<a href="http://about.asika.tw/vue2-animate/">原址链接</a>
		<transition :name='select'>
			<div v-show='isshow' class="democlass mt30">
				展示的div
			</div>
		</transition>
		
		
		
		   
        
   </div>
</template>
<script>
  import './vue2-animate.css'

    export default {
		data() {
			return {
				isshow:true,
				select:'fade'
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