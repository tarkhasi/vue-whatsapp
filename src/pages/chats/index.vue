<template>
  <!-- Chats List -->
  <chats-nav/>

  <v-main>
    <chats-default/>
  </v-main>

</template>

<script lang="ts" setup>

import ChatsNav from "@/components/chats/ChatsNav.vue";
import ChatsDefault from "@/components/chats/ChatsDefault.vue";
</script>
