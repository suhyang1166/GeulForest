import React from "react";

const MainSlider = ({ bestseller }) => {
    // console.log(bestseller);
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${bestseller?.cover})`,
                    width: "200px",
                    height: "280px",
                }}
            ></div>
            <p>{bestseller?.title}</p>
        </div>
    );
};

export default MainSlider;
