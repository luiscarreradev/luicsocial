import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./Topbar.css";

export const Topbar = () => {
    const profilePic = "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
                    src={profilePic}
                    alt="Profile Picture"
                    className="topbarProfileImg"
                />
            </div>
        </div>
    );
};
