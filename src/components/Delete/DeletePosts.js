import { AuthContext } from "../AuthContext/AuthContext";
import { useContext } from "react";
import "./DeletePosts.css";

const DeletePosts = ({ posts, setCounter, counter }) => {
    const { token } = useContext(AuthContext);
    const DelPosts = async (post_id) => {
        console.log(post_id);
        const response = await fetch(`http://ferasjobeir.com/api/posts/${post_id}`,
        {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            },
        }
        );
        const json = await response.json();
        if (json.success) {
        setCounter(counter + 1);
        window.alert(json.messages);
        }
    };
    return (
        <>
        {posts?.map((post) => (
            <div key={post?.id} id="deletePlace">
                    <div id="del">
                        <h6 id="h4">{post?.content}</h6>
                        <button  onClick={() => DelPosts(post.id)} type="button" id="deleteButton" className="btn btn-primary">
                            Delete
                        </button>
                    </div>
            </div>
        ))}
        </>
    );
};

export default DeletePosts;
