<script setup lang="ts">
import StatusItem from "@/components/status/StatusItem.vue";
import statusData from "@/data/status.data.ts";

const list = statusData;
</script>

<template>
  <v-list>
    <status-item
      v-for="(item, key) in list"
      :key="'status-list-item-'+key"
      :data="item"
      class="mb-1"
    />
  </v-list>
</template>

<style scoped>

</style>
