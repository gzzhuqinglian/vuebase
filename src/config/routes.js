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
                path: '/login', //登录
                meta: { auth: false },
                component: resolve => require(['../pages/login/'], resolve)
            },

             {
                path: '/seldepartment', //登录
                component: resolve => require(['../pages/seldepartment'], resolve)
            },
           

            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/index'
            }
        ]
    }
]