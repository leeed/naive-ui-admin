<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Basic Form">
        Forms are used to collect or verify information from users. Basic forms are common in form scenarios with fewer data items. Form field labels also support responsiveness.
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-grid cols="1 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
        <n-grid-item offset="0 s:0 m:1 l:1 xl:1 2xl:1">
          <n-form
            :label-width="90"
            :model="formValue"
            :rules="rules"
            label-placement="left"
            ref="formRef"
            class="py-8"
          >
            <n-form-item label="Appointment Name" path="name">
              <n-input v-model:value="formValue.name" placeholder="Enter name" />
            </n-form-item>
            <n-form-item label="Phone Number" path="mobile">
              <n-input placeholder="Phone number" v-model:value="formValue.mobile" />
            </n-form-item>
            <n-form-item label="Appointment Time" path="datetime">
              <n-date-picker type="datetime" v-model:value="formValue.datetime" />
            </n-form-item>
            <n-form-item label="Doctor" path="doctor">
              <n-select
                placeholder="Select doctor"
                :options="doctorList"
                v-model:value="formValue.doctor"
              />
            </n-form-item>
            <n-form-item label="Appointment Matter" path="matter">
              <n-select
                placeholder="Select matter"
                :options="matterList"
                v-model:value="formValue.matter"
                multiple
              />
            </n-form-item>
            <n-form-item label="Gender" path="sex">
              <n-radio-group v-model:value="formValue.sex" name="sex">
                <n-space>
                  <n-radio :value="1">Male</n-radio>
                  <n-radio :value="2">Female</n-radio>
                </n-space>
              </n-radio-group>
            </n-form-item>
            <n-form-item label="Notes" path="remark">
              <n-input
                v-model:value="formValue.remark"
                type="textarea"
                placeholder="Enter appointment notes"
              />
            </n-form-item>
            <n-form-item label="Image" path="img">
              <BasicUpload
                :action="`${uploadUrl}/v1.0/files`"
                :headers="uploadHeaders"
                :data="{ type: 0 }"
                name="files"
                :width="100"
                :height="100"
                @upload-change="uploadChange"
                v-model:value="uploadList"
                helpText="Single file max 20MB, up to 10 files"
              />
            </n-form-item>
            <div style="margin-left: 80px">
              <n-space>
                <n-button type="primary" @click="formSubmit">Submit</n-button>
                <n-button @click="resetForm">Reset</n-button>
              </n-space>
            </div>
          </n-form>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, unref, reactive } from 'vue';
  import { useMessage } from 'naive-ui';
  import { BasicUpload } from '@/components/Upload';
  import { useGlobSetting } from '@/hooks/setting';

  const globSetting = useGlobSetting();

  const matterList = [
    {
      label: 'Dental Implant',
      value: 1,
    },
    {
      label: 'Dental Filling',
      value: 2,
    },
    {
      label: 'Root Canal',
      value: 3,
    },
  ];

  const doctorList = [
    {
      label: 'Dr. Li',
      value: 1,
    },
    {
      label: 'Dr. Huang',
      value: 2,
    },
    {
      label: 'Dr. Zhang',
      value: 3,
    },
  ];

  const rules = {
    name: {
      required: true,
      message: 'Please enter name',
      trigger: 'blur',
    },
    remark: {
      required: true,
      message: 'Please enter notes',
      trigger: 'blur',
    },
    mobile: {
      required: true,
      message: 'Please enter phone number',
      trigger: ['input'],
    },
    datetime: {
      required: true,
      type: 'number',
      message: 'Please select time',
      trigger: ['blur', 'change'],
    },
    doctor: {
      required: true,
      type: 'number',
      message: 'Please select doctor',
      trigger: 'change',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();
  const { uploadUrl } = globSetting;

  const defaultValueRef = () => ({
    name: '',
    mobile: '',
    remark: '',
    sex: 1,
    matter: null,
    doctor: null,
    datetime: [],
  });

  let formValue = reactive(defaultValueRef());
  const uploadList = ref([
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  ]);
  const uploadHeaders = reactive({
    platform: 'miniPrograms',
    timestamp: new Date().getTime(),
    token: 'Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo=',
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

  function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  }

  function uploadChange(list: string[]) {
    console.log(list);
  }
</script>
