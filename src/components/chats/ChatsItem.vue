<script setup lang="ts">
import TextWithEmoji from "@/components/app/TextWithEmoji.vue";

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
        :class="['d-flex pa-3  rounded-12 pointer',(data.active || isHovering?'bg-background-light':null)]"
        v-bind="props"
      >
        <div class="pr-3">
          <v-avatar v-if="data.image" size="49">
            <v-img :src="data.image"/>
          </v-avatar>
          <v-avatar v-else size="49" class="bg-grey-lighten-4 border-light-2">
            <icon-men/>
          </v-avatar>
        </div>

        <div class="w-100 text-truncate">
          <!--  Title    -->
          <div class="d-flex justify-space-between ">

            <!--  Name and Label          -->
            <div>
              <span class="font-size-16 ">{{ data.name }}&nbsp;</span>
              <v-icon v-if="data.label?.color" size="18" :color="data.label?.color">
                {{ !data.label?.multi ? 'mdi-label' : 'mdi-label-multiple'}}
              </v-icon>
            </div>

            <!--  Date          -->
            <div :class="['font-size-12', (data.last_message?.status === 'new' ? 'text-green-darken-1 font-weight-medium': 'text-grey-darken-1')]">
              {{ data.sent_at }}
            </div>
          </div>


          <!--  Message    -->
          <div class="d-flex justify-space-between">
            <div class="d-flex w-100 align-center">

              <!--   Seen           -->
              <div v-if="data.last_message?.user_created == 'current_user'" class="pr-1">
                <v-icon v-if="data.last_message?.status === 'seen'" color="primary" size="18">mdi-check-all</v-icon>
                <v-icon v-else-if="data.last_message?.status === 'waiting_delivery'" size="18" class="opacity-60">
                  mdi-check
                </v-icon>
                <v-icon v-else size="18">mdi-check-all</v-icon>
              </div>

              <!--   Deleted           -->
              <div v-if="data.last_message?.status === 'deleted'" class="pr-1">
                <v-icon  color="grey-darken-2"  size="18">mdi-cancel</v-icon>
              </div>



              <!--  Text            -->
              <v-sheet
                width="100%"
                class="text-left mt-1 text-truncate bg-transparent w-100 font-size-14 text-grey-darken-1"
                :title="data.last_message?.text"
              >
                <text-with-emoji :data="data.last_message?.text"/>
              </v-sheet>


              <!--  Pin and New          -->
              <div>
                <v-sheet
                  v-if="data.new_messages_count"
                  min-width="20"
                  min-height="20"
                  class="bg-success  d-flex align-center justify-center px-1 rounded-20 font-size-12"
                >
                  {{ data.new_messages_count }}
                </v-sheet>
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
