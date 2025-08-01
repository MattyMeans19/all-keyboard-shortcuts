import React from "react";
import NavBar from "./NavBar";
import { Contact } from "./Email";

//simple export of Email.jsx to be displayed
function Request(){
    return(
        <div className="flex flex-col gap-10 w-screen h-screen BG dm-serif-text-regular">
            <NavBar />
            <div className="grow w-[75%] place-self-center">
                <Contact />
            </div>
        </div>
    )
}

export default Request;