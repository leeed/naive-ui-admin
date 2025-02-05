<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Image Upload"> Upload images to collect visual information from users </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-grid cols="2 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
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
            <n-form-item label="Contact Number" path="mobile">
              <n-input placeholder="Phone number" v-model:value="formValue.mobile" />
            </n-form-item>

            <n-form-item label="Medical Records" path="images">
              <BasicUpload
                :action="`${uploadUrl}/v1.0/files`"
                :headers="uploadHeaders"
                :data="{ type: 0 }"
                name="files"
                :width="100"
                :height="100"
                @upload-change="uploadChange"
                v-model:value="formValue.images"
                helpText="Single file max 2MB, up to 10 files maximum"
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

  const rules = {
    name: {
      required: true,
      message: 'Please enter appointment name',
      trigger: 'blur',
    },
    remark: {
      required: true,
      message: 'Please enter appointment notes',
      trigger: 'blur',
    },
    images: {
      required: true,
      type: 'array',
      message: 'Please upload medical records',
      trigger: 'change',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();
  const { uploadUrl } = globSetting;

  const formValue = reactive({
    name: '',
    mobile: '',
    // Image list (supports both absolute and relative paths for viewing/editing)
    images: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
  });

  const uploadHeaders = reactive({
    platform: 'miniPrograms',
    timestamp: new Date().getTime(),
    token: 'Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo=',
  });

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('Validation successful');
      } else {
        message.error('Validation failed, please fill in all information');
      }
    });
  }

  function resetForm() {
    formRef.value.restoreValidation();
  }

  function uploadChange(list: string[]) {
    formValue.images = unref(list);
  }
</script>
