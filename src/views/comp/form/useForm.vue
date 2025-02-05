<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Basic Form"> useForm form, used to collect form information from users </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <div class="BasicForm">
        <BasicForm @register="register" @submit="handleSubmit" @reset="handleReset">
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>
        </BasicForm>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';
  import { useMessage } from 'naive-ui';

  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'NInput',
      label: 'Name',
      labelMessage: 'This is a hint',
      giProps: {
        span: 1,
      },
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
        placeholder: 'Please enter phone number',
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
      giProps: {
        //span: 24,
      },
      componentProps: {
        placeholder: 'Please select type',
        options: [
          {
            label: 'Comfort',
            value: 1,
          },
          {
            label: 'Economy',
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
      giProps: {
        //span: 24,
      },
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
      label: 'Duration',
      giProps: {
        //span: 24,
      },
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
      label: 'Appointment Items',
      giProps: {
        //span: 24,
      },
      componentProps: {
        placeholder: 'Please select appointment items',
        options: [
          {
            label: 'Implant',
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
      giProps: {
        //span: 24,
      },
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
      giProps: {
        //span: 24,
      },
      //插槽
      slot: 'statusSlot',
    },
  ];

  const message = useMessage();

  const [register, {}] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 3,
    labelWidth: 120,
    layout: 'horizontal',
    submitButtonText: 'Submit Form',
    schemas,
  });

  function handleSubmit(values: Recordable) {
    if (!values) {
      return message.error('Please complete all required information');
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
