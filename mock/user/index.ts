import Mock from 'mockjs';
import { resultSuccess } from '../_util';
import { defineMock } from '@alova/mock';

const Random = Mock.Random;

const token = Random.string('upper', 32, 32);

const adminInfo = {
  userId: '1',
  username: 'admin',
  realName: 'Admin',
  avatar: Random.image(),
  desc: 'manager',
  password: Random.string('upper', 4, 16),
  token,
  permissions: [
    {
      label: 'Console', // 主控台 -> Console
      value: 'dashboard_console',
    },
    {
      label: 'Monitor Page', // 监控页 -> Monitor Page
      value: 'dashboard_monitor',
    },
    {
      label: 'Workplace', // 工作台 -> Workplace
      value: 'dashboard_workplace',
    },
    {
      label: 'Basic List', // 基础列表 -> Basic List
      value: 'basic_list',
    },
    {
      label: 'Basic List Delete', // 基础列表删除 -> Basic List Delete
      value: 'basic_list_delete',
    },
  ],
};

export default defineMock({
  '[POST]/api/login': () => resultSuccess({ token }),
  '/api/admin_info': () => resultSuccess(adminInfo),
});
