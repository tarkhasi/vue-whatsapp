<script setup lang="ts">

import IconPlus from "@/components/icons/IconPlus.vue";
</script>

<template>
  <v-navigation-drawer width="511">
    <!--  Page Name  -->
    <div class="py-half my-3 px-5 px-5 d-flex justify-space-between align-center">
      <div class="font-size-20 font-weight-medium" style="margin-top: 1px">
        {{ $t('Channels') }}
      </div>
      <div class="d-flex">
        <v-btn icon flat class="pa-2" width="auto" height="auto">
          <icon-plus/>
        </v-btn>
      </div>
    </div>

    <!--  Title  -->
    <div class="text-center mb-3">
      <div class="font-size-19 pb-2">{{$t('ChannelsStayUpdate')}}</div>
      <div class="font-size-17 opacity-70">{{$t('ChannelsStayUpdateSubtitle')}}</div>
    </div>

    <!--  List  -->
    <div class="px-half">
      <channels-list class="px-2"/>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
