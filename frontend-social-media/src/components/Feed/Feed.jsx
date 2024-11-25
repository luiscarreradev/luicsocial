import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import { Posts } from "../../utils/dummyData";
import "./Feed.css";

export const Feed = () => {
    return (
        <main className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((post) => {
                    return <Post key={post.id} {...post} />;
                })}
            </div>
        </main>
    );
};
