<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Form Details">
        Forms can also be used to display read-only information besides submitting data.
      </n-card>
    </div>
    <n-card
      :bordered="false"
      title="Basic Information"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-descriptions label-placement="left" class="py-2">
        <n-descriptions-item>
          <template #label>Beneficiary Name</template>
          Ah Jung
        </n-descriptions-item>
        <n-descriptions-item label="Account">NaiveUiAdmin@qq.com</n-descriptions-item>
        <n-descriptions-item label="Payment Type">Alipay</n-descriptions-item>
        <n-descriptions-item label="Payer Account">NaiveUiAdmin@163.com</n-descriptions-item>
        <n-descriptions-item label="Amount">￥1980.00</n-descriptions-item>
        <n-descriptions-item label="Status">
          <n-tag type="success">Received</n-tag>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
    <n-card
      :bordered="false"
      title="Other Information"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-descriptions label-placement="left" class="py-2">
        <n-descriptions-item>
          <template #label>City</template>
          Shenzhen
        </n-descriptions-item>
        <n-descriptions-item label="Gender">Male</n-descriptions-item>
        <n-descriptions-item label="Email">NaiveUiAdmin@qq.com</n-descriptions-item>
        <n-descriptions-item label="Address">Nanshan District, Shenzhen</n-descriptions-item>
        <n-descriptions-item label="Birthday">1991-06-04</n-descriptions-item>
        <n-descriptions-item label="Verification">
          <n-tag type="success">Verified</n-tag>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
    <n-card
      :bordered="false"
      title="Table Information"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>City</th>
            <th>Birthday</th>
            <th width="150">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ah jung</td>
            <td>Male</td>
            <td>Shenzhen</td>
            <td>1993-11-09</td>
            <td>
              <n-space>
                <n-button size="small" type="error">Delete</n-button>
                <n-button size="small" type="info">View</n-button>
              </n-space>
            </td>
          </tr>
          <tr>
            <td>Ximen Feixue</td>
            <td>Male</td>
            <td>Guangzhou</td>
            <td>1991-09-11</td>
            <td>
              <n-space>
                <n-button size="small" type="error">Delete</n-button>
                <n-button size="small" type="info">View</n-button>
              </n-space>
            </td>
          </tr>
          <tr>
            <td>Titan Giant</td>
            <td>Male</td>
            <td>Beijing</td>
            <td>1990-11-03</td>
            <td>
              <n-space>
                <n-button size="small" type="error">Delete</n-button>
                <n-button size="small" type="info">View</n-button>
              </n-space>
            </td>
          </tr>
          <tr>
            <td>Witcher</td>
            <td>Female</td>
            <td>Shanghai</td>
            <td>1992-03-11</td>
            <td>
              <n-space>
                <n-button size="small" type="error">Delete</n-button>
                <n-button size="small" type="info">View</n-button>
              </n-space>
            </td>
          </tr>
        </tbody>
      </n-table>
    </n-card>
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>
