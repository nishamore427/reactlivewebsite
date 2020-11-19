import React from "react";
import {NavLink} from "react-router-dom";
const Navbar=()=>{
    return(
        <>
            <div className="navigationBar">
                <ul>
                    <li><NavLink exact activeClassName="active_class" to="/Home">Home</NavLink></li>
                    <li><NavLink exact activeClassName="active_class" to="/about">About</NavLink></li>
                    <li><NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink></li>
                    
                    <li><NavLink exact activeClassName="active_class" to="/Login">
                    <button className="logout">Logout</button>
                    </NavLink></li>
                    
                </ul>
            </div>
        </>
    );
}
export default Navbar;