import React from "react";
import { Contact } from "./Email";

//simple export of Email.jsx to be displayed
function Request(){
    return(
        <div className="flex flex-col gap-10 w-full h-full dm-serif-text-regular">
            <div className="grow w-[75%] place-self-center">
                <Contact />
            </div>
        </div>
    )
}

export default Request;