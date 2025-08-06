<script setup lang="ts">

import IconNewChat from "@/components/icons/IconNewChat.vue";
import Logo from "@/components/app/Logo.vue";
import ChatsList from "@/components/chats/ChatsList.vue";
</script>

<template>
  <v-navigation-drawer width="511">
    <!--  App Name  -->
    <div class="py-half my-3 px-5 px-5 d-flex justify-space-between align-center">
      <div style="margin-top: 1px">
        <logo/>
      </div>
      <div class="d-flex">
        <v-btn icon flat class="pa-2" width="auto" height="auto">
          <icon-new-chat/>
        </v-btn>
        <v-sheet width="10"/>
        <v-btn icon flat class="pa-2" width="auto" height="auto">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
    </div>

    <!--  Search  -->
    <div class="pb-1 px-5">
      <v-text-field
        :placeholder="$t('SearchPlaceholder')"
        variant="solo-filled"
        class="text-field-rounded"
        density="compact"
        hide-details
        flat
      >
        <template #prepend-inner>
          <v-icon size="19">mdi-magnify</v-icon>
        </template>
      </v-text-field>
    </div>

    <!--  Categories  -->
    <div class="d-flex px-5">
      <v-chip variant="outlined">
        {{ $t('All') }}
      </v-chip>
      <v-chip variant="outlined">
        {{ $t('Unread') }}
      </v-chip>
      <v-chip variant="outlined">
        {{ $t('Favorites') }}
      </v-chip>
      <v-chip variant="outlined">
        {{ $t('Groups') }}
      </v-chip>
      <v-chip variant="outlined">
        {{ $t('Labels') }}
      </v-chip>
    </div>

    <div class="px-half">
      <chats-list class="px-2"/>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
