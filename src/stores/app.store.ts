// Utilities
import {defineStore} from 'pinia'
import {Page} from "@/models/enums/page.enum.ts";

export const useAppStore = defineStore('app', {
  state: (): { page: Page } => ({ 
    page: Page.chats,
  }),
  actions: {
    setPage(value: Page | undefined) {
      if(value === undefined) return;
      this.page = value;
    },
    is(value: Page | undefined) {
      return this.page === value;
    }
  }
})
