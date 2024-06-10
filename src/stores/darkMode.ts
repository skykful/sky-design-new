import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useDarkStore = defineStore(
  'dark',
  () => {
    const isDark = ref<boolean>(false)
    watch(isDark, (flag) => {
      const html = document.getElementsByTagName('html')[0]
      if (flag) {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    })

    function changeMode() {
      isDark.value = !isDark.value
    }

    return { isDark, changeMode }
  },
  {
    persist: true
  }
)
