<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <n-form :label-width="120" :model="formValue" :rules="rules" ref="formRef">
        <n-form-item label="Sender Email" path="originator">
          <n-input v-model:value="formValue.originator" placeholder="Please enter sender email" />
        </n-form-item>

        <n-form-item label="SMTP Server Address">
          <n-input placeholder="Please enter SMTP server address" />
        </n-form-item>

        <n-form-item label="SMTP Server Port">
          <n-input placeholder="Please enter SMTP port" />
        </n-form-item>

        <n-form-item label="SMTP Username">
          <n-input placeholder="Please enter SMTP username" />
        </n-form-item>

        <n-form-item label="SMTP Password">
          <n-input type="password" placeholder="Please enter SMTP password" />
        </n-form-item>

        <n-form-item label="Test Email">
          <n-button>Send Test Email</n-button>
        </n-form-item>

        <div>
          <n-space>
            <n-button type="primary" @click="formSubmit">Update Email Settings</n-button>
          </n-space>
        </div>
      </n-form>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup>
  import { reactive, ref, toRefs } from 'vue';
  import { useMessage } from 'naive-ui';

  const rules = {
    originator: {
      required: true,
      message: 'Please enter sender email',
      trigger: 'blur',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();

  const formValue = ref({
    originator: '',
  });

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('Verification successful');
      } else {
        message.error('Verification failed, please fill in all information');
      }
    });
  }
</script>
