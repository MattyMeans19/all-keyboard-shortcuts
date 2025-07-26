import { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {

  return (
    <div className='w-screen h-screen flex flex-col gap-25 relative dm-serif-text-regular'>
      <NavBar />
      <div className='flex flex-col gap-15 text-center text-5xl border-15 border-double m-10 p-15 rounded-4xl grow BG'>
        <h1>Welcome to the best site for finding All Keyboard Shortcuts!</h1>
        <p>The Mission: Create a singular website where anyone can find the right keyboard shortcuts for any application, on any system, to increase productivity!</p>
        <p>Every list was manually compiled using the official documents from each of the companies that produced them.</p>
      </div>
      <Footer />
    </div>
    
  )
}

export default App
