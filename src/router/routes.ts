const routes: any = [
    {
        path: '/',
        name: 'Panel',
        redirect: {name: 'chats'},
        component: () => import('@/layouts/panel.vue'),
        children: [
            {
                path: '',
                name: 'Chats',
                component: () => import('@/pages/chats/index.vue'),
            }
        ]
    }
]

export default routes;
