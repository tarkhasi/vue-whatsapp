const routes: any = [
    {
        path: '/',
        redirect: {name: 'Panel'},
        component: () => import('@/pages/index.vue'),
    },
    {
        path: '/panel',
        component: () => import('@/layouts/panel.vue'),
        children: [
            {
                path: '',
                name: 'Panel',
                component: () => import('@/pages/panel/index.vue'),
            }
        ]
    }
]

export default routes;
