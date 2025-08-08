<script setup lang="ts">

defineProps({
  'data': {
    type: Object,
  }
})
</script>

<template>
  <div v-if="data">
    <v-hover v-slot="{ isHovering, props }">
      <v-list-item
        :class="['px-3 py-3 rounded-12 pointer',(data.active || isHovering?'bg-background-light':null)]"
        v-bind="props"
      >
        <template #prepend>
          <v-avatar v-if="data.image" size="49">
            <v-img :src="data.image"/>
          </v-avatar>
        </template>

        <template #title>
          <text-with-emoji class="font-size-16 " :data="data.name"/>
        </template>

        <template #subtitle>
          <span class="font-size-17 ">{{ data.followers }} {{ $t('Followers') }}</span>
        </template>

        <template #append>
          <v-hover v-slot="{ isHovering, props }">
            <v-btn variant="outlined" :class="['font-weight-regular px-4 py-2 rounded-20 border-light text-success', (isHovering ? 'button-shadow':'')]" min-height="auto" height="auto" v-bind="props">
              <div class="py-half">{{$t('Follow')}}</div>
            </v-btn>
          </v-hover>
        </template>
      </v-list-item>
    </v-hover>
  </div>

</template>

<style>
.button-shadow{
  box-shadow: 0px 0px 9px rgb(var(--v-theme-background-dark-1)) !important;
}
</style>
