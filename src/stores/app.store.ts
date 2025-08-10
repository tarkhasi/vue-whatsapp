// Utilities
import {defineStore} from 'pinia'
import {Page} from "@/models/enums/page.enum.ts";

export const useAppStore = defineStore('app', {
  state: (): {
    page: Page,
    dialog_advertise: boolean,
  } => ({
    page: Page.chats,
    dialog_advertise: false,
  }),
  actions: {
    setPage(value: Page | undefined) {
      if (value === undefined) return;
      if (value === Page.advertiseOnFacebook) return this.setAdvertiseDialog(true);
      this.page = value;
    },
    is(value: Page | undefined) {
      return this.page === value;
    },
    setAdvertiseDialog(value: boolean) {
      this.dialog_advertise = value;
    }
  }
})
