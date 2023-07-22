import { ref } from 'vue';

const getPosts = () => {
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
                { title: 'welcome', body: 'this is article1', id: 1, isHighlight: false},
                { title: 'today', body: 'this is article12', id: 2, isHighlight: true},
            ];
            posts.value = data;

        } catch (err) {
            error.value = err.message;
        }
    };

    return {posts, error, load};
}

export default getPosts;