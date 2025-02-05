<template>
  <div class="card content-box">
    <n-card :bordered="false" title="Copy Directive">
      <n-space>
        <n-input placeholder="Try entering content" v-model:value="data" style="width: 350px" />
        <n-button v-copy="data" type="primary" @click="a">Copy</n-button>
      </n-space>
    </n-card>
    <n-card :bordered="false" title="Debounce Directive" class="mt-3">
      <n-button type="primary" v-debounce="b">Debounce Test</n-button>
    </n-card>
    <n-card :bordered="false" title="Throttle Directive" class="mt-3">
      <n-button type="primary" v-throttle="c">Throttle Test</n-button>
    </n-card>

    <n-card :bordered="false" title="Drag Directive" class="mt-3">Mouse over the rectangle to drag</n-card>
    <div class="box" v-draggable> </div>
  </div>
</template>

<script setup lang="ts" name="copyDirect">
  import { ref } from 'vue';
  import { useMessage } from 'naive-ui';
  const data = ref<string>();
  const message = useMessage();
  const a = () => {
    message.success('Copied successfully: ' + data.value);
  };
  const b = () => {
    message.success('Debounce');
    console.log(data.value);
  };
  const c = () => {
    message.success('Throttle');
    console.log(data.value);
  };
</script>

<style scoped lang="less">
  body {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    position: relative;
  }
  .content-box {
    height: 100vh;
    .box {
      width: 100px;
      height: 100px;
      background-color: #2d8cf0;
      position: absolute;
      z-index: 10000000;
      border-radius: 10px;
      margin: 20px 5px;
    }
  }
</style>
