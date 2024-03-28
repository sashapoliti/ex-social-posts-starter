import { posts } from "./data.js";
/* import { Post } from "./Post.js"; */

/* const container = document.getElementById('container'); */

/* posts.forEach((el) => {
    const post = new Post(el, container)
    post.printPost();
}) */

const { createApp } = Vue;

createApp({
    data(){
        return {
            posts: posts
        }
    },
    methods : {
        getInitials(name) {
                const initials = name.split(' ').map(el => el.charAt(0)).join('');
                return initials;      
        },
        toggleLike(index) {
            if (this.posts[index].liked) {
                this.posts[index].likes--;
            } else {
                this.posts[index].likes++;
            }
            this.posts[index].liked = !this.posts[index].liked;
        }
    },
    computed : {
        
    },
    mounted() {
        console.log(this.posts);
    }
}).mount('#app')