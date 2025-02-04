<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <n-form :label-width="80" :model="formValue" :rules="rules" ref="formRef">
        <n-form-item label="Site Name" path="name">
          <n-input v-model:value="formValue.name" placeholder="Please enter site name" />
        </n-form-item>

        <n-form-item label="ICP License" path="icpCode">
          <n-input placeholder="Please enter ICP license" v-model:value="formValue.icpCode" />
        </n-form-item>

        <n-form-item label="Phone Number" path="mobile">
          <n-input placeholder="Please enter phone number" v-model:value="formValue.mobile" />
        </n-form-item>

        <n-form-item label="Address" path="address">
          <n-input v-model:value="formValue.address" type="textarea" placeholder="Please enter address" />
        </n-form-item>

        <n-form-item label="Login Captcha" path="loginCode">
          <n-radio-group v-model:value="formValue.loginCode" name="loginCode">
            <n-space>
              <n-radio :value="1">Enable</n-radio>
              <n-radio :value="0">Disable</n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>

        <n-form-item label="Site Access" path="systemOpen">
          <n-switch
            size="large"
            v-model:value="formValue.systemOpen"
            @update:value="systemOpenChange"
          />
        </n-form-item>

        <n-form-item label="Maintenance Message" path="closeText">
          <n-input
            v-model:value="formValue.closeText"
            type="textarea"
            placeholder="Please enter maintenance message"
          />
        </n-form-item>

        <div>
          <n-space>
            <n-button type="primary" @click="formSubmit">Update Basic Info</n-button>
          </n-space>
        </div>
      </n-form>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup>
  import { reactive, ref, toRefs } from 'vue';
  import { useDialog, useMessage } from 'naive-ui';

  const rules = {
    name: {
      required: true,
      message: 'Please enter site name',
      trigger: 'blur',
    },
    mobile: {
      required: true,
      message: 'Please enter phone number',
      trigger: 'input',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();
  const dialog = useDialog();

  const formValue = ref({
    name: '',
    mobile: '',
    icpCode: '',
    address: '',
    loginCode: 0,
    closeText:
      'Site under maintenance! We are currently performing system upgrades. Sorry for the inconvenience!',
    systemOpen: true,
  });

  function systemOpenChange(value) {
    if (!value) {
      dialog.warning({
        title: 'Warning',
        content: 'Are you sure to disable site access? This takes effect immediately!',
        positiveText: 'Confirm',
        negativeText: 'Cancel',
        onPositiveClick: () => {
          message.success('Operation successful');
        },
        onNegativeClick: () => {
          formValue.value.systemOpen = true;
        },
      });
    }
  }

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('Validation successful');
      } else {
        message.error('Validation failed, please complete all fields');
      }
    });
  }

  function resetForm() {
    formRef.value.restoreValidation();
  }
</script>
