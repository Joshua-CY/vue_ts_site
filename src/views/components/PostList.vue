<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <!-- <h3 :class="{ highlight: post.isHighlight }">{{ post.title }}</h3>
            <h6>{{ post.body }}</h6> -->
            <SinglePost :post="post"></SinglePost>
        </div>
    </div>
</template>


<script lang="ts">
import SinglePost from '@/views/components/SinglePost.vue';
// script 裡面放setup就不能使用 export default 等ES5寫法。設置props還是OK

export default {
    props: ['posts'],
    components: { SinglePost }
}

</script>