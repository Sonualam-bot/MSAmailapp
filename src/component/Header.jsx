import { NavLink } from
    "react-router-dom";

export const Header = () => {
    return (
        <div className="contents">
            <div className="item">
                <NavLink className="item1" to="/" >Inbox</NavLink>
            </div>
            <div className="item">
                <NavLink className="item1" to="/spam" >Spam</NavLink>
            </div>
            <div className="item">
                <NavLink className="item1" to="/trash" >Trash</NavLink>
            </div>
        </div>
    )
}