import { RouteRecordRaw } from 'vue-router';
import { Layout, ParentLayout } from '@/router/constant';
import { WalletOutlined } from '@vicons/antd';
import { renderIcon, renderNew } from '@/utils';

const routeName = 'comp';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/comp',
    name: routeName,
    component: Layout,
    redirect: '/comp/table',
    meta: {
      title: 'Component Examples', // 组件示例 -> Component Examples
      icon: renderIcon(WalletOutlined),
      sort: 8,
    },
    children: [
      {
        path: 'table',
        name: `${routeName}_table`,
        redirect: '/comp/table/basic',
        component: ParentLayout,
        meta: {
          title: 'Table', // 表格 -> Table
        },
        children: [
          {
            path: 'basic',
            name: `${routeName}_table_basic`,
            meta: {
              title: 'Basic Table', // 基础表格 -> Basic Table
            },
            component: () => import('@/views/comp/table/basic.vue'),
          },
          {
            path: 'editCell',
            name: `${routeName}_table_editCell`,
            meta: {
              title: 'Cell Editing', // 单元格编辑 -> Cell Editing
            },
            component: () => import('@/views/comp/table/editCell.vue'),
          },
          {
            path: 'editRow',
            name: `${routeName}_table_editRow`,
            meta: {
              title: 'Row Editing', // 整行编辑 -> Row Editing
            },
            component: () => import('@/views/comp/table/editRow.vue'),
          },
        ],
      },
      {
        path: 'form',
        name: `${routeName}_form`,
        redirect: '/comp/form/basic',
        component: ParentLayout,
        meta: {
          title: 'Form', // 表单 -> Form
        },
        children: [
          {
            path: 'basic',
            name: `${routeName}_form_basic`,
            meta: {
              title: 'Basic Usage', // 基础使用 -> Basic Usage
            },
            component: () => import('@/views/comp/form/basic.vue'),
          },
          {
            path: 'useForm',
            name: `useForm`,
            meta: {
              title: 'useForm', // useForm -> useForm (This one was already in English)
            },
            component: () => import('@/views/comp/form/useForm.vue'),
          },
        ],
      },
      {
        path: 'upload',
        name: `${routeName}_upload`,
        meta: {
          title: 'Image Upload', // 上传图片 -> Image Upload
        },
        component: () => import('@/views/comp/upload/index.vue'),
      },
      {
        path: 'modal',
        name: `${routeName}_modal`,
        meta: {
          title: 'Modal Extension', // 弹窗扩展 -> Modal Extension
        },
        component: () => import('@/views/comp/modal/index.vue'),
      },
      {
        path: 'richtext',
        name: `richtext`,
        meta: {
          title: 'Rich Text', // 富文本 -> Rich Text
          extra: renderNew(),
        },
        component: () => import('@/views/comp/richtext/vue-quill.vue'),
      },
      {
        path: 'drag',
        name: `Drag`, // Drag -> Drag (This one was already in English)
        meta: {
          title: 'Drag&Drop', // 拖拽 -> Drag and Drop
          extra: renderNew(),
        },
        component: () => import('@/views/comp/drag/index.vue'),
      },
    ],
  },
];

export default routes;
