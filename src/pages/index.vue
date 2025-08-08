<script lang="ts" setup>
import {useAppStore} from "@/stores/app.store.ts";
import {Page} from "@/models/enums/page.enum.ts";
import {defineAsyncComponent} from "vue";

const app = useAppStore();

const pagesMap: any = {
  [Page.chats]: defineAsyncComponent(() => import("@/components/chats/Chats.vue")),
  [Page.status]: defineAsyncComponent(() => import("@/components/status/Status.vue")),
  [Page.channels]: defineAsyncComponent(() => import("@/components/channels/Channels.vue")),
  [Page.communities]: defineAsyncComponent(() => import("@/components/communities/Communities.vue")),
  [Page.tools]: defineAsyncComponent(() => import("@/components/tools/Tools.vue")),
};
</script>

<template>
  <Suspense>
    <component :is="pagesMap[app.page]" :key="app.page"/>
  </Suspense>
</template>
