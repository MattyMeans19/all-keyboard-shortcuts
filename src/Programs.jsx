import React, {useState} from "react";
import NavBar from './NavBar'
import Footer from './Footer';
import macIcon from "/icons8-mac-150.png";
import windowsIcon from "/icons8-windows-144.png";
import {windows, mac} from "./ShortcutsData";
import { programs } from "./Programs";
import List from "./List";


function Programs(){
    const [osSelection, changeSelection] = useState([]);
    const [osValid, changeValid] = useState(false)
    const [appSelection, changeApp] = useState([])
    const [windowsActive, toggleWindowsActive] = useState(false);
    const [macActive, togglemacActive] = useState(false)

    function windowsSelected(){
        changeSelection(windows);
        toggleWindowsActive(true);
        togglemacActive(false);
        changeValid(true);
    }

    function macSelected(){
        changeSelection(mac);
        toggleWindowsActive(false);
        togglemacActive(true);
        changeValid(true);
    }

    function appSelected(appname){
        let appArray = osSelection[9].applications.filter((app) => app.name === appname);

        console.log(appArray);
        
    }

    return(
        <div className='w-full h-screen flex flex-col dm-serif-text-regular'>
            <NavBar />
            <div className="mt-10 py-15 flex flex-col md:flex-row border-y-10 border-gray-500/50 rounded-2xl w-full BG">
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
            
            <div className="flex flex-wrap gap-5">
              {programs.map((app, index) => (
                    <div key={index}>
                        <button className="hover:cursor-pointer sm:ml-5 text-2xl underline underline-offset-4" onClick={() => (appSelected(app.name))}>
                            <img src={app.icon} className={[`place-self-center size-[140px]`]}></img>
                            <span>{app.name}</span>
                        </button> 
                    </div>
                ))}  
            </div>
            

            <div className="grow place-self-center flex flex-col gap-5 my-5 w-full BG">
                <h1 className="text-3xl text-center underline underline-offset-8">3.) Select the category</h1>
                {appSelection.map((list, index) =>(
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

export default Programs;