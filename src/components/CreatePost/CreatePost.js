import "./CreatePost.css";
import { useRef, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const CreatePost = ({ profile }) => {
    const { token } = useContext(AuthContext);
    const { withoutRefresh, posts, setPosts } = useContext(AuthContext);
    const contentRef = useRef();
    const creatNewPost = async () => {
        const response = await fetch("http://ferasjobeir.com/api/posts", {
        method: "post",
        body: JSON.stringify({
            content: contentRef.current.value,
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        });
        const json = await response.json();
        window.alert(json.messages);
        if (json.success) {
        withoutRefresh(json?.data);
        contentRef.current.value = "";
        }
    };
    return (
        <>
        <div id="box">
            <textarea
            ref={contentRef}
            type="text"
            id="textArea"
            placeholder="What is happening. . .?"
            />
            <button id="post-button" onClick={creatNewPost} type="button">
            create
            </button>
        </div>
        </>
    );
};
export default CreatePost;
