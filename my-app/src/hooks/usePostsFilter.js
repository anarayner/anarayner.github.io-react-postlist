export  const  usePostsFilter = (posts, sort, query) => {
    const filteredPosts = posts.filter((post) =>
        sort
            ?
            post[sort].toLowerCase().includes(query)
            :
            post.title.toLowerCase().includes(query))
    return filteredPosts;
}