import "./Post.css";
import { myProfilePic } from "../../utils/myInfo";
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material";

export const Post = () => {
    return (
        <article className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={myProfilePic} alt="" className="postProImg" />
                        <span className="postUsername">Luis Carrera</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postIcon" />
                    </div>
                </div>
                <div className="postCenter">
                    <p className="postText">Hey! This is my first post :)</p>
                    <img
                        src="https://images.unsplash.com/photo-1730774344169-154bc63978d9?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Post Image"
                        className="postImg"
                    />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div className="postBottomIcon postFavIcon">
                            <Favorite className="postIcon" />
                        </div>
                        <div className="postBottomIcon postLikeIcon">
                            <ThumbUp className="postIcon" />
                        </div>
                        <span className="postLikeCounter">
                            51 likes
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">12 comments</span>
                    </div>
                </div>
            </div>
        </article>
    );
};
