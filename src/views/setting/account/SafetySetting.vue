<template>
  <n-grid cols="1" responsive="screen" class="-mt-4">
    <n-grid-item>
      <n-list>
        <n-list-item>
          <template #suffix>
            <n-button type="primary" text>Modify</n-button>
          </template>
          <n-thing title="Account Password">
            <template #description
              ><span class="text-gray-400">Bind phone and email, set password for account security</span></template
            >
          </n-thing>
        </n-list-item>
        <n-list-item>
          <template #suffix>
            <n-button type="primary" text>Modify</n-button>
          </template>
          <n-thing title="Bound Phone">
            <template #description
              ><span class="text-gray-400">Bound phone: +86189****4877</span></template
            >
          </n-thing>
        </n-list-item>
        <n-list-item>
          <template #suffix>
            <n-button type="primary" text>Set</n-button>
          </template>
          <n-thing title="Security Questions">
            <template #description
              ><span class="text-gray-400"
                >Security questions not set. They help protect account security</span
              ></template
            >
          </n-thing>
        </n-list-item>
        <n-list-item>
          <template #suffix>
            <n-button type="primary" text>Modify</n-button>
          </template>
          <n-thing title="Custom Domain">
            <template #description
              ><span class="text-gray-400">Bound domain: https://www.naiveui.com</span></template
            >
          </n-thing>
        </n-list-item>
      </n-list>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup></script>
