import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

export default ({to,disabled,children}) => {
    if(disabled){
       return <span className='nav-link disabled'>{children}</span>
    }
    return <Link to={to} className='nav-link' >
        {children}
    </Link>
};