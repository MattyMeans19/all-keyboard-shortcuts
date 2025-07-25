import React, {useState, useEffect} from "react";
import NavBar from './NavBar'
import Footer from './Footer';
import macIcon from "/icons8-mac-150.png";
import windowsIcon from "/icons8-windows-144.png";
import {windows, mac} from "./ShortcutsData";
import List from "./List";


function OperatingSystems(){
    const [osSelection, changeSelection] = useState([]);
    const [windowsActive, toggleWindowsActive] = useState(false);
    const [macActive, togglemacActive] = useState(false)

    function windowsSelected(){
        changeSelection(windows);
        toggleWindowsActive(true);
        togglemacActive(false);
    }

    function macSelected(){
        changeSelection(mac);
        toggleWindowsActive(false);
        togglemacActive(true);
    }

    return(
        <div className='w-full h-screen flex flex-col'>
            <NavBar />
            <div className="mt-10 py-15 flex flex-col md:flex-row border-y-10 border-gray-500/50 rounded-2xl w-full">
                <h1 className="text-3xl place-content-center basis-1/2 ml-[1%] text-center underline underline-offset-8 mb-5">1.) Select your Operating System:</h1>
                <button className="hover:cursor-pointer sm:mr-5 text-2xl underline" onClick={() => (windowsSelected())}>
                    <img src={windowsIcon} className={[`place-self-center size-[140px] ${windowsActive ? 'border-2 ': 'border-0' }`]}></img>
                    <span>Windows 11</span>
                </button>
                <button className="hover:cursor-pointer sm:ml-5 text-2xl underline" onClick={() => (macSelected())}>
                    <img src={macIcon} className={[`place-self-center size-[140px] ${macActive ? 'border-2 ': 'border-0' }`]}></img>
                    <span>MacOs</span>
                </button> 
            </div>
            <div className="grow place-self-center flex flex-col gap-5 my-5 w-full">
                <h1 className="text-3xl text-center underline underline-offset-8">2.) Select the category</h1>
                {osSelection.map((list, index) =>(
                    <List 
                        key={index}
                        list={list}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default OperatingSystems;