import React, {useState} from "react";
import NavBar from './NavBar'
import Footer from './Footer';
import macIcon from "/icons8-mac-150.png";
import windowsIcon from "/icons8-windows-144.png";
import { programs } from "./Programs";
import List from "./List";


function Programs(){
    const [appSelection, changeApp] = useState()
    const [windowsActive, toggleWindowsActive] = useState(false);
    const [macActive, togglemacActive] = useState(false)
    const [list, changeList] = useState([])

    function windowsSelected(){
        toggleWindowsActive(true);
        togglemacActive(false);
        let newList = programs.filter((app) => app.name === appSelection);
        changeList(newList[0].windows);
    }

    function macSelected(){
        toggleWindowsActive(false);
        togglemacActive(true);
        let newList = programs.filter((app) => app.name === appSelection);
        changeList(newList[0].mac);
    }

    function appSelected(appname){
        changeApp(appname);
    }

    return(
        <div className='w-full h-screen flex flex-col dm-serif-text-regular'>
            <NavBar />
            <div className="mt-10 py-15 flex flex-col border-y-10 border-gray-500/50 rounded-2xl h-[80%] w-full BG">
                <h1 className="text-3xl place-content-center ml-[1%] text-center underline underline-offset-8 mb-5">1.) Select an Application:</h1>
                <div className="flex flex-wrap overflow-y-scroll h-[90%] w-[90%] place-self-center bg-white border-1 p-5 md:gap-25">
                   {programs.map((app, index) => (
                        <div key={index} className="basis-1/2 w-1/2 md:basis-1/5 md:w-1/5">
                            <button className="hover:cursor-pointer sm:ml-5 text-[1.25rem] border-double border-5 rounded-3xl w-full p-5" onClick={() => (appSelected(app.name))}>
                                <img src={app.icon} className={[`place-self-center size-[80px]`]}></img>
                                <span>{app.name}</span>
                            </button> 
                        </div>
                    ))} 
                </div>
                
            </div>
            

            <div className="grow place-content-center flex flex-col gap-5 my-5 p-10 w-full BG">
                <h1 className="text-3xl text-center underline underline-offset-8">2.)Select an Operating System</h1>
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
                <h2 className="text-4xl text-center underline underline-offset-8">{appSelection}</h2>
                {list.map((list, index) =>(
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