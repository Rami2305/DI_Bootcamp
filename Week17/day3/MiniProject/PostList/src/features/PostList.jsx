import { useEffect } from "react";
import ReactionsButton from './ReactionBotton'
import { usePostsSelector, usePostsStatus, useFetchPosts } from "./state/hooks";


const PostList = () => {

    const posts = usePostsSelector();    //(state => state.postsReducer.posts)
    const status = usePostsStatus();   //(state => state.postsReducer.status)

    const callFetchPosts = useFetchPosts()
    
    
    useEffect(() => {
        callFetchPosts()
    }, [])

    if(status === 'loading') return <h2>Loading...</h2>
    
    
    if(status === 'failed') return <h2>Cant get posts...</h2>

    return(
        <>
            <h2>Posts</h2>
            {posts.map((post)=> {
                return(
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <ReactionsButton post={post}/>
                    </article>
                )
            })}
        </>
    )
}

export default PostList