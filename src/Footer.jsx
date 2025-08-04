import React from "react";
import Request from "./Request";

//footer with link to request page
function Footer(props){
    return(
        <div className="text-center text-2xl bg-purple-400 px-5">
            <span>Don't see an application you need? Click {<button className="text-blue-600 cursor-pointer" onClick={() => (props.page(<Request />))}>here</button>} to request it's addition to the site!</span>
        </div>
    )
}

export default Footer;