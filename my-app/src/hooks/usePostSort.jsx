export const usePostSort = (sort) =>{
    const sortedPosts =(sort) =>{
        console.log(sort)
        setSortPost(sort)
        setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
    }
}