import React from 'react';
import "../Style/Consultpage.css";
import Navbar from "../Component/Navbar";

const Consultpage = () => {
    return (
        <div>
            <Navbar />
            <div className="holdinconsult">
                <img src="images/consultimg.png" alt="" className="hicimg" />
            </div>
        </div>
    );
};

export default Consultpage;