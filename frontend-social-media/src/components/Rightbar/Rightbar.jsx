import "./Rightbar.css";

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
                        <strong> 3 other friends </strong> have a birthday today!
                    </span>
                </div>
            </div>
        </aside>
    );
};
