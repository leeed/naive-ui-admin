<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Basic Form"> Basic form for collecting user information </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <div class="BasicForm">
        <BasicForm
          submitButtonText="Submit Appointment"
          layout="horizontal"
          :gridProps="{ cols: 1 }"
          :schemas="schemas"
          @submit="handleSubmit"
          @reset="handleReset"
        >
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>
        </BasicForm>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { BasicForm, FormSchema } from '@/components/Form/index';
  import { useMessage } from 'naive-ui';

  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'NInput',
      label: 'Name',
      labelMessage: 'This is a hint',
      componentProps: {
        placeholder: 'Please enter name',
        onInput: (e: any) => {
          console.log(e);
        },
      },
      rules: [{ required: true, message: 'Please enter name', trigger: ['blur'] }],
    },
    {
      field: 'mobile',
      component: 'NInputNumber',
      label: 'Mobile',
      componentProps: {
        placeholder: 'Please enter mobile number',
        showButton: false,
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'type',
      component: 'NSelect',
      label: 'Type',
      componentProps: {
        placeholder: 'Please select type',
        options: [
          {
            label: 'Comfortable',
            value: 1,
          },
          {
            label: 'Economical',
            value: 2,
          },
        ],
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeDate',
      component: 'NDatePicker',
      label: 'Appointment Time',
      defaultValue: 1183135260000,
      componentProps: {
        type: 'date',
        clearable: true,
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeTime',
      component: 'NTimePicker',
      label: 'Stay Time',
      componentProps: {
        clearable: true,
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeProject',
      component: 'NCheckbox',
      label: 'Appointment Project',
      componentProps: {
        placeholder: 'Please select appointment project',
        options: [
          {
            label: 'Teeth Implant',
            value: 1,
          },
          {
            label: 'Filling',
            value: 2,
          },
          {
            label: 'Root Canal',
            value: 3,
          },
        ],
        onUpdateChecked: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeSource',
      component: 'NRadioGroup',
      label: 'Source',
      componentProps: {
        options: [
          {
            label: 'Online',
            value: 1,
          },
          {
            label: 'Store',
            value: 2,
          },
        ],
        onUpdateChecked: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'status',
      label: 'Status',
      //插槽
      slot: 'statusSlot',
    },
  ];

  const message = useMessage();

  function handleSubmit(values: Recordable) {
    if (!values) {
      return message.error('Please fill in all information');
    }
    console.log(values);
    message.success(JSON.stringify(values));
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }
</script>

<style lang="less" scoped>
  .BasicForm {
    width: 550px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
</style>
