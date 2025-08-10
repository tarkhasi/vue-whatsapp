<script setup lang="ts">


import {useI18n} from "vue-i18n";
import IconTools from "@/components/icons/IconTools.vue";
import IconHelp from "@/components/icons/IconHelp.vue";
import IconPrivacy from "@/components/icons/IconPrivacy.vue";
import IconChats from "@/components/icons/IconChats.vue";
import IconNotifications from "@/components/icons/IconNotifications.vue";
import IconKeyboard from "@/components/icons/IconKeyboard.vue";
import IconAccount from "@/components/icons/IconAccount.vue";

const {t} = useI18n();

const settingsItems = [
  {
    title: t('BusinessProfile'),
    icon: IconTools,
  },
  {
    title: t('Account'),
    subtitle: t('AccountSubtitle'),
    icon: IconAccount,
  },
  {
    title: t('Privacy'),
    subtitle: t('PrivacySubtitle'),
    icon: IconPrivacy,
  },
  {
    title: t('Chats'),
    subtitle: t('ChatsSubtitle'),
    icon: IconChats,
  },
  {
    title: t('Notifications'),
    subtitle: t('MessageNotifications'),
    icon: IconNotifications,
  },
  {
    title: t('KeyboardShortcuts'),
    subtitle: t('QuickActions'),
    icon: IconKeyboard,
  },
  {
    title: t('Help'),
    subtitle: t('HelpCenter'),
    icon: IconHelp,
  },
]

</script>

<template>
  <v-navigation-drawer width="511">
    <!--  Page Name  -->
    <div class="py-half my-3 px-5 px-5 d-flex justify-space-between align-center">
      <div class="font-size-20 font-weight-medium" style="margin-top: 1px">
        {{ $t('Settings') }}
      </div>
    </div>


    <!--  Search  -->
    <div class="pb-1 px-5">
      <v-text-field
        :placeholder="$t('SearchSettings')"
        variant="solo-filled"
        class="text-field-rounded"
        density="compact"
        hide-details
        flat
      >
        <template #prepend-inner>
          <v-icon size="19">mdi-magnify</v-icon>
        </template>
      </v-text-field>
    </div>


    <div class="px-3 py-5">
      <!--  Account  -->
      <v-list-item title="T A R K H A S I" :subtitle="$t('HeyThere')" @click="()=>{}" class="rounded-12 py-2">
        <template #prepend>
          <v-avatar size="64">
            <v-img src="/avatars/me.JPG"></v-img>
          </v-avatar>
        </template>
      </v-list-item>

      <div class="px-3">
        <v-divider class="my-3"/>
      </div>

      <v-list>
        <template v-for="item in settingsItems" :key="item.value">
          <v-list-item
            :subtitle="item.subtitle"
            :title="item.title"
            class="rounded-12 py-4"
            @click="()=>{}"
          >
            <template #prepend>
              <component class="mr-6 opacity-60" :is="item.icon"/>
            </template>

            <template #title>
              <div class="font-size-16 font-weight-regular text-contrast-dark">{{ item.title }}</div>
            </template>
          </v-list-item>
        </template>

      </v-list>

    </div>

  </v-navigation-drawer>
</template>

<style scoped>

</style>
