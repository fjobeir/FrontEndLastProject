import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './Comment.css'
import dayjs from 'dayjs';
import relativTime from 'dayjs/plugin/relativeTime'
const Comment = ({comments}) => {
    
    const createat = (date) => {
        dayjs.extend(relativTime)
        return dayjs(date).fromNow()
    }
    return (
        <>    
        <div className="commentsPlace">
                <div className='commentName'>
                    {comments?.user.name}
                </div>
                    <img id='CommentslogoImage' src={comments?.user?.avatar} /> 
                <div className='commentDate'>
                    {createat(comments?.created_at)}
                </div>
                <div className='Commentcontent'>
                    {comments?.content}
                </div>
                {/* <div className='reactionPlace'>
                    <div className='likeIcon'>
                    <FavoriteBorderIcon style={{ cursor: "pointer" }}/>
                    </div>
                    <div className='commentIcon'>
                    <ChatBubbleOutlineIcon style={{ cursor: "pointer" }}
                    />
                    </div>
                </div> */}
        </div>
        </>
    )
}
export default Comment;