import { defineMock } from '@alova/mock';
import { resultSuccess } from '../_util';

const menusList = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: 'LAYOUT',
    redirect: '/dashboard/console',
    meta: {
      icon: 'DashboardOutlined',
      title: 'Dashboard',
    },
    children: [
      {
        path: 'console',
        name: 'dashboard_console',
        component: '/dashboard/console/console',
        meta: {
          title: 'Console', // 主控台 -> Console
        },
      },
      {
        path: 'monitor',
        name: 'dashboard_monitor',
        component: '/dashboard/monitor/monitor',
        meta: {
          title: 'Monitor Page', // 监控页 -> Monitor Page
        },
      },
      {
        path: 'workplace',
        name: 'dashboard_workplace',
        component: '/dashboard/workplace/workplace',
        meta: {
          hidden: true,
          title: 'Workplace', // 工作台 -> Workplace
        },
      },
    ],
  },
];

export default defineMock({
  '/api/menus': () => resultSuccess(menusList),
});
