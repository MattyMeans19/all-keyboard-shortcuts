import React from "react";
import NavBar from './NavBar'
import Footer from './Footer';


function Programs(){
    return(
        <div className='w-screen h-screen flex flex-col dm-serif-text-regular'>
            <NavBar />
            <h1 className="grow">Applications</h1>
            <Footer />
        </div>
    )
}

export default Programs;