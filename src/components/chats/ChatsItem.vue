<script setup lang="ts">
defineProps({
  'data': {
    type: Object,
  }
})
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <div v-if="data" :class="['d-flex justify-space-between pa-3 rounded-12 pointer',(data.active || isHovering?'bg-background-light':null)]" v-bind="props">
        <div>
          <v-avatar size="49">
            <v-img :src="data.image"/>
          </v-avatar>
        </div>
        <div class="w-100">
          <!--  Title    -->
          <div class="d-flex justify-space-between">
            <div>
              {{ data.name }}
              <v-icon size="18">mdi-label</v-icon>
            </div>
            <div>{{ data.sent_at }}</div>
          </div>

          <!--  Message    -->
          <div class="d-flex justify-space-between">
            <div>
              <v-icon v-if="data.last_message?.seen" color="primary" size="18">mdi-check-all</v-icon>
              <v-icon v-else>mdi-check-all</v-icon>
            </div>
            <div class="text-left w-100">
              {{ data.last_message?.text }}
            </div>
            <v-icon>mdi-pin-outline</v-icon>
          </div>
        </div>
      </div>
    </v-hover>
  </div>

</template>

<style scoped>

</style>
