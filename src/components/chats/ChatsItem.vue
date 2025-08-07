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
      <div
        v-if="data"
        :class="['d-flex pa-3 rounded-12 pointer',(data.active || isHovering?'bg-background-light':null)]"
        v-bind="props"
      >
        <div class="pr-3">
          <v-avatar size="49">
            <v-img :src="data.image"/>
          </v-avatar>
        </div>

        <div class="w-100 text-truncate">
          <!--  Title    -->
          <div class="d-flex justify-space-between">

            <!--  Name and Label          -->
            <div>
              <span class="font-size-16">{{ data.name }}&nbsp;</span>
              <v-icon v-if="data.label?.color" size="18" :color="data.label?.color">mdi-label</v-icon>
            </div>

            <!--  Date          -->
            <div class="font-size-12 text-grey-darken-1">{{ data.sent_at }}</div>
          </div>


          <!--  Message    -->
          <div class="d-flex justify-space-between">
            <div class="d-flex w-100 align-center">
              <div v-if="data.last_message?.user_created == 'me'" class="pr-1">
                <v-icon v-if="data.last_message?.seen" color="primary" size="18">mdi-check-all</v-icon>
                <v-icon v-else>mdi-check-all</v-icon>
              </div>

              <!--  Text            -->
              <v-sheet
                width="100%"
                class="text-left text-truncate bg-transparent w-100 font-size-14 text-grey-darken-1"
                :title="data.last_message?.text"
              >
                {{ data.last_message?.text }}
              </v-sheet>
              <!--  Pin          -->
              <div>
                <v-icon v-if="data.pined" size="20" color="grey-darken-2">mdi-pin-outline</v-icon>
              </div>
            </div>
          </div>
        </div>

      </div>
    </v-hover>
  </div>

</template>

<style scoped>

</style>
