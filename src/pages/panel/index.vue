 <script lang="ts" setup>

import {useAppStore} from "@/stores/app.ts";
import Chats from "@/components/chats/Chats.vue";
import {Page} from "@/models/enums/page.enum.ts";
import Status from "@/components/status/Status.vue";

const app = useAppStore();

</script>

<template>
  <chats v-if="app.page === Page.chats"/>
  <status v-else-if="app.page === Page.status"/>
</template>
