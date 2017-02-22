<style lang="less" scoped>
	.header {
		    height: 44px;
		    line-height: 44px;
		    position: relative;
		    background: #e52f17;
		    text-align:center;
			.title{
				font-size: 16px;
			    font-weight: normal;
			    color: #ffffff;
			}
			.left {
				left: 0px;
				top:0;
				position:absolute;
			}
			.right {
				right: 0px;
				top:0;
				position:absolute;
			}
	}
</style>
<template>
	<header class="header">
		<h3 class="title">{{title}}</h3>
		<div class="item left">
			<slot name="left"></slot>
		</div>
		<div class="title"></div>
		<div class="item right">
			<slot name="right"></slot>
		</div>
	</header>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>