<template>
    <div class="artical">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList :posts="posts"></PostList>
        </div>
        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>
</template>

<script setup lang="ts">
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
import Spinner from '../components/Spinner.vue';

    const {posts, error, load} = getPosts();
    load();
</script>
