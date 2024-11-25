import "./Online.css";

export const Online = ({username,profilePicture}) => {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img
                    src={profilePicture}
                    alt="Friend's Profile Image"
                    className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
            </div>
            <span>{username}</span>
        </li>
    );
};
