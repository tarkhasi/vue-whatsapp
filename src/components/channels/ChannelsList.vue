<script setup lang="ts">
import channelsData from "@/data/channels.data.ts";

const list = channelsData;
</script>

<template>
  <v-list class="mb-2">
    <channels-item
      v-for="(item, key) in list"
      :key="'channels-list-item-'+key"
      :data="item"
      class="mb-1"
    />
  </v-list>

  <div class="text-center">
    <v-btn class="rounded-20 px-6 py-2" color="black" flat min-height="auto" height="auto">
      <div class="py-half">
        {{$t('DiscoverMore')}}
      </div>
    </v-btn>
  </div>
</template>

<style scoped>

</style>
