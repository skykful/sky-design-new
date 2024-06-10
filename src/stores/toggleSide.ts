import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToggleSideStore = defineStore(
  'toggleSide',
  () => {
    const isCollapse = ref<boolean>(false)

    return {
      isCollapse
    }
  },
  {
    persist: true
  }
)
