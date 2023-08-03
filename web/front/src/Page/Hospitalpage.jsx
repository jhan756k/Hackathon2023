import React from 'react';
import "../Style/Hospitalpage.css";
import Navbar from "../Component/Navbar";

const Hospitalpage = () => {
    return (
        <div>
            <Navbar />
            <div className="hospitalmain">
                <div className="hostems">
                    <img src="images/hoslogo.png" alt="" className="hostemimg" />
                    <div className="hostemtitle">산재 지정 병원 검색</div>
                    <input type="text" className="hosteminp" />
                    <img src="images/search.png" alt="" className="searchimg" />
                </div>
            </div>
            <div className="hosinside">
                <img src="images/hosimg.png" alt="" className="hosinsideimg" />
            </div>
        </div>
    );
};

export default Hospitalpage;