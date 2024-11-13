import { Feed, Rightbar, Sidebar, Topbar } from "../../components";
import "./Home.css";

export const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar className="homeSidebar"/>
                <Feed className="homeFeed"/>
                <Rightbar className="homeRightbar"/>
            </div>
        </>
    );
};
