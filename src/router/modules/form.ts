import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { ProfileOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/form',
    name: 'Form',
    redirect: '/form/basic-form',
    component: Layout,
    meta: {
      title: 'Form Pages', // 表单页面 -> Form Pages
      icon: renderIcon(ProfileOutlined),
      sort: 3,
    },
    children: [
      {
        path: 'basic-form',
        name: 'form-basic-form',
        meta: {
          title: 'Basic Form', // 基础表单 -> Basic Form
        },
        component: () => import('@/views/form/basicForm/index.vue'),
      },
      {
        path: 'step-form',
        name: 'form-step-form',
        meta: {
          title: 'Step Form', // 分步表单 -> Step Form
        },
        component: () => import('@/views/form/stepForm/stepForm.vue'),
      },
      {
        path: 'detail',
        name: 'form-detail',
        meta: {
          title: 'Form Details', // 表单详情 -> Form Details
        },
        component: () => import('@/views/form/detail/index.vue'),
      },
    ],
  },
];

export default routes;
