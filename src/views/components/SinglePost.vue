<template>
    <div class="post">
        <router-link :to="{name: 'articalDetails', params: { id: post.id} }">
            <h3 :class="{ highlight: post.isHighlight }">{{ post.title }}</h3>
        </router-link>

        <P>{{ snippet }}</P>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '....';
        });

        return { snippet };
    }
}

</script>

<style scoped>
.highlight {
  background-color: red;
  font-size: 24px;
}
</style>
