<script setup lang="ts">
import {useI18n} from "vue-i18n";
import IconTools from "@/components/icons/IconTools.vue";
import IconCatalog from "@/components/icons/IconCatalog.vue";
import IconAd from "@/components/icons/IconAd.vue";
import IconQuick from "@/components/icons/IconQuick.vue";
import IconHelp from "@/components/icons/IconHelp.vue";
import IconLabel from "@/components/icons/IconLabel.vue";


const {t} = useI18n();

const items = [
  {
    type: 'subheader',
    title: t('BusinessTools'),
  },
  {
    title: t('BusinessProfile'),
    subtitle: t('BusinessProfileSubtitle'),
    icon: IconTools,
  },
  {
    title: t('Catalog'),
    subtitle: t('CatalogSubtitle'),
    icon: IconCatalog,
  },
  {
    type: 'divider',
  },
  {
    type: 'subheader',
    title: t('ReachMoreCustomers'),
  },
  {
    title: t('Advertise'),
    subtitle: t('AdvertiseSubtitle'),
    icon: IconAd,
  },
  {
    type: 'divider',
  },
  {
    type: 'subheader',
    title: t('Messaging'),
  },
  {
    title: t('QuickReplies'),
    subtitle: t('QuickRepliesSubtitle'),
    icon: IconQuick,
  },
  {
    title: t('Labels'),
    subtitle: t('LabelsSubtitle'),
    icon: IconLabel,
  },
  {
    type: 'divider',
  },
  {
    title: t('BusinessHelpCenter'),
    subtitle: t('BusinessHelpCenterSubtitle'),
    icon: IconHelp,
  },
]

</script>

<template>
  <v-navigation-drawer width="511">
    <!--  Page Name  -->
    <div class="py-half my-3 px-5 px-5 d-flex justify-space-between align-center">
      <div class="font-size-20 font-weight-medium" style="margin-top: 1px">
        {{ $t('BusinessTools') }}
      </div>
    </div>

    <v-list
    >
      <template v-for="(item, index) in items" :key="'tools-nav-'+index">
        <v-divider v-if="item.type === 'divider'"/>

        <v-list-subheader v-else-if="item.type === 'subheader'" class="text-success">
          <div class="px-2">{{ item.title }}</div>
        </v-list-subheader>

        <v-list-item
            v-else
            :subtitle="item.subtitle"
            :title="item.title"
            class="py-4 px-6"
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

  </v-navigation-drawer>
</template>

<style scoped>

</style>
