<script setup lang="ts">
import ChatsItem from "@/components/chats/ChatsItem.vue";
import chatsData from "@/data/chats.data.ts";

const list = chatsData;
</script>

<template>
  <v-list>
    <chats-item
      v-for="(item, key) in list"
      :key="'chat-list-item-'+key"
      :data="item"
      class="mb-1"
    />
  </v-list>
</template>

<style scoped>

</style>
