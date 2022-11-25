import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        component: ()=> import ('../pages/Login.vue')
    },
    {
        path: '/',
        component: ()=> import ('../pages/Index.vue'),
        children: [
            {
                path: '/',
                component: ()=> import ('../pages/Home.vue'),
            },
            {
                path: '/form',
                component: ()=> import ('../components/tpl/form.vue'),
            },
              {
                path: '/table',
                component: ()=> import ('../components/tpl/table.vue'),
            },
             {
                path: '/register',
                component: ()=> import ('../components/page/register.vue'),
            },
             {
                path: '/logins',
                component: ()=> import ('../components/page/login.vue'),
            },
            {
                path: '/forgot',
                component: ()=> import ('../components/page/forgot.vue'),
            },
            {
                path: '/404',
                component: ()=> import ('../components/page/notFound.vue'),
            },
            {
                path: '/list',
                component: ()=> import ('../components/page/list.vue'),
            },
             {
                path: '/user',
                component: ()=> import ('../components/user/user.vue'),
            },
             {
                path: '/admin',
                component: ()=> import ('../components/user/admin.vue'),
            },
             {
                path: '/role',
                component: ()=> import ('../components/user/role.vue'),
            },
             {
                path: '/profile',
                component: ()=> import ('../components/set/profile.vue'),
            },
             {
                path: '/site',
                component: ()=> import ('../components/set/site.vue'),
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

export default router;