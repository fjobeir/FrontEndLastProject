import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import Comment  from './Comment.js'
import './Comments.css'

const Comments = ({post_id}) => {
    const {token, commentWithoutRefresh} = useContext(AuthContext)
    const [comments, setComments] = useState([])

    const allComments = async (post_id) => {
        const response = await fetch(`http://ferasjobeir.com/api/posts/${post_id}`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' :`Bearer ${token}`
            }
        })
        const json = await response.json()
        if(json.success) { 
            setComments (json?.data?.comments)
        }
    }

    useEffect(()=>{
    allComments(post_id) 
    },[commentWithoutRefresh])

    
    return (
        <div className="CommentsPlace">
                <ul>
                {comments?.map((Coment) => (
                    <li  key={Coment.id}>
                        <Comment comments={Coment}/>
                    </li>    
                    ))}
                </ul>
        </div>
    )
    
}
export default Comments;
