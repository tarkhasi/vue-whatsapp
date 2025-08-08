const routes: any = [
  {
    path: '/',
    redirect: {name: 'Panel'},
    component: () => import('@/layouts/panel.layout.vue'),
    children: [
      {
        path: '',
        name: 'Panel',
        component: () => import('@/pages/index.vue'),
      },
    ]
  }
]

export default routes;
