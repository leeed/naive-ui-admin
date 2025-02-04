<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Dashboard">
        <n-grid cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen">
          <n-gi>
            <div class="flex items-center">
              <div>
                <n-avatar circle :size="64" :src="schoolboy" />
              </div>
              <div>
                <p class="px-4 text-xl">Good morning, Ah Jung, start your day's work!</p>
                <p class="px-4 text-gray-400">Today will be overcast with heavy rain later, 15℃ - 25℃, remember to bring an umbrella when you go out.</p>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="flex justify-end w-full">
              <div class="flex flex-col justify-center flex-1 text-right">
                <span class="text-secondary">Projects</span>
                <span class="text-2xl">16</span>
              </div>
              <div class="flex flex-col justify-center flex-1 text-right">
                <span class="text-secondary">To-do</span>
                <span class="text-2xl">3/15</span>
              </div>
              <div class="flex flex-col justify-center flex-1 text-right">
                <span class="text-secondary">Messages</span>
                <span class="text-2xl">35</span>
              </div>
            </div>
          </n-gi>
        </n-grid>
      </n-card>
    </div>
    <n-grid class="mt-4" cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen" :x-gap="12" :y-gap="9">
      <n-gi>
        <n-card
          :segmented="{ content: true }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
          title="Projects"
        >
          <div class="flex flex-wrap project-card">
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <GithubOutlined />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Github</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400">
                It is a hosting platform for open source and private software projects.
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> Open Source Enthusiast, 2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#42b983">
                    <LogoVue />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Vue</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> Progressive JavaScript Framework </div>
              <div class="flex h-10 mt-2 text-gray-400"> Keep learning even if it's hard, 2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#e44c27">
                    <Html5Outlined />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Html5</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> HTML5 is the next generation standard of the internet. </div>
              <div class="flex h-10 mt-2 text-gray-400"> Coding is also an art, 2021-04-01 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#dd0031">
                    <LogoAngular />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Angular</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> Modern web development platform, loved by millions of fans. </div>
              <div class="flex h-10 mt-2 text-gray-400"> Loyal Fan, 2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#61dafb">
                    <LogoReact />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">React</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> A JavaScript library for building user interfaces. </div>
              <div class="flex h-10 mt-2 text-gray-400"> Tech Guru, 2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <LogoJavascript />
                  </n-icon>
                </span>
                <span class="ml-4 text-lg">Js</span>
              </div>
              <div class="flex h-10 mt-2 text-gray-400"> The path is made by walking, not by dreaming. </div>
              <div class="flex h-10 mt-2 text-gray-400"> Architecture Team, 2021-07-04 </div>
            </n-card>
          </div>
        </n-card>

        <n-card
          :segmented="{ content: true }"
          content-style="padding-top: 0;padding-bottom: 0;"
          :bordered="false"
          size="small"
          title="Activities"
          class="mt-4"
        >
          <template #header-extra><a href="javascript:;">More</a></template>
          <n-list>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Ah Jung just made some quick edits to the dashboard page, it's somewhat presentable now!">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 22:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Ah Jung created the project naive-ui-admin in the Open Source Group?">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 09:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="@It界风清扬 submitted a bug to naive-ui-admin, take a look when you have time!">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 22:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="To those in the tech department, a reminder: no slacking off, no slacking off, no slacking off!">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 09:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="If you don't slack off at work, what's the difference between you and a salted fish (I didn't really say that)!">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 20:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Page transitions actually support caching, but with added transition effects, it looks like it's re-rendering">
                <template #description>
                  <p class="text-gray-400">
                    <n-input type="text" placeholder="Don't believe it? Try typing something." />
                  </p>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card
          :segmented="{ content: true }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
          title="Quick Actions"
        >
          <div class="flex flex-wrap project-card">
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#68c755">
                    <DashboardOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Dashboard</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#fab251">
                    <ProfileOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">List</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#1890ff">
                    <FileProtectOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Form</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#f06b96">
                    <ApartmentOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Permission Management</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#7238d1">
                    <SettingOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">System Management</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="">
                    <DashboardOutlined />
                  </n-icon>
                </span>
                <span class="text-center text-lx">Dashboard</span>
              </div>
            </n-card>
          </div>
        </n-card>
        <n-card :segmented="{ content: true }" :bordered="false" size="small" class="mt-4">
          <img src="~@/assets/images/Business.svg" class="w-full" />
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
  export default { name: 'DashboardWorkplace' };
</script>

<script lang="ts" setup>
  import schoolboy from '@/assets/images/schoolboy.png';
  import {
    GithubOutlined,
    DashboardOutlined,
    ProfileOutlined,
    FileProtectOutlined,
    SettingOutlined,
    ApartmentOutlined,
    Html5Outlined,
  } from '@vicons/antd';
  import { LogoVue, LogoAngular, LogoReact, LogoJavascript } from '@vicons/ionicons5';
</script>

<style lang="less" scoped>
  .project-card {
    margin-right: -6px;

    &-item {
      margin: -1px;
      width: 33.333333%;
    }
  }
</style>
