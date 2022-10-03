
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useEffect, useState } from 'react';
import dayjs from "dayjs";
import relativTime from 'dayjs/plugin/relativeTime'
import './Post.css'
import Comments from '../Comment/Comments';
import CreateComment from '../Comment/CreateComment';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
const Post = ({ data }) => {
        // console.log(data)
    const [displayComment, setDisplayComment] =useState(false)
    const {comments,token, setComments} = useContext(AuthContext);
    //this function is to change time to word instead of number
    const createat = (date) => {
        dayjs.extend(relativTime)
        return dayjs(date).fromNow()
    }

    //This is fo like 
    const Like_dislike = async(post_id, liked_by_current_user) => {
        const rag = ['unlike', 'like']
        const response = await fetch(`http://ferasjobeir.com/api/posts/${liked_by_current_user ? rag[0]: rag[1]}`, {
            method:"post",
            body:JSON.stringify({
                post_id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' :`Bearer ${token}`
            }
        })
        const json = await response.json()
        console.log(json)
        if(json.success){
            window.alert(json.messages)
        }
    }
    return (
        <>    
            <div className="postPplace">
                <div className='idClass'>
                </div>
                <div className='name'>
                    {data?.user?.name}
                </div>
                    <img id='logoImage' src={data?.user?.avatar} /> 
                <div className='date'>
                    {createat(data?.created_at)}
                </div>
                <div className='content'>
                    {data?.content}
                </div>

                {/* reactions secctions */}
                <div className='reactionPlace'>
                    <div className='likeIcon'>
                    <Checkbox  sx={{ color:"red"}} icon={ !data.liked_by_current_user ?
                        <FavoriteBorder  /> : <Favorite />}   checkedIcon={ data.liked_by_current_user ?
                        <FavoriteBorder/> : <Favorite />} onClick={() => Like_dislike(data.id, data.liked_by_current_user) }/>
                    </div>
                    <div className='commentIcon'>
                        <ChatBubbleOutlineIcon style={{ cursor: "pointer" }}
                            onClick={() => {
                                setDisplayComment(!displayComment)
                            }}/>
                            {displayComment &&
                            <div id="comments">
                                <CreateComment  post_id={data?.id}/>
                                <Comments post_id={data?.id} />
                            </div>
                            }
                    </div>
                </div> 
            </div>
        </>
    )
}
export default Post;
