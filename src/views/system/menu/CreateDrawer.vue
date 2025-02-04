<template>
  <n-drawer v-model:show="state.isDrawer" :width="width" :placement="state.placement">
    <n-drawer-content :title="title" closable>
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="100"
      >
        <n-form-item label="Type" path="type">
          <span>{{ formParams.type === 1 ? 'Sidebar Menu' : '' }}</span>
        </n-form-item>
        <n-form-item label="Title" path="label">
          <n-input placeholder="Please enter title" v-model:value="formParams.label" />
        </n-form-item>
        <n-form-item label="Subtitle" path="subtitle">
          <n-input placeholder="Please enter subtitle" v-model:value="formParams.subtitle" />
        </n-form-item>
        <n-form-item label="Path" path="path">
          <n-input placeholder="Please enter path" v-model:value="formParams.path" />
        </n-form-item>
        <n-form-item label="Open Type" path="openType">
          <n-radio-group v-model:value="formParams.openType" name="openType">
            <n-space>
              <n-radio :value="1">Current Window</n-radio>
              <n-radio :value="2">New Window</n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="Menu Permissions" path="auth">
          <n-input placeholder="Enter permissions, separate with commas" v-model:value="formParams.auth" />
        </n-form-item>
        <n-form-item label="Hide Sidebar" path="hidden">
          <n-switch v-model:value="formParams.hidden" />
        </n-form-item>
      </n-form>

      <template #footer>
        <n-space>
          <n-button type="primary" :loading="state.subLoading" @click="formSubmit">Submit</n-button>
          <n-button @click="handleReset">Reset</n-button>
        </n-space>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
  import { reactive, ref, toRefs } from 'vue';
  import { useMessage } from 'naive-ui';

  const rules = {
    label: {
      required: true,
      message: 'Please enter title',
      trigger: 'blur',
    },
    path: {
      required: true,
      message: 'Please enter path',
      trigger: 'blur',
    },
  };

  defineProps({
    title: {
      type: String,
      default: 'Add Top-level Menu',
    },
    width: {
      type: Number,
      default: 450,
    },
  });

  const message = useMessage();
  const formRef: any = ref(null);
  const defaultValueRef = () => ({
    label: '',
    type: 1,
    subtitle: '',
    openType: 1,
    auth: '',
    path: '',
    hidden: false,
  });
  const formParams = ref(defaultValueRef());
  const state = reactive({
    isDrawer: false,
    subLoading: false,
    placement: 'right' as const,
  });

  function openDrawer() {
    state.isDrawer = true;
  }

  function closeDrawer() {
    state.isDrawer = false;
  }

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('Added successfully');
        handleReset();
        closeDrawer();
      } else {
        message.error('Please complete all required fields');
      }
    });
  }

  function handleReset() {
    formRef.value.restoreValidation();
    formParams.value = Object.assign(formParams.value, defaultValueRef());
  }
</script>
