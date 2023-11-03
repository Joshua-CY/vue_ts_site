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
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 2000);
            });

            // let data = await fetch('http://localhost:8888/posts');

            // if(!data.ok) {
            //     throw Error('no data avilible!');
            // }

            // posts.value = await data.json();

            
            /**
            * 因為json-server在docker啟動有問題，所以先寫死測試。
            */
            let data = [
                { title: 'welcome', body: 'this is article1', id: 1, tags:["news", "coding", "style"], isHighlight: false },
                { title: 'today', body: 'this is article2', id: 2, tags:["css", "web"], isHighlight: false },
                { title: 'tomorrow', body: 'this is article3', id: 2, tags:["css", "web"], isHighlight: false },
            ];
            posts.value = data;

        } catch (err) {
            error.value = err.message;
        }
    };

    return { posts, error, load };
}

export default getPosts;