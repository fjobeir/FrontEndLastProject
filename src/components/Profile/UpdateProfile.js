import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import DeletePosts from "../Delete/DeletePosts";
import Sidebar from "../Sidebar/Sidebar";
import './UpdateProfile.css'
import HiddenIcons from "../Sidebar/HiddenIcons";
const UpdateProfile = () => {
    const token = useContext(AuthContext);
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const newPasswordRef = useRef();
    const newPasswordConfirmationRef = useRef();
    const [uerPosts, setUserPosts] = useState([]);
    const [counter, setCounter] = useState(0);
    const ProfileUpdate = async () => {
    const response = await fetch("http://ferasjobeir.com/api/users/me", {
        method: "PUT",
        body: JSON.stringify({
            name: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        new_password: newPasswordRef.current.value,
            new_password_confirmation: newPasswordConfirmationRef.current.value,
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
        },
        });
        const json = await response.json();
        window.alert(json.messages);
    };

    const getProfileUnfo = async () => {
        const response = await fetch("http://ferasjobeir.com/api/users/me", {
        method: "GET",
        body: null,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
        },
        });
        const json = await response.json();
        if (json.success) {
        console.log(json);
        usernameRef.current.value = json.data.name;
        emailRef.current.value = json.data.email;
        setUserPosts(json.data.posts);

        }
    };

    useEffect(() => {
        getProfileUnfo();
    }, [counter]);

    return (
        <>
            <div className="container-fluid" id="bigBox ">
                <div className="row">
                    <div className="col-3" id="sidebarProfile">
                        <Sidebar />
                    </div>
                    <div className="col-6" id="profileBox">
                        <div className='profileTxt'>
                                    <h3 id='h3'>Profile</h3>   
                                    <div id='hidden'> 
                                    <HiddenIcons/>
                                    </div>
                        </div>
                        <div className="myinfo">
                            <div className="col-12">
                                <div id="info" className="p-2  ">
                                    My Information
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputName" className="form-label">
                                    Name
                                </label>
                                <input
                                    ref={usernameRef}
                                    type="text"
                                    className="form-control"
                                    id="inputName"
                                />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label">
                                    Email
                                </label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="form-control"
                                    id="inputEmail4"
                                />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPassword4" className="form-label">
                                    Password
                                </label>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    className="form-control"
                                    id="inputPassword4"
                                />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputNewPassword" className="form-label">
                                    New Password
                                </label>
                                <input
                                    ref={newPasswordRef}
                                    type="password"
                                    className="form-control"
                                    id="inputNewPassword"
                                />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPasswordConfirmation" className="form-label">
                                    New Password Confirmation
                                </label>
                                <input
                                    ref={newPasswordConfirmationRef}
                                    type="password"
                                    className="form-control"
                                    id="inputPasswordConfirmation"
                                />
                            </div>
                        <div className="col-6 " id="btnBox">
                                <button
                                    onClick={ProfileUpdate}
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Update Profile
                                </button>
                            </div>
                        </div>
                        <div className="postsDel">  
                            <div className="col-12">
                            <div id="postsInfo" className="p-2">
                                My Posts
                            </div>
                            <DeletePosts
                                posts={uerPosts}
                                setCounter={setCounter}
                                counter={counter}
                            />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    );
};
export default UpdateProfile;
