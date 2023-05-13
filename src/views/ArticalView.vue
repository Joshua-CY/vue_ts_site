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
import { ref } from 'vue';
import PostList from '@/views/components/PostList.vue';

    // const posts = ref([
    //     { title: 'welcome', body: 'this is article1', id: 1},
    //     { title: 'today', body: 'this is article12', id: 2},
    // ]);

    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            // let data = await fetch('http://localhost:8888/posts');

            // if(!data.ok) {
            //     throw Error('no data avilible!');
            // }

            // posts.value = await data.json();

            
            /**
            * 因為json-server在docker啟動有問題，所以先寫死測試。
            */
            let data = [
                { title: 'welcome', body: 'this is article1', id: 1},
                { title: 'today', body: 'this is article12', id: 2},
            ];
            posts.value = data;

        } catch (err) {
            error.value = err.message;
        }
    };

    load();
</script>
