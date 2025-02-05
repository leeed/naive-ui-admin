<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Drag and Drop"> 
        Commonly used for cards, tasks, appointments, workflows, plans, etc.
      </n-card>
    </div>

    <n-alert title="Drag and Drop Demo" type="info" class="mt-4">
      Each card can be dragged vertically to reorder. Different cards can also be dragged between containers. Try it out!
    </n-alert>

    <n-grid
      cols="1 s:2 m:3 l:4 xl:4 2xl:4"
      class="mt-4 proCard"
      responsive="screen"
      :x-gap="12"
      :y-gap="8"
    >
      <n-grid-item>
        <NCard
          title="Backlog"
          :segmented="{ content: true, footer: true }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="info">Month</n-tag>
          </template>

          <Draggable
            class="draggable-ul"
            animation="300"
            :list="demandList"
            group="people"
            itemKey="name"
          >
            <template #item="{ element }">
              <div class="cursor-move draggable-li">
                <n-tag type="info">Feature</n-tag><span class="ml-2">{{ element.name }}</span>
              </div>
            </template>
          </Draggable>
        </NCard>
      </n-grid-item>

      <n-grid-item>
        <NCard
          title="In Development"
          :segmented="{ content: true, footer: true }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="info">Month</n-tag>
          </template>

          <Draggable
            class="draggable-ul"
            animation="300"
            :list="exploitList"
            group="people"
            itemKey="name"
          >
            <template #item="{ element }">
              <div class="cursor-move draggable-li">
                <n-tag type="warning">In Development</n-tag><span class="ml-2">{{ element.name }}</span>
              </div>
            </template>
          </Draggable>
        </NCard>
      </n-grid-item>

      <n-grid-item>
        <NCard
          title="Completed"
          :segmented="{ content: true, footer: true }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="info">Month</n-tag>
          </template>
          <Draggable
            class="draggable-ul"
            animation="300"
            :list="completeList"
            group="people"
            itemKey="name"
          >
            <template #item="{ element }">
              <div class="cursor-move draggable-li">
                <n-tag type="error">Completed</n-tag><span class="ml-2">{{ element.name }}</span>
              </div>
            </template>
          </Draggable>
        </NCard>
      </n-grid-item>

      <n-grid-item>
        <NCard
          title="Approved"
          :segmented="{ content: true, footer: true }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="info">Month</n-tag>
          </template>
          <Draggable
            class="draggable-ul"
            animation="300"
            :list="approvedList"
            group="people"
            itemKey="name"
          >
            <template #item="{ element }">
              <div class="cursor-move draggable-li">
                <n-tag type="success">Approved</n-tag><span class="ml-2">{{ element.name }}</span>
              </div>
            </template>
          </Draggable>
        </NCard>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import Draggable from 'vuedraggable';

  const demandList = reactive([
    { name: 'Appointment form page with reservation information', id: 1 },
    { name: 'Promotional page with ads display', id: 2 },
    { name: 'Product list with stock alert', id: 3 },
    { name: 'Product review feature', id: 4 },
    { name: 'Product image zoom functionality', id: 5 },
    { name: 'Order deletion to recycle bin', id: 6 },
    { name: 'User avatar upload with cropping', id: 7 },
    { name: 'Vue 3.2 setup support?', id: 8 },
  ]);

  const exploitList = reactive([{ name: 'Product image zoom functionality', id: 5 }]);

  const completeList = reactive([{ name: 'Product image zoom functionality', id: 5 }]);

  const approvedList = reactive([{ name: 'Product image zoom functionality', id: 5 }]);
</script>

<style lang="less" scoped>
  .draggable-ul {
    width: 100%;
    overflow: hidden;
    margin-top: -16px;

    .draggable-li {
      width: 100%;
      padding: 16px 10px;
      color: #333;
      border-bottom: 1px solid #efeff5;
    }
  }
</style>
