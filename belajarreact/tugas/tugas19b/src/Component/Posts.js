import React from 'react'

const Posts =({posts, loading})=>{
    if(!loading){
        return (<ul>
            {posts.map(post=>(
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>)
    }

    return <h2>loading ..</h2>

    
}

export default Posts