import allPosts from '../content/posts'

export function getAll() {
    return allPosts.posts;
};

export function getSingle(e) {
    return allPosts.posts[e];
};

export function getSidebar(e) {
   return allPosts.posts.filter(exclude => exclude.id != e);
}

export function filterPosts(value, term) {
    return allPosts.posts.filter(function(post) {
        switch (term) {
            case 'year':
                return post.year == value;
                break;
            case 'category':
                return post.categories.includes(value);
                break;
            case 'name':
                return post.title.toLowerCase().includes(value.toLowerCase());
                break;
            case 'all':
                let result = [];
                if(value.year) {
                    result = post.year == value.year;
                }
                if(value.name) {
                    result.filter(function(e) {
                        console.log(e);
                    });
                    // result.title.toLowerCase().includes(value.name.toLowerCase());
                }
                return result;
                break;
        }
    });
}