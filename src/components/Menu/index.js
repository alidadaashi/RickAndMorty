import React from 'react'
import {Link} from "react-router-dom"

const Menu = ({ items }) => {
    return (
        <div className="nav">
            {Object.entries(items).map(([key, value]) => {
                return (
                    <Link className="menu-link" key={key} to={key.toString()}>{key}</Link>
                );
            })}
        </div>


    )
}

export default Menu;