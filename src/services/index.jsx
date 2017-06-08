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
                let args = {...value},
                    result = [];
                if(args.name) {
                    result =  post.title.toLowerCase().includes(args.name.toLowerCase());
                }
                if(args.year) {
                    result =  result.year == args.year;
                }
                return result;
                break;
        }
    });
}