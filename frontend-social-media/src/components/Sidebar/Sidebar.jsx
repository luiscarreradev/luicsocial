import {
    RssFeed,
    School,
    Event,
    HelpOutline,
    WorkOutline,
    Group,
    Bookmark,
    PlayCircleFilledOutlined,
    Chat,
} from "@mui/icons-material";
import "./Sidebar.css";
import { fakeFriends } from "./friends";

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {fakeFriends.map((friend, index) => {
                        return (
                            <li className="sidebarFriend" key={index}>
                                <img
                                    src={friend.url}
                                    alt=""
                                    className="sidebarFriendImg"
                                />
                                <span className="sidebarFriendName">
                                    {friend.name}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};
