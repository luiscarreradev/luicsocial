import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./Topbar.css";
import { myProfilePic } from "../../utils/myInfo";


export const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="topbarLogo">Luicbook</span>
            </div>
            <div className="topbarCenter">
                <div className="topbarSearch">
                    <Search className="topbarSearchIcon" />
                    <input
                        type="text"
                        placeholder="Search for friend, post or video..."
                        className="topbarSearchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">Homepage</div>
                    <div className="topbarLink">Timeline</div>
                </div> 
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person fontSize="large"/>
                        <sup className="topbarIconBadge">1</sup>
                    </div>
                    <div className="topbarIconItem">
                        <Chat fontSize="large"/>
                        <sup className="topbarIconBadge">2</sup>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications fontSize="large"/>
                        <sup className="topbarIconBadge">1</sup>
                    </div>
                </div>
                <img
                    src={myProfilePic}
                    alt="Profile Picture"
                    className="topbarProfileImg"
                />
            </div>
        </div>
    );
};
