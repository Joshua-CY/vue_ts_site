<template>
  <div class="detail">
    <h1>This is an detail page</h1>
    <h2>ref & setup 基本使用方法</h2>
    <h2>{{ counter }}</h2>
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
  <Footer></Footer>
</template>

<style>
@media (min-width: 1024px) {
  .detail {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import Footer from '@/views/components/Footer.vue';

const counter = ref(0)

const add = (): void => {
      counter.value = counter.value + 1
    }

const minus = (): void => {
  counter.value = counter.value - 1
}

</script>