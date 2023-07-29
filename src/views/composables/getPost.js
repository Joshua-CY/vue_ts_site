import { ref } from 'vue';

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            // let data = await fetch('http://localhost:8888/post' + id);

            // if(!data.ok) {
            //     throw Error('the post doesn't exist!');
            // }

            // posts.value = await data.json();
 
            
            /**
            * 因為json-server在docker啟動有問題，所以先寫死測試。
            */
            let data = [
                { title: 'welcome', body: 'this is article1', id: 1, tags:["news", "coding", "style"], isHighlight: false},
                { title: 'today', body: 'this is article2', id: 2, tags:["css", "web"], isHighlight: false},
            ];
            post.value = data[id-1];

        } catch (err) {
            error.value = err.message;
        }
    };

    return {post, error, load};
}

export default getPost;