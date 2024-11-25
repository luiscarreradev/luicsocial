import "./CloseFriend.css";

export const CloseFriend = ({username,profilePicture}) => {
    return (
        <li className="sidebarFriend">
            <img
                src={profilePicture}
                alt=""
                className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">
                {username}
            </span>
        </li>
    );
};
