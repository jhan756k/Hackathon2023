import React from 'react';
import "../Style/Safetypage.css";
import Navbar from '../Component/Navbar';

const Safetypage = () => {
    return (
        <div>
            <Navbar />
            <img src="images/sfimg2.png" alt="" className="sfimg2" />
            <div className="sfimgholder">
                <img src="images/sfimg.png" alt="" className="sfimg" />
            </div>
        </div>
    );
};

export default Safetypage;