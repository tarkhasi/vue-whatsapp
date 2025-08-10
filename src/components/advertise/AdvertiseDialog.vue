<script setup lang="ts">
import {useAppStore} from "@/stores/app.store.ts";

const app = useAppStore();
</script>

<template>
  <v-dialog v-model="app.dialog_advertise" max-width="500" class="mx-auto">
    <v-card class="rounded-20 bg-background font-size-14 pa-6">
      <div>
        <v-img src="/images/ad.JPG" max-width="220" class="mx-auto pt-3"/>
        <div class="font-size-20 text-center pb-4">{{$t('AdvertiseTitle')}}</div>
        <div class="mb-6">{{$t('AdvertiseDescription')}}</div>

        <div class="px-4 mb-8">
          <div class="d-flex align-center">
            <svg viewBox="0 0 20 16" height="25" width="25" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>business-reach</title><path d="M7.83317 7.99992L6.49984 12.4999L5.1665 7.99992L0.666504 6.66658L5.1665 5.33325L6.49984 0.833252L7.83317 5.33325L12.3332 6.66658L7.83317 7.99992ZM13.1665 11.8333L16.4998 9.99992L14.6665 13.3333L16.4998 16.6666L13.1665 14.8333L9.83317 16.6666L11.6665 13.3333L9.83317 9.99992L13.1665 11.8333ZM7.33317 13.3333L5.9165 15.8333L7.33317 18.3333L4.83317 16.9166L2.33317 18.3333L3.74984 15.8333L2.33317 13.3333L4.83317 14.7499L7.33317 13.3333Z" fill="currentColor"></path></svg>
            <div class="pl-4">{{$t('AdvertiseFeatures.1')}}</div>
          </div>
          <div class="d-flex align-center py-4">
            <svg viewBox="0 0 20 16" height="25" width="25" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>business-ad-budget</title><path d="M15.8335 8.66658V1.99992C15.8335 1.08325 15.0835 0.333252 14.1668 0.333252H2.50016C1.5835 0.333252 0.833496 1.08325 0.833496 1.99992V8.66658C0.833496 9.58325 1.5835 10.3333 2.50016 10.3333H14.1668C15.0835 10.3333 15.8335 9.58325 15.8335 8.66658ZM8.3335 7.83325C6.95016 7.83325 5.8335 6.71659 5.8335 5.33325C5.8335 3.94992 6.95016 2.83325 8.3335 2.83325C9.71683 2.83325 10.8335 3.94992 10.8335 5.33325C10.8335 6.71659 9.71683 7.83325 8.3335 7.83325ZM19.1668 2.83325V11.9999C19.1668 12.9166 18.4168 13.6666 17.5002 13.6666H3.3335V11.9999H17.5002V2.83325H19.1668Z" fill="currentColor"></path></svg>
            <div class="pl-4">{{$t('AdvertiseFeatures.2')}}</div>
          </div>

          <div class="d-flex align-center">
            <svg viewBox="0 0 20 16" height="25" width="25" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>business-pauseads</title><path d="M0.5 12.1667V13.8333H5.5V12.1667H0.5ZM0.5 2.16667V3.83333H8.83333V2.16667H0.5ZM8.83333 15.5V13.8333H15.5V12.1667H8.83333V10.5H7.16667V15.5H8.83333ZM3.83333 5.5V7.16667H0.5V8.83333H3.83333V10.5H5.5V5.5H3.83333ZM15.5 8.83333V7.16667H7.16667V8.83333H15.5ZM10.5 5.5H12.1667V3.83333H15.5V2.16667H12.1667V0.5H10.5V5.5Z" fill="currentColor"></path></svg>
            <div class="pl-4">{{$t('AdvertiseFeatures.3')}}</div>
          </div>
        </div>

        <div class="mb-12 pb-4">{{$t('AdvertiseFooter')}} <span class="text-success font-weight-bold">{{$t('LearnMore')}}</span></div>

        <div class="d-flex justify-end">
          <v-btn flat class="rounded-20 mr-2" color="grey-lighten-4" @click="app.setAdvertiseDialog(false)">{{$t('Cancel')}}</v-btn>
          <v-btn color="contrast-dark" flat class="rounded-20">{{$t('ContinueInFacebook')}}</v-btn>
        </div>

      </div>
    </v-card>
  </v-dialog>
</template>
