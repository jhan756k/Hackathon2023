import React from 'react';
import "../Style/Communitypage.css";
import Navbar from '../Component/Navbar';

const Communitypage = () => {
    return (
        <div>
            <Navbar />
            <div className="cpimgholder">
                <img src="images/cpimg.png" alt="" className="cpimg" />
            </div>
        </div>
    );
};

export default Communitypage;