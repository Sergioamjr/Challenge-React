import allPosts from '../content/posts'

export function getAll() {
    return allPosts.posts;
};

export function getSingle(e) {
    return allPosts.posts[e];
};