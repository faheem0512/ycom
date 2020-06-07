import React from "react";
import {HEADER_VALUES} from "../../utility/constants";
import "./index.css";
const Header = () => {
    return <thead className='app-table_header'>
        <tr>
            {HEADER_VALUES.map((header,index)=>(<th key={`${index}__header_title`}>
                {header}
            </th>))}
        </tr>
    </thead>

};


export default Header;