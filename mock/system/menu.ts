import { defineMock } from '@alova/mock';
import { resultSuccess } from '../_util';
import type { ListDate } from '@/api/system/menu';

const menuList = () => {
  const result: ListDate[] = [
    {
      label: 'Dashboard',
      key: 'dashboard',
      type: 1,
      subtitle: 'dashboard',
      openType: 1,
      auth: 'dashboard',
      path: '/dashboard',
      children: [
        {
          label: 'Console', // 主控台 -> Console
          key: 'console',
          type: 1,
          subtitle: 'console',
          openType: 1,
          auth: 'console',
          path: '/dashboard/console',
        },
        {
          label: 'Workplace', // 工作台 -> Workplace
          key: 'workplace',
          type: 1,
          subtitle: 'workplace',
          openType: 1,
          auth: 'workplace',
          path: '/dashboard/workplace',
        },
      ],
    },
    {
      label: 'Form Management', // 表单管理 -> Form Management
      key: 'form',
      type: 1,
      subtitle: 'form',
      openType: 1,
      auth: 'form',
      path: '/form',
      children: [
        {
          label: 'Basic Form', // 基础表单 -> Basic Form
          key: 'basic-form',
          type: 1,
          subtitle: 'basic-form',
          openType: 1,
          auth: 'basic-form',
          path: '/form/basic-form',
        },
        {
          label: 'Step Form', // 分步表单 -> Step Form
          key: 'step-form',
          type: 1,
          subtitle: 'step-form',
          openType: 1,
          auth: 'step-form',
          path: '/form/step-form',
        },
        {
          label: 'Form Details', // 表单详情 -> Form Details
          key: 'detail',
          type: 1,
          subtitle: 'detail',
          openType: 1,
          auth: 'detail',
          path: '/form/detail',
        },
      ],
    },
  ];

  return result;
};

export default defineMock({
  '/api/menu/list': () => {
    const list = menuList();
    return resultSuccess({
      list,
    });
  },
});
