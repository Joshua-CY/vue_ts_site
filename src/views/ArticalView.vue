<template>
    <div class="artical">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList :posts="posts"></PostList>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script setup lang="ts">
import PostList from '@/views/components/PostList.vue';
import getPosts from '@/views/composables/getPosts';

    const {posts, error, load} = getPosts();
    load();
</script>
