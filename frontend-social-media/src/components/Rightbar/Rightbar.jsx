import "./Rightbar.css";
import { Online } from "../Online/Online";
import { Users } from "../../utils/dummyData";

export const Rightbar = () => {
    return (
        <aside className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3146/3146563.png"
                        alt="Birthday Icon"
                        className="birthdayImg"
                    />
                    <span className="birthdayText">
                        <strong>Elon Musk</strong> and
                        <strong> 3 other friends </strong> have a birthday
                        today!
                    </span>
                </div>
                <img
                    src="https://media.istockphoto.com/id/2098359215/es/foto/concepto-de-marketing-digital-hombre-de-negocios-que-usa-una-computadora-port%C3%A1til-con-an%C3%A1lisis.webp?s=2048x2048&w=is&k=20&c=V7JGp_8B3QS7q7tIX91raFPD1B2lUsUd3ceUm416AMI="
                    alt="Advertising"
                    className="rightbarAd"
                />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => {
                        return <Online key={u.id} {...u} />;
                    })}
                </ul>
            </div>
        </aside>
    );
};
