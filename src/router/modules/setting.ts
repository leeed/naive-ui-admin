import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { SettingOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/setting',
    name: 'Setting',
    redirect: '/setting/account',
    component: Layout,
    meta: {
      title: 'Setting Pages', // 设置页面 -> Setting Pages
      icon: renderIcon(SettingOutlined),
      sort: 5,
    },
    children: [
      {
        path: 'account',
        name: 'setting-account',
        meta: {
          title: 'Personal Settings', // 个人设置 -> Personal Settings
        },
        component: () => import('@/views/setting/account/account.vue'),
      },
      {
        path: 'system',
        name: 'setting-system',
        meta: {
          title: 'System Settings', // 系统设置 -> System Settings
        },
        component: () => import('@/views/setting/system/system.vue'),
      },
    ],
  },
];

export default routes;
