<script setup lang="ts">

</script>

<template>
  <v-main>
    <div class="bg-background-light-2 h-100 text-center d-flex align-center justify-center w-100">
      <v-sheet class="bg-transparent" max-width="550">
        <div class="mb-7 pb-half opacity-20">

        </div>
        <h1 class="font-size-32 font-weight-thin mb-3">{{ $t('CreateCommunities') }}</h1>
        <div class="font-size-14 opacity-70">{{ $t('CreateCommunitiesSubtitle') }}</div>
      </v-sheet>
    </div>
  </v-main>

  <v-footer
    class="bg-background-light-2"
    height="72"
    app
  >
    <div class="text-grey-darken-2 font-size-16 text-center w-100">
      <v-icon color="grey-darken-3" size="18">mdi-lock-outline</v-icon>
      {{ $t('ChatsDefaultFooter') }}
    </div>
  </v-footer>
</template>

<style scoped>

</style>
