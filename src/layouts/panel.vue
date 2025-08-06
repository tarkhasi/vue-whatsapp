<template>

  <!-- First Nav -->
  <v-navigation-drawer
    color="grey-lighten-3"
    width="64"
  >
    <v-avatar
      class="d-block text-center mx-auto mt-3 mb-1"
      color="grey-darken-1"
      size="40"
    >
      <v-icon size="32"></v-icon>
    </v-avatar>
    <v-avatar
      class="d-block text-center mx-auto mb-1"
      color="grey-darken-1"
      size="40"
    >
      <v-icon size="32"></v-icon>
    </v-avatar>
    <v-avatar
      class="d-block text-center mx-auto mb-1"
      color="grey-darken-1"
      size="40"
    >
      <v-icon size="32"></v-icon>
    </v-avatar>
    <v-avatar
      class="d-block text-center mx-auto mb-1"
      color="grey-darken-1"
      size="40"
    >
      <v-icon size="32"></v-icon>
    </v-avatar>

    <v-divider class="mx-3 my-2"></v-divider>

    <v-avatar
      class="d-block text-center mx-auto mb-1"
      color="grey-darken-1"
      size="40"
    >
      <v-icon size="32"></v-icon>
    </v-avatar>
    <v-avatar
      class="d-block text-center mx-auto mb-1"
      color="grey-darken-1"
      size="40"
    >
      <v-icon size="32"></v-icon>
    </v-avatar>

    <!-- Account   -->
    <template #append>
      <v-avatar
        class="d-block text-center mx-auto mb-1"
        color="grey-darken-1"
        size="40"
      >
        <v-icon size="32"></v-icon>
      </v-avatar>

      <v-avatar
        class="d-block text-center mx-auto mb-4"
        color="grey-darken-1"
        size="40"
      ></v-avatar>
    </template>
  </v-navigation-drawer>

  <!-- Second Nav -->
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
      <v-text-field variant="magnify" flat hide-details density="compact" prepend-icon="mdi-search"/>
    </div>

    <v-sheet
      color="grey-lighten-5"
      height="128"
      width="100%"
    ></v-sheet>

    <v-list>
      <v-list-item
        v-for="n in 5"
        :key="n"
        :title="`Item ${ n }`"
        link
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- App Bar -->
  <v-app-bar
    class="px-3"
    color="grey-lighten-4"
    height="72"
    flat
  >

    <v-spacer></v-spacer>

    <v-responsive max-width="156">
      <v-text-field
        bg-color="grey-lighten-1"
        density="compact"
        rounded="pill"
        variant="solo-filled"
        flat
        hide-details
      ></v-text-field>
    </v-responsive>
  </v-app-bar>


  <!-- Main -->
  <v-main>
    <router-view/>
  </v-main>


  <v-footer
    height="72"
    app
  >
    <v-text-field
      bg-color="grey-lighten-1"
      class="overflow-hidden"
      density="compact"
      rounded="pill"
      variant="solo-filled"
      flat
      hide-details
    ></v-text-field>
  </v-footer>
</template>

<script lang="ts" setup>
//
import Logo from "@/components/app/Logo.vue";
import IconNewChat from "@/components/icons/IconNewChat.vue";
</script>
