import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./HiddenIcons.css";

const HiddenIcons = () => {
    const newLinks = [
        {
        to: "/",
        icon: <AiFillHome />,
        onlyLogged: true,
        },
        {
        to: "/profile",
        icon: <BsFillPersonFill />,
        onlyLogged: true,
        },
        {
        to: "/login",
        icon: <MdLock />,
        },
    ];
    return (
    <>
        <div className="linkboxx">
            {newLinks.map((item, i) => {
            return (
                <NavLink
                key={i}
                to={item.to}
                className={({ isActive }) => {
                    return isActive ? "active-linkk" : "linkk";
                }}
                >
                <div className="boxOftxtAndIconn">
                    <div className="sideIconn">{item.icon}</div>
                </div>
                </NavLink>
            );
            })}
        </div>
        </>
    );
};
export default HiddenIcons;
