<script lang="ts" setup>
import IconChats from "@/components/icons/IconChats.vue";
import IconStatus from "@/components/icons/IconStatus.vue";
import IconChannels from "@/components/icons/IconChannels.vue";
import IconCommunities from "@/components/icons/IconCommunities.vue";
import IconAd from "@/components/icons/IconAd.vue";
import {useAppStore} from "@/stores/app.store.ts";
import {Page} from "@/models/enums/page.enum.ts";
import IconTools from "@/components/icons/IconTools.vue";
import {useI18n} from "vue-i18n";

const app = useAppStore();
const {t} = useI18n();

const menu = [
  {
    page: Page.chats,
    icon: IconChats,
    tooltip: t('Chats'),
    badge: 1,
  },
  {
    page: Page.status,
    icon: IconStatus,
    tooltip: t('Status'),
  },
  {
    page: Page.channels,
    icon: IconChannels,
    tooltip: t('Channels'),
  },
  {
    page: Page.communities,
    icon: IconCommunities,
    divider: true,
    tooltip: t('Communities'),
  },
  {
    page: Page.tools,
    icon: IconTools,
    tooltip: t('Tools'),
  },
  {
    page: Page.advertiseOnFacebook,
    icon: IconAd,
    tooltip: t('AdvertiseOnFacebook'),
  },
]
</script>


<template>
  <camera/>

  <!-- Nav -->
  <v-navigation-drawer
    color="background-light-2"
    class="text-center scroll-light"
    width="64"
  >
    <!--  Top  -->
    <template v-for="(item, index) in menu">
      <v-badge color="success" offset-y="20" :content="item.badge" :model-value="!!item.badge">
        <v-btn
          :class="{'mb-1':true, 'mt-3':index === 0, 'opacity-60': !app.is(item.page)}"
          :active="app.is(item.page)"
          icon
          flat
          color="transparent"
          size="40"
          @click="app.setPage(item.page)"
        >
          <component :is="item.icon" :active="app.is(item.page)"/>


          <v-tooltip
            v-if="item.tooltip"
            activator="parent"
            location="start"
            content-class="rounded-20"
          >
            {{ item.tooltip }}
          </v-tooltip>
        </v-btn>
      </v-badge>

      <v-divider v-if="item.divider" class="mx-3 my-2"></v-divider>
    </template>


    <!-- Settings & Account   -->
    <template #append>
      <v-btn
        :active="app.is(Page.settings)"
        :class="{'mb-1':true,  'opacity-60': !app.is(Page.settings)}"
        icon
        flat
        class=" mb-3"
        color="transparent"
        size="40"
        @click="app.setPage(Page.settings)"
      >
        <v-icon v-if="!app.is(Page.settings)">mdi-cog-outline</v-icon>
        <v-icon v-else>mdi-cog</v-icon>

        <v-tooltip
          activator="parent"
          location="start"
          content-class="rounded-20"
        >
          {{ $t('Settings') }}
        </v-tooltip>
      </v-btn>


      <v-btn
        :active="app.is(Page.profile)"
        icon
        flat
        class="mb-4"
        color="transparent"
        size="40"
        @click="app.setPage(Page.profile)"
      >
        <v-avatar
          class="pointer"
          color="grey-darken-1"
          size="28"
        >
          <v-img src="/avatars/me.JPG"></v-img>
        </v-avatar>

        <v-tooltip
          activator="parent"
          location="start"
          content-class="rounded-20"
        >
          {{ $t('Profile') }}
        </v-tooltip>
      </v-btn>

    </template>
  </v-navigation-drawer>


  <!-- Route -->
  <router-view/>

</template>
