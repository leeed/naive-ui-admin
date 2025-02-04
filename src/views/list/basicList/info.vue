<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Basic Details"> Basic details, sometimes used to display read-only information. </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }">
      <n-descriptions label-placement="left" class="py-2">
        <n-descriptions-item>
          <template #label>Payee Name</template>
          Ah Jun
        </n-descriptions-item>
        <n-descriptions-item label="Receiving Account">NaiveUiAdmin@qq.com</n-descriptions-item>
        <n-descriptions-item label="Payment Type">Alipay</n-descriptions-item>
        <n-descriptions-item label="Payment Account">NaiveUiAdmin@163.com</n-descriptions-item>
        <n-descriptions-item label="Transfer Amount">￥1980.00</n-descriptions-item>
        <n-descriptions-item label="Status">
          <n-tag type="success">Received</n-tag>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
