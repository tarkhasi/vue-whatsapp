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



  <!-- Route -->
  <router-view/>

</template>

<script lang="ts" setup>
//
import Logo from "@/components/app/Logo.vue";
import IconNewChat from "@/components/icons/IconNewChat.vue";
</script>
