import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import "./Feed.css";

export const Feed = () => {
    return (
        <main className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </main>
    );
};
