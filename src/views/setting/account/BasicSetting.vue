<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <n-form :label-width="80" :model="formValue" :rules="rules" ref="formRef">
        <n-form-item label="Nickname" path="name">
          <n-input v-model:value="formValue.name" placeholder="Please enter nickname" />
        </n-form-item>

        <n-form-item label="Email" path="email">
          <n-input placeholder="Please enter email" v-model:value="formValue.email" />
        </n-form-item>

        <n-form-item label="Phone Number" path="mobile">
          <n-input placeholder="Please enter phone number" v-model:value="formValue.mobile" />
        </n-form-item>

        <n-form-item label="Address" path="address">
          <n-input v-model:value="formValue.address" type="textarea" placeholder="Please enter address" />
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
  import { reactive, ref } from 'vue';
  import { useMessage } from 'naive-ui';

  const rules = {
    name: {
      required: true,
      message: 'Please enter nickname',
      trigger: 'blur',
    },
    email: {
      required: true,
      message: 'Please enter email',
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

  const formValue = reactive({
    name: '',
    mobile: '',
    email: '',
    address: '',
  });

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('验证成功');
      } else {
        message.error('验证失败，请填写完整信息');
      }
    });
  }
</script>
