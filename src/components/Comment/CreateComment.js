import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import "./CreateComment.css";
const CreateComment = ({post_id}) => {
    const token  = useContext(AuthContext);
    const {commentWithoutRefresh}  = useContext(AuthContext);
    const commentRef = useRef();
    const creatNewComment = async() => {
        const response = await fetch(`http://ferasjobeir.com/api/comments`, {
            method: 'post',
            body: JSON.stringify({
                content: commentRef.current.value,
                post_id: post_id,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' :`Bearer ${token.token}`
            }
        })
        const json = await response.json()
        
        window.alert(json.messages)
        if (json.success) {
            commentWithoutRefresh(json.data)
            commentRef.current.value = ''
        }
    }
    return (
        <>
            <div className="addCooment">
                <form  className="search-wrapper cf">
                    <input
                        type="text"
                        ref={commentRef}
                        placeholder="Write your Comment..."
                        style={{boxShadow:"none"}}
                    />
                    <button onClick={creatNewComment} type="button">
                        Send
                    </button>
                </form>
            </div>
        </>
    );
};
export default CreateComment;
