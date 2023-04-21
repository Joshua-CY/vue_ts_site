<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <input type="text" v-model="search">
  <p>search trem - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  <button @click="stopWatchOnclick">關閉監控</button>
  <Footer></Footer>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { computed, ref, watch} from 'vue';
import Footer from '@/views/components/Footer.vue';

// export default {
//   name: 'Home',
//   setup() {
//     const search = ref('');
//     const names = ref(['mario', 'youshi', 'luggi', 'toad',]);

//     const matchingNames = computed(() => {
//       return names.value.filter((name) => name.includes(search.value))
//     })

//     return {names, search, matchingNames}
//   }
// }

    const search = ref('');
    const names = ref(['mario', 'youshi', 'luggi', 'toad',]);

    const stopWatch = watch(search, () => {
        console.log('watch function...');
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const stopWatchOnclick = () => {
        stopWatch();
    }

</script>
