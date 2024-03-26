import { posts } from "./data.js";
import { Post } from "./Post.js";

const container = document.getElementById('container');

posts.forEach((el) => {
    const post = new Post(el, container)
    post.printPost();
})