<style lang="less" scoped>
	.icon_back {
		height:44px;
		width:44px;
		background-image:url('./back_icon.png');
		background-size:cover;
		display:inline-block;
	}
	.item_con{
		border: 1px solid #e5e5e5;
		border-size:1px 0;
		padding:0 10px;
		background-color:#fff;
		margin-top:26px; 
		.item{
			border-bottom:1px solid  #e5e5e5;
			display:flex;
			align-items: center;
			.input_con{
				flex: 1;
				position:relative;
				display:flex;
				align-items: center;
				padding-right:10px;
				input{
					flex: 1;
					height: 20px;
				    line-height: 20px;
				    padding: 14px 0;
				    outline: none;
				    border: 0;
				    color:#333;
				    font-size:14px;
				    padding-right:10px;			    
				}
				
				
			}
			.cls{
				a{
					display: block;
				    width: 32px;
				    height: 32px;
				    background: url("./delete.png") 50% no-repeat;
				    background-size: 14px;
				}
			}
			
			

		}
		.item:last-child{
			border-bottom:0px;
		}
		.btn{
			display:inline-block;
			background: #e52f17;
		    border-radius: 5px;
		    height: 36px;
		    line-height: 36px;
		    text-align:center;
		    color: #ffffff;
	        font-size: 14px;
	        padding:0 10px;
		}
		
	}
	.fix_bot{
			padding:20px;
			.btn{
				display:block;
				background: #e52f17;
			    border-radius: 5px;
			    height: 44px;
			    line-height: 44px;
			    text-align:center;
			    color: #ffffff;
		        font-size: 16px;
		        margin: 20px 0;
			}
	}
</style>
<template>
	<div>
		<v-header title='验证手机'>
			<a href="javasript:void(0)" slot='left' class='icon_back' @click='backpage'></a>
		</v-header>
		<div class='item_con'>
			<div class='item'>
				<div  :class="['input_con', { cls: isfocus}]">
					<input placeholder="请输入手机号码" type="text" @input='getCls' @focus='getCls' @blur='rmCls' v-model="user.id">
					<a href="javascript:void(0)" @click='user.id=""' ></a>
				</div>
				<a href="javascript:void(0)" class='btn'>获取验证码</a>
			</div>
			<div class='item'>
				<div class="input_con">
					<input placeholder="请输入验证码" type="password" v-model="user.password">
					<a href="javascript:void(0)"></a>
				</div>
			</div>
		</div>
		<div class='fix_bot'>
			<a href="javascript:void(0)" class='btn' @click="nextpage">下一步</a>
		</div>
	</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from 'store/user'

    export default {
        data() {
			return {
				user: {
					id: '',
					password: ''
				},
				isfocus:false,
			}
		},
		methods: {
            ...mapActions([USER_SIGNIN]),
			submit() {
				
				
			},
			backpage(){
				window.history.back();
			},
			nextpage(){
				if(this.user.id&&this.user.password){
					 this.USER_SIGNIN(this.user)
					this.$router.push({ path: '/seldepartment' })
				}

				
			},
			getCls(){
				if(this.user.id.length>=1){
					this.isfocus=true;
				}else{
					this.isfocus=false;
				}
			},
			rmCls(){
				var that=this;
				setTimeout(function(){
					that.isfocus=false;
				},100)		
			}
		}
    }
</script>