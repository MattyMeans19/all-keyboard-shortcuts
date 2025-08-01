import React from "react";
import { NavLink } from "react-router";

//footer with link to request page
function Footer(){
    return(
        <div className="text-center w-full text-2xl bg-purple-400 px-5">
            <span>Don't see an application you need? Click {<NavLink to={"/request"} className="text-blue-600">here</NavLink>} to request it's addition to the site!</span>
        </div>
    )
}

export default Footer;