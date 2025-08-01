import React, {useState} from "react";

function List(props){
    const [active, toggleActive] = useState(false)

    //changes whether or not the list is collapsed
    function changeActive(){
        toggleActive(!active);
    }

    //lists each object in the list array
    return(
        <div className="place-self-center w-[95%] bg-white mb-5">
            <div className="min-w-full bg-gray-300 flex flex-wrap place-items-center md:flex-nowrap border-1">
                <button onClick={() => (changeActive())}>{active ? "🔽" : "▶️"}</button>
                <h2 className="text-3xl text-center p-5">{props.list.category}:</h2>
                <p className="text-2xl text-center p-5">{props.list.description}</p>
            </div>
            <div className={[`${active ? 'visible' : 'hidden'}`]}>
                <div className="grid grid-cols-2">
                    <span className="text-center text-2xl border-1">Keys</span>
                    <span className="text-center text-2xl border-1">Action</span>
                </div>
                {props.list.shortcutData.map((shortcut, index) => (
                <div key={index} className="grid grid-cols-2">
                    <span className="border-1 p-5 text-2xl text-center place-content-center">{shortcut.keys}</span>
                    <span className="border-1 p-5 text-2xl">{shortcut.action}</span>
                </div>
                    ))}
            </div> 
        </div>
            
    )
}

export default List;