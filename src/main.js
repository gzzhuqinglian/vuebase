import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件
import './css/base.css'




Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({
    routes
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})

var vuedom=new Vue({ data:{
							dialog:false,
							loading:false,
							bubble:false,
							bubbletext:'很好哦哦哦',
							dia:{
								content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
							    title:'这是我的标题是是是',
							    showcancel:false
							}
							
							},methods:{
								suredo:function(){
									console.log('very good ')
								}
							} ,store, router }).$mount('#app')


Vue.http.interceptors.push((request,next)=>{
	vuedom.loading=true;
	next((response)=>{
		vuedom.loading=false;
		return response;
	})

})

Vue.http.interceptors.push((request,next)=>{
	vuedom.loading=true;
	next((response)=>{
		vuedom.loading=false;
		if(!response.ok){
			vuedom.dialog=false;
		}
		return response
	})
})
