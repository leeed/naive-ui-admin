<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <n-form :label-width="120" :model="formValue" :rules="rules" ref="formRef">
        <n-form-item label="Product Image (Large)">
          <n-space align="center">
            <span>Width:</span>
            <n-input
              v-model:value="formValue.bigWidth"
              style="width: 80px"
              placeholder="px"
            />
            <span>Height:</span>
            <n-input
              v-model:value="formValue.bigHeight"
              style="width: 80px"
              placeholder="px"
            />
          </n-space>
        </n-form-item>

        <n-form-item label="Product Image (Small)">
          <n-space align="center">
            <span>Width:</span>
            <n-input
              v-model:value="formValue.smallWidth"
              style="width: 80px"
              placeholder="px"
            />
            <span>Height:</span>
            <n-input
              v-model:value="formValue.smallHeight"
              style="width: 80px"
              placeholder="px"
            />
          </n-space>
        </n-form-item>

        <n-form-item label="Watermark Opacity" path="watermarkClarity">
          <n-input-number
            v-model:value="formValue.watermarkClarity"
            :show-button="false"
            placeholder="Enter opacity (0-100)"
          />
        </n-form-item>

        <n-form-item label="Watermark Image" path="watermarkClarity">
          <n-upload action="http://www.mocky.io/v2/5e4bafc63100007100d8b70f">
            <n-button>Upload File</n-button>
          </n-upload>
        </n-form-item>

        <n-form-item label="Watermark Position" path="watermarkPlace">
          <n-select
            placeholder="Select position"
            :options="watermarkPlaceList"
            v-model:value="formValue.watermarkPlace"
          />
        </n-form-item>

        <n-form-item label="Price Decimal Places" path="pricePreciseNum">
          <n-select
            placeholder="Select decimal places"
            :options="pricePreciseNumList"
            v-model:value="formValue.pricePreciseNum"
          />
        </n-form-item>

        <n-form-item label="Rounding Method" path="pricePrecise">
          <n-select
            placeholder="Select rounding method"
            :options="pricePreciseList"
            v-model:value="formValue.pricePrecise"
          />
        </n-form-item>

        <n-form-item label="Show Market Price" path="isMarketPrice">
          <n-switch size="large" v-model:value="formValue.isMarketPrice" />
        </n-form-item>

        <div>
          <n-space>
            <n-button type="primary" @click="formSubmit">Update Display Information</n-button>
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
  const watermarkPlaceList = [
    {
      label: 'Top Left',
      value: 1,
    },
    {
      label: 'Top Right',
      value: 2,
    },
    {
      label: 'Center',
      value: 3,
    },
    {
      label: 'Bottom Right',
      value: 4,
    },
  ];

  const pricePreciseNumList = [
    {
      label: '2 digits',
      value: 1,
    },
    {
      label: '3 digits',
      value: 2,
    },
    {
      label: '4 digits',
      value: 3,
    },
  ];
  const pricePreciseList = [
    {
      label: 'Round',
      value: 1,
    },
    {
      label: 'Round Up',
      value: 2,
    },
    {
      label: 'Round Down',
      value: 3,
    },
  ];

  const formRef: any = ref(null);
  const message = useMessage();
  const dialog = useDialog();

  const formValue = ref({
    bigWidth: '',
    bigHeight: '',
    smallWidth: '',
    smallHeight: '',
    watermarkClarity: null,
    pricePrecise: 1,
    isMarketPrice: true,
    pricePreciseNum: null,
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
        message.success('Verification successful');
      } else {
        message.error('Verification failed, please fill in all information');
      }
    });
  }

  function resetForm() {
    formRef.value.restoreValidation();
  }
</script>
