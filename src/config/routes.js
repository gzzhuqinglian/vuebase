import App from '../App'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/index', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '/switch', //switch页面
                meta: { auth: false },
                component: resolve => require(['../pages/form/switch'], resolve)
            },
            {
            	path:'/radio',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/form/radio'],resolve)
            },
            {
            	path:'/checkbox',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/form/checkbox'],resolve)
            },
            {
            	path:'/range',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/form/range'],resolve)
            },
            {
            	path:'/loading',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/poup/loading'],resolve)
            },
             {
            	path:'/bubble',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/poup/bubble'],resolve)
            },
             {
            	path:'/pop',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/poup/pop'],resolve)
            },
             {
            	path:'/transition',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/transition/'],resolve)
            },
            {
            	path:'/navbar',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/nav/navbar'],resolve)
            },
            {
            	path:'/search',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/search/search'],resolve)
            },
            {
            	path:'/loadmore',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/loadmore/loadmore'],resolve)
            },
             {
            	path:'/tabbar',
            	meta:{auth:false},
            	component:resolve=>require(['../pages/nav/tabbar'],resolve),
            	children:[
            		{
            			path:'tab1',
            			meta:{auth:false},
            			component:resolve=>require(['../pages/nav/tab1'],resolve)
            		},
            		{
            			path:'tab2',
            			meta:{auth:false},
            			component:resolve=>require(['../pages/nav/tab2'],resolve)
            		},
            		{
            			path:'tab3',
            			meta:{auth:false},
            			component:resolve=>require(['../pages/nav/tab3'],resolve)
            		},
            		{
            			path:'tab4',
            			meta:{auth:false},
            			component:resolve=>require(['../pages/nav/tab4'],resolve)
            		},{
            			path:'*',
            			redirect:'tab1'
            		}
            	]
            },
            
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/index'
            }
        ]
    }
]