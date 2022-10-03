import { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { useState, useEffect } from 'react'
import Post from '../Post/Post'
import'./Posts.css'
import CreatePost from '../CreatePost/CreatePost'

const Posts = () => {
    const {  setPosts, posts } = useContext(AuthContext)
    const {token} = useContext(AuthContext)
    const allPosts = async () => {
        const response = await fetch('http://ferasjobeir.com/api/posts', {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' :`Bearer ${token}`
            }
        })
        const json = await response.json()
        // setPosts ([...posts,json.data])
        setPosts ([...json.data])
        // console.log()
    }
    useEffect(() => {
        allPosts()
    },[posts?.length])
    
    return (
        <>
        <CreatePost />
        <div className="postssPlacee">
            {posts && posts.length > 0 && (
                <div className='ul'>
                    {posts.map((post, i) => (
                        <Post key={i} data={post} />
                    ))}
                </div>   
            )}
        </div>
        </>
    )
    
}
export default Posts;
