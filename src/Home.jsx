import React from "react";

function Home(){
    return(
      <div className='flex flex-col gap-15 text-center text-5xl border-15 border-double m-10 p-15 rounded-4xl grow bg-white'>
        <h1>Welcome to the best site for finding All Keyboard Shortcuts!</h1>
        <p>The Mission: Create a singular website where anyone can find the right keyboard shortcuts for any application, on any system, to increase productivity!</p>
        <p>Every list was manually compiled using the official documents from each of the companies that produced them.</p>
      </div>
    )
}

export default Home;