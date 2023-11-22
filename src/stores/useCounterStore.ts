import { defineStore } from 'pinia';

// 使用options API模式定義
export const useCounterStoreV2 = defineStore('counter', {
    state: () => {
        return { count: 0 }
    },
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
        reduce() {
            this.count--;
        }
    },
})