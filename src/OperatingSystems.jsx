import React, {useState} from "react";
import macIcon from "/icons8-mac-150.png";
import windowsIcon from "/icons8-windows-144.png";
import {windows, mac} from "./ShortcutsData";
import List from "./List";


function OperatingSystems(){
    const [osSelection, changeSelection] = useState([]);
    const [windowsActive, toggleWindowsActive] = useState(false);
    const [macActive, togglemacActive] = useState(false)
    const windowsKey = "Windows Key(\u229E)"

    //change selection to Windows
    function windowsSelected(){
        changeSelection(windows);
        toggleWindowsActive(true);
        togglemacActive(false);
    }

    //change selection to MacOS
    function macSelected(){
        changeSelection(mac);
        toggleWindowsActive(false);
        togglemacActive(true);
    }

    //display OS selection buttons and list of available shortcuts
    return(
        <div className='grow w-[95%] place-self-center flex flex-col dm-serif-text-regular'>
            <div className="grow place-content-center flex flex-col gap-5 my-5 p-10 w-full bg-white border-10 border-gray-500/50 rounded-2xl">
                <h1 className="text-3xl text-center underline underline-offset-8">1.)Select an Operating System</h1>
                <div className="flex flex-col md:flex-row flex-nowrap place-content-center">
                    <button className="hover:cursor-pointer sm:mr-5 text-2xl underline" onClick={() => (windowsSelected())}>
                        <img src={windowsIcon} className={[`place-self-center size-[140px] ${windowsActive ? 'border-2 ': 'border-0' }`]}></img>
                        <span>Windows 11</span>
                    </button>

                    
                    <button className="hover:cursor-pointer sm:ml-5 text-2xl underline" onClick={() => (macSelected())}>
                        <img src={macIcon} className={[`place-self-center size-[140px] ${macActive ? 'border-2 ': 'border-0' }`]}></img>
                        <span>MacOs</span>
                    </button>  
                </div>
            </div>
            <span className={[`${macActive ? 'visible' : 'hidden'} place-self-center text-red-600 text-2xl`]}>Note: If you are using MacOS with a standard/Windows keyboard, Command(⌘) will be the {windowsKey}.</span>
            <div className="place-self-center flex flex-col gap-5 my-5 bg-white border-10 border-gray-500/50 rounded-2xl min-w-full">
                <h1 className="text-3xl text-center underline underline-offset-8">2.) Select the category</h1>
                {osSelection.map((list, index) =>(
                    <List 
                        key={index}
                        list={list}
                    />
                ))}
            </div>
        </div>
    )
}

export default OperatingSystems;