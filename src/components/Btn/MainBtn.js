import React from "react";
import { Link } from "react-router-dom";

const MainBtn = () => {
    return (
        <div>
            <Link to="/">
                <h3>도서</h3>
            </Link>
            <Link to="/webtoon">
                <h3>웹툰</h3>
            </Link>
        </div>
    );
};

export default MainBtn;
