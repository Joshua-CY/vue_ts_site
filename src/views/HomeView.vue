<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Footer from '@/views/components/Footer.vue';
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="home">
      <h1>This is an home page</h1>
    </div>
    <Footer></Footer>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
