<style lang="less" scoped>

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
			height:50px;
			.input{
				padding-left:10px;
				flex:1;
				display:flex;
				align-items: center;
				span{
					flex:1;
				}
			}
			.input:after{
				content: '';
			    width: 16px;
			    height: 16px;
			    display: inline-block;
			    border-size: 1px 0px;
			    border: 1px 0;
			    border-bottom: 1px solid #666;
			    border-right: 1px solid #666;
			    transform: rotate(45deg) translateX(-50%);
			}
		}
	}

	.fix_bot{
			padding:20px 10px;
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

	.sel_list {
	    background: #fff;
	    position: fixed;
	    left: 0;
	    bottom: 0;
	    height: 50%;
	    width: 100%;
	    overflow: hidden;
	    z-index: 300000;
	    transition: height 1.2s;
	}
	.sel_title{
		background-color:#e52f17;
		height:36px;
		line-height:36px;
		color:#fff;
		padding:0 10px;
	}
	.item{
		border-bottom:1px solid  #e5e5e5;
		display:flex;
		align-items: center;
		height:50px;
		padding:0 10px; 
		}
	.sel_con{
		overflow: auto;
   		 height: 100%;
	}
	.isactive{
		height:0;
	}
	.icon_back {
		height:44px;
		width:44px;
		background-image:url('./login/back_icon.png');
		background-size:cover;
		display:inline-block;
	}
</style>
<template>
	<div>
		<v-header title='选择营业部'>
			<a href="javasript:void(0)" slot='left' class='icon_back' @click='backpage'></a>
		</v-header>
		<div class='item_con'>
			<div class='item'>
				<span>省/区/市</span>
				<div class="input" @click='changeActive(1)'> 
					<span>{{sheng.name}}</span>
				</div>
			</div>
			<div class='item'>
				<span>营业部</span>
				<div class="input" @click='changeActive(2)'> 
					<span>{{branch.name}}</span>
				</div>
			</div>
			<div class='item'>
				<span>营业部编号</span>
				<div class="input" @click='changeActive(3)'> 
					<span>{{branchno.name}}</span>
				</div>
			</div>
		</div>
		<div class='fix_bot'>
			<a href="javascript:void(0)" class='btn' @click="nextpage">下一步</a>
		</div>

		<div :class='["sel_list", { isactive: isactive }]'>
			<div class="sel_title">测试</div>
			<ul class='sel_con'>
				<li class='item' v-for='item in lists' @click='change(item)'>{{item.name}}</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from 'store/user'

    export default {
        data() {
			return {
				isactive:true,
				sheng:{key:'1',name:'天津'},
				branch:{key:11,name:'天津1'},
				branchno:{key:111,name:'111'},
				lists:'',
				shengs:[{key:'1',name:'天津'},{key:'2',name:'上海'},{key:'3',name:'武汉'},{key:'4',name:'杭州'},{key:'5',name:'南昌'},{key:'6',name:'北京'},{key:'7',name:'西安'},{key:'8',name:'青岛'}
				],
				branchs:{
					1:[{key:11,name:'天津1'}, {key:12,name:'天津2'}, {key:13,name:'天津3'}, {key:14,name:'天津4'}, {key:15,name:'天津5'} ], 2:[{key:21,name:'上海1'}, {key:22,name:'上海2'}, {key:23,name:'上海3'}, {key:24,name:'上海4'}, {key:25,name:'上海5'} ], 3:[{key:31,name:'武汉1'}, {key:32,name:'武汉2'}, {key:33,name:'武汉3'}, {key:34,name:'武汉4'}, {key:35,name:'武汉5'} ], 4:[{key:41,name:'杭州1'}, {key:42,name:'杭州2'}, {key:43,name:'杭州3'}, {key:44,name:'杭州4'}, {key:45,name:'杭州5'} ], 5:[{key:51,name:'南昌1'}, {key:52,name:'南昌2'}, {key:53,name:'南昌3'}, {key:54,name:'南昌4'}, {key:55,name:'南昌5'} ], 6:[{key:61,name:'北京1'}, {key:62,name:'北京2'}, {key:63,name:'北京3'}, {key:64,name:'北京4'}, {key:65,name:'北京5'} ], 7:[{key:71,name:'西安1'}, {key:72,name:'西安2'}, {key:73,name:'西安3'}, {key:74,name:'西安4'}, {key:75,name:'西安5'} ], 8:[{key:81,name:'青岛1'}, {key:82,name:'青岛2'}, {key:83,name:'青岛3'}, {key:84,name:'青岛4'}, {key:85,name:'青岛5'} ] },
				branchnos:{
					11:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 12:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 13:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 14:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 15:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 21:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 22:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 23:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 24:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 25:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 31:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 32:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 33:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 34:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 35:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 41:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 42:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 43:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 44:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 45:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 51:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 52:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 53:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 54:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 55:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 61:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 62:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 63:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 64:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 65:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 71:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 72:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 73:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 74:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 75:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 81:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 82:[{key:111,name:'111'}, {key:112,name:'112'}, {key:113,name:'113'}, {key:114,name:'114'} ], 83:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 84:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ], 85:[{key:121,name:'121'}, {key:122,name:'122'}, {key:123,name:'123'}, {key:124,name:'124'} ]
				},
				
			}
		},
		methods: {
            ...mapActions([USER_SIGNIN]),
			submit() {
				
				
			},
			change(item){
				if(this.type==1){
					this.sheng=item;
				}else if(this.type==2){
					this.branch=item;
				}else{
					this.branchno=item;
				}
				
				this.isactive=true;
			},
			changeActive(type){
				this.isactive=!this.isactive;
				if(this.isactive==false){
					if(type==1){
						this.lists=this.shengs;
						this.type=type;
						this.branch='';
						this.branchno='';
					}
					if(type==2){
						this.lists=this.branchs[this.sheng.key];
						this.type=type;
						console.log(this.lists);
						this.branchno='';
					}
					if(type==3){
						this.lists=this.branchnos[this.branch.key];
						this.type=type;
						console.log(this.lists);
					}
				}
			},
			backpage(){
				window.history.back();
			},
			nextpage(){
				
				alert('敬请期待');
				
			},
			
		}
    }
</script>