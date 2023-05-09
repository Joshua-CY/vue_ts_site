<template>
    <div class="artical">
        <PostList :posts="posts"></PostList>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PostList from '@/views/components/PostList.vue';

    const posts = ref([
        { title: 'welcome', body: 'this is article1', id: 1},
        { title: 'today', body: 'this is article12', id: 2},
    ]);

</script>
