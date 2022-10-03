import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    const [loggedIn, setLoggedIn] = useState(!!token) //what does !! means
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const navigate = useNavigate()
    //this is to store token
    function logIn(data) {
        window.localStorage.setItem('token', data.token);
        setLoggedIn(true);
        setToken(data.token);
    }
    //this is to remove token when signout
    const logOut = () => {
        window.localStorage.removeItem('token')
        setLoggedIn(false)
        setToken('')
        navigate('/login')
    }
    // this is to add the new post without refreshing
    const withoutRefresh = (lastPost) => {
        console.log(lastPost)
        setPosts([...posts, lastPost])
    }
    //this function is to publish the comments without a refreshing
    const commentWithoutRefresh = (lastComment) => {
        setComments([...comments, lastComment])
    }
    return (
        <AuthContext.Provider value={{
            loggedIn,
            token,
            logIn,
            logOut,
            posts,
            withoutRefresh,
            setPosts,
            comments,
            commentWithoutRefresh, 
            setComments,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;