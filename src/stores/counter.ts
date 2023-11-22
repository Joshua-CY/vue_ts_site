import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 使用composition API模式定義store
export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function reduce() {
    count.value--
  }

  return { count, doubleCount, increment, reduce }
})
