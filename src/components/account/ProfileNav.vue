<script setup lang="ts">

import IconBio from "@/components/icons/IconBio.vue";
import IconCategory from "@/components/icons/IconCategory.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n();

const items = [
  {
    title: '+11 yrs | Software Engineer ✨️ Node.js + Vue.js',
    icon: IconBio,
  },
  {
    title: 'Software',
    icon: IconCategory,
  },
  {
    title: 'Business address',
    icon: 'mdi-map-marker-outline',
  },
  {
    title: t('Monday') + "&nbsp;&nbsp;&nbsp;" + '09:00 - 18:00',
    icon: 'mdi-clock-time-eight-outline',
  },
  {
    title: 'tarkhasi.sajjad@gmail.com',
    icon: 'mdi-email-outline',
  },
  {
    title: 'https://tarkhasi.ir',
    icon: 'mdi-earth',
  },
  {
    title: 'https://tarkhasi.ir/linkedin',
    icon: 'mdi-earth',
  }
]
</script>

<template>
  <v-navigation-drawer width="511" class="scroll-light">
    <!--  Page Name  -->
    <div class="py-half my-3 px-5 px-5 d-flex justify-space-between align-center">
      <div class="font-size-20 font-weight-medium" style="margin-top: 1px">
        {{ $t('Profile') }}
      </div>
    </div>


    <!-- Images   -->
    <div class="text-center">
      <v-sheet class="bg-background-blue-light d-flex" height="164" width="100%">
      </v-sheet>

      <v-row class="avatar-body">
        <v-col>

        </v-col>

        <v-col>
          <v-avatar size="135" style="border:6px solid rgb(var(--v-theme-background));">
            <v-img src="/avatars/me.JPG"/>
          </v-avatar>
        </v-col>

        <v-col class="d-flex justify-end pr-7 pt-10">
          <v-btn icon flat color="contrast-dark">
            <v-icon size="25">mdi-pencil-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>


    <!--  Account Name    -->
    <div class="d-flex px-4 py-6">
      <div class="opacity-60 pl-4">
        <icon-tools/>
      </div>
      <div class="pl-7">
        <div class="pb-6">
          T A R K H A S I
        </div>
        <div class="font-size-12 text-grey-darken-1">
          {{ $t('ThisNameWillBeVisible') }}
        </div>
      </div>
    </div>

    <!--  Settings    -->
    <template v-for="(item, index) in items" :key="'profile-settings-'+index">
      <div class="d-flex px-4 py-3 justify-space-between align-center">
        <div class="opacity-60 pl-4">
          <component v-if="typeof item.icon != 'string'" :is="item.icon"/>
          <v-icon v-else>{{ item.icon }}</v-icon>
        </div>
        <div class="pl-7 w-100" v-html="item.title"/>

        <v-btn icon flat color="transparent">
          <v-icon size="25" class="opacity-70">mdi-pencil-outline</v-icon>
        </v-btn>
      </div>
    </template>

    <!-- Catalog -->
    <div class="px-9 pt-9">
      <div class="opacity-70 font-size-15">{{ $t('Products') }}</div>
      <div class="text-center py-9 font-size-12 opacity-70">
        <div><v-icon size="25">mdi-alert-outline</v-icon></div>
        <div>{{ $t('UnableToLoadCatalog') }}</div>
      </div>
    </div>

    <v-sheet height="90"/>
  </v-navigation-drawer>
</template>

<style scoped>
.avatar-body {
  margin-top: -105px;
}
</style>
