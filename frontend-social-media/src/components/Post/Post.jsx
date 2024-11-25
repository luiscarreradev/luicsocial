import "./Post.css";
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material";
import { Users } from "../../utils/dummyData";

export const Post = ({ desc, photo, date, userId, like, comment }) => {
    const user = Users.filter((u) => u.id === userId)[0];

    return (
        <article className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            src={user?.profilePicture}
                            alt=""
                            className="postProImg"
                        />
                        <span className="postUsername">
                            {user?.username || "Unknown user"}
                        </span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postIcon" />
                    </div>
                </div>
                <div className="postCenter">
                    <p className="postText">{desc}</p>
                    {photo && (
                        <img src={photo} alt="Post Image" className="postImg" />
                    )}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div className="postBottomIcon postFavIcon">
                            <Favorite className="postIcon" />
                        </div>
                        <div className="postBottomIcon postLikeIcon">
                            <ThumbUp className="postIcon" />
                        </div>
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">{comment} comments</span>
                    </div>
                </div>
            </div>
        </article>
    );
};
