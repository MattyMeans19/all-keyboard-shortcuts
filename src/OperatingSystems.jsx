import React, {useState} from "react";
import NavBar from './NavBar'
import Footer from './Footer';
import macIcon from "/icons8-mac-150.png";
import windowsIcon from "/icons8-windows-144.png";


function OperatingSystems(){
    const [osSelection, changeSelection] = useState("")



    return(
        <div className='w-screen h-screen flex flex-col'>
            <NavBar />
            <div className="place-self-center mt-25 grow">
                <button className="hover:cursor-pointer mr-5">
                    <img src={windowsIcon}></img>
                    <span>Windows 11</span>
                </button>
                <button className="hover:cursor-pointer ml-5">
                    <img src={macIcon}></img>
                    <span>MacOs</span>
                </button> 
            </div>
            
            <Footer />
        </div>
    )
}

export default OperatingSystems;