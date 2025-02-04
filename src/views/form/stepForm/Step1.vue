<template>
  <n-form
    :label-width="100"
    :model="formValue"
    :rules="rules"
    label-placement="left"
    ref="form1Ref"
    style="max-width: 500px; margin: 40px auto 0 80px"
  >
    <n-form-item label="Payer Account" path="myAccount">
      <n-select
        placeholder="Select payer account"
        :options="myAccountList"
        v-model:value="formValue.myAccount"
      />
    </n-form-item>
    <n-form-item label="Beneficiary Account" path="account">
      <n-input-group>
        <n-select
          placeholder="Select"
          :options="accountTypeList"
          :style="{ width: '20%' }"
          v-model:value="formValue.accountType"
        />
        <n-input
          placeholder="Enter beneficiary account"
          :style="{ width: '80%' }"
          v-model:value="formValue.account"
        />
      </n-input-group>
    </n-form-item>
    <n-form-item label="Beneficiary Name" path="name">
      <n-input placeholder="Enter beneficiary name" v-model:value="formValue.name" />
    </n-form-item>
    <n-form-item label="Amount" path="money">
      <n-input placeholder="Enter transfer amount" v-model:value="formValue.money">
        <template #prefix>
          <span class="text-gray-400">￥</span>
        </template>
      </n-input>
    </n-form-item>
    <div style="margin-left: 80px">
      <n-space>
        <n-button type="primary" @click="formSubmit">Next Step</n-button>
      </n-space>
    </div>
  </n-form>
</template>

<script lang="ts" setup>
  import { ref, defineEmits } from 'vue';
  import { useMessage } from 'naive-ui';

  const myAccountList = [
    {
      label: 'NaiveUiAdmin@163.com',
      value: 1,
    },
    {
      label: 'NaiveUiAdmin@qq.com',
      value: 2,
    },
  ];

  const accountTypeList = [
    {
      label: 'WeChat',
      value: 1,
    },
    {
      label: 'Alipay',
      value: 2,
    },
  ];

  const emit = defineEmits(['nextStep']);

  const form1Ref: any = ref(null);
  const message = useMessage();

  const formValue = ref({
    accountType: 1,
    myAccount: null,
    account: 'john@example.com',
    money: '1980',
    name: 'John Doe',
  });

  const rules = {
    name: {
      required: true,
      message: 'Please enter beneficiary name',
      trigger: 'blur',
    },
    account: {
      required: true,
      message: 'Please enter account',
      trigger: 'blur',
    },
    money: {
      required: true,
      message: 'Please enter amount',
      trigger: 'blur',
    },
    myAccount: {
      required: true,
      type: 'number',
      message: 'Please select payer account',
      trigger: 'change',
    },
  };

  function formSubmit() {
    form1Ref.value.validate((errors) => {
      if (!errors) {
        emit('nextStep');
      } else {
        message.error('Validation failed, please complete all information');
      }
    });
  }
</script>
