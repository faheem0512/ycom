import React from "react";
import "./index.css";

export default () => {
    return <div className='loader-backdrop'>
            <div id="loader" className="background">
                <div className="dots container">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
    </div>;
};