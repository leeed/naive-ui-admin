<template>
  <n-card :bordered="false" class="proCard">
    <BasicTable
      title="Table List"
      titleTooltip="This is a tooltip"
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row) => row.id"
      ref="actionRef"
      :actionColumn="actionColumn"
      :scroll-x="1360"
      @update:checked-row-keys="onCheckedRow"
    />
  </n-card>
</template>

<script lang="ts" setup>
  import { reactive, ref, h } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { getTableList } from '@/api/table/list';
  import { columns } from './basicColumns';
  import { useDialog, useMessage } from 'naive-ui';
  import { DeleteOutlined, EditOutlined } from '@vicons/antd';

  const message = useMessage();
  const dialog = useDialog();
  const actionRef = ref();

  const params = reactive({
    pageSize: 5,
    name: 'NaiveAdmin',
  });

  const actionColumn = reactive({
    width: 180,
    title: 'Actions',
    key: 'action',
    fixed: 'right',
    align: 'center',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: createActions(record),
      });
    },
  });

  function createActions(record) {
    return [
      {
        label: 'Delete',
        // Color configuration will override type
        icon: DeleteOutlined,
        // Display based on permissions: will show if has permission, supports multiple
        auth: ['basic_list'],
      },
      {
        label: 'Edit',
        icon: EditOutlined,
        onClick: handleEdit.bind(null, record),
        auth: ['basic_list'],
      },
    ];
  }

  const loadDataTable = async (res) => {
    return await getTableList({ ...params, ...res });
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  function handleDelete(record) {
    dialog.info({
      title: 'Notice',
      content: `Do you want to delete ${record.name}?`,
      positiveText: 'Confirm',
      negativeText: 'Cancel',
      onPositiveClick: () => {
        message.success('Delete successful');
      },
      onNegativeClick: () => {},
    });
  }

  function handleEdit(record) {
    console.log(record);
    message.success('You clicked the edit button');
  }
</script>

<style lang="less" scoped></style>
