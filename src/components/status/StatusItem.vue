<script setup lang="ts">

defineProps({
  'data': {
    type: Object,
  }
})
</script>

<template>
  <div v-if="data">
    <v-list-item class="px-3">
      <template #prepend>
        <v-badge color="success" offset-y="30" content="+" width="20">
          <v-avatar v-if="data.image" size="40">
            <v-img :src="data.image"/>
          </v-avatar>
          <v-avatar v-else size="49" class="bg-grey-lighten-4 border-light-2">
            <icon-men/>
          </v-avatar>
        </v-badge>
      </template>

      <template #title>
        <span class="font-size-16 ">{{ data.name }}</span>
      </template>
      <template #subtitle>
        <span class="font-size-13 ">{{ $t('AddStatusText') }}</span>
      </template>
    </v-list-item>
  </div>

</template>

<style>
.v-badge__badge.v-theme--light {
  border: 2px solid rgb(var(--v-theme-background))  !important;;
}
</style>
