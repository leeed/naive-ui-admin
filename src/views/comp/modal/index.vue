<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Modal Box">
        Modal box, used to collect or display information to users. Modal uses Dialog presets with drag and drop extensions
        <br />
        Below is the useModal approach. The ref approach is also supported, used similarly to other components, e.g.: modalRef.value.closeModal()
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-alert title="Modal with nested Form" type="info">
        Demonstrates using useModal for dialog display and operations, combined with Form component
      </n-alert>
      <n-divider />
      <n-space>
        <n-button type="primary" @click="showModal">Open Modal with nested Form example</n-button>
      </n-space>
      <n-divider />
      <n-alert title="Lightweight Customization" type="info">
        Using useModal for dialog display with custom configurations for lightweight effects. More configurations available in documentation
      </n-alert>
      <n-divider />
      <n-space>
        <n-button type="primary" @click="showLightModal">Lightweight Confirmation</n-button>
      </n-space>
      <n-divider />
      <n-alert title="Tip" type="info">
        The component exposes setProps method to modify internal Props like title. Refer to UI framework documentation for DialogReactive Properties
      </n-alert>
    </n-card>

    <basicModal @register="modalRegister" ref="modalRef" class="basicModal" @on-ok="okModal">
      <template #default>
        <BasicForm @register="register" @reset="handleReset" class="basicForm">
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>
        </BasicForm>
      </template>
    </basicModal>

    <basicModal
      @register="lightModalRegister"
      class="basicModalLight"
      ref="modalRef"
      @on-ok="lightOkModal"
    >
      <template #default>
        <p class="text-gray-500" style="padding-left: 35px">Some dialog content</p>
      </template>
    </basicModal>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useMessage } from 'naive-ui';
  import { basicModal, useModal } from '@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';

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
        placeholder: 'Please enter your name',
        onInput: (e: any) => {
          console.log(e);
        },
      },
      rules: [{ required: true, message: 'Please enter your name', trigger: ['blur'] }],
    },
    {
      field: 'mobile',
      component: 'NInputNumber',
      label: 'Phone',
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
        placeholder: 'Select type',
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
      label: 'Appointment Date',
      giProps: {
        //span: 24,
      },
      defaultValue: 1183135260000,
      componentProps: {
        type: 'date',
        clearable: true,
        placeholder: 'Select date',
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
      label: 'Appointment Type',
      giProps: {
        //span: 24,
      },
      componentProps: {
        placeholder: 'Select appointment type',
        options: [
          {
            label: 'Dental implant',
            value: 1,
          },
          {
            label: 'Tooth filling',
            value: 2,
          },
          {
            label: 'Root canal',
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
            label: 'In-store',
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
      // Slot
      slot: 'statusSlot',
    },
  ];

  const modalRef: any = ref(null);
  const message = useMessage();

  const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
    title: 'New Appointment',
  });

  const [
    lightModalRegister,
    { openModal: lightOpenModal, closeModal: lightCloseModal, setSubLoading: lightSetSubLoading },
  ] = useModal({
    title: 'Confirmation Dialog',
    showIcon: true,
    type: 'warning',
    closable: false,
    maskClosable: true,
  });

  const [register, { submit }] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 3,
    labelWidth: 120,
    layout: 'horizontal',
    submitButtonText: 'Submit Appointment',
    showActionButtonGroup: false,
    schemas,
  });

  async function okModal() {
    const formRes = await submit();
    if (formRes) {
      closeModal();
      console.log('formRes', formRes);
      message.success('Submission successful');
    } else {
      message.error('Validation failed, please complete all required fields');
      setSubLoading(false);
    }
  }

  function lightOkModal() {
    lightCloseModal();
    lightSetSubLoading(false);
  }

  function showLightModal() {
    lightOpenModal();
  }

  function showModal() {
    openModal();
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }
</script>

<style lang="less">
  .basicForm {
    padding-top: 20px;
  }

  .n-dialog.basicModal {
    width: 640px;
  }

  .n-dialog.basicModalLight {
    width: 416px;
    padding-top: 26px;
  }
</style>
