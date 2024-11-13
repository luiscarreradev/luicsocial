import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import "./Share.css";
import { myProfilePic } from "../../utils/myInfo";

export const Share = () => {
    return (
        <section className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        src={myProfilePic}
                        alt="Profile Picture"
                        className="shareProImg"
                    />
                    <input
                        type="text"
                        name="shareText"
                        id="shareText"
                        className="shareTextInput"
                        placeholder="What's in your mind Luis?"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions
                                htmlColor="goldenrod"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                        <div className="shareButton">Share</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
