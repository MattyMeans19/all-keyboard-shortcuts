import { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import OperatingSystems from './OperatingSystems';
import Applications from './Applications';
import Request from './Request';

//landing page
function App() {

  const [currentPage, changePage] = useState(<Home />);

  function switchPage(newPage){
    changePage(newPage);
  }

  return (
    <div className='w-screen h-screen flex flex-col gap-25 relative dm-serif-text-regular'>
      <NavBar 
        page = {switchPage}
      />
        {currentPage}
      <Footer 
        page = {switchPage}
      />
    </div>
    
  )
}

export default App;
