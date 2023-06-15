<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <h3 :class="{ highlight: post.isHighlight }">{{ post.title }}</h3>
            <h6>{{ post.body }}</h6>
        </div>
    </div>
</template>


<script lang="ts">
// script 裡面放setup就不能使用 export default 等ES5寫法
import { ref } from 'vue';

export default {
    props: ['posts']
}

</script>


<style scoped>
.highlight {
  background-color: red;
  font-size: 24px;
}
</style>