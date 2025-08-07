<script lang="ts" setup>
import IconChats from "@/components/icons/IconChats.vue";
import IconStatus from "@/components/icons/IconStatus.vue";
import IconChannels from "@/components/icons/IconChannels.vue";
import IconCommunities from "@/components/icons/IconCommunities.vue";
import IconAd from "@/components/icons/IconAd.vue";
import {useAppStore} from "@/stores/app.ts";
import {Page} from "@/models/enums/page.enum.ts";
import IconTools from "@/components/icons/IconTools.vue";

const app = useAppStore();

const menu = [
  {
    page: Page.chats,
    icon: IconChats,
  },
  {
    page: Page.status,
    icon: IconStatus,
  },
  {
    page: Page.channels,
    icon: IconChannels,
  },
  {
    page: Page.communities,
    icon: IconCommunities,
    divider: true,
  },
  {
    page: Page.tools,
    icon: IconTools,
  },
  {
    page: Page.advertiseOnFacebook,
    icon: IconAd,
  },
]
</script>


<template>

  <!-- Nav -->
  <v-navigation-drawer
    color="background-light-2"
    class="text-center"
    width="64"
  >
    <template v-for="(item, index) in menu">
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
      </v-btn>
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
      </v-btn>

    </template>
  </v-navigation-drawer>


  <!-- Route -->
  <router-view/>

</template>
