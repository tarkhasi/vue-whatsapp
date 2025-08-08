<script setup lang="ts">

import IconPlus from "@/components/icons/IconPlus.vue";
</script>

<template>
  <v-navigation-drawer width="511">
    <!--  Page Name  -->
    <div class="py-half my-3 px-5 px-5 d-flex justify-space-between align-center">
      <div class="font-size-20 font-weight-medium" style="margin-top: 1px">
        {{ $t('Status') }}
      </div>
      <div class="d-flex">
        <v-btn icon flat class="pa-2" width="auto" height="auto">
          <icon-plus/>
        </v-btn>
        <v-sheet width="10"/>
        <v-btn icon flat class="pa-2" width="auto" height="auto">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
    </div>

    <!--  List  -->
    <div class="px-half">
      <status-list class="px-2"/>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
