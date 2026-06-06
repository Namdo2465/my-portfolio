import React, { useState } from 'react';
import Main from '../components/Main';
import Navbar from '../components/navbar/Navbar';

const HomePage = ({ theme, toggleTheme }) => {
  // States
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  const closeNav = () =>{
   if(nav){
     setNav(false)
   }
  }

  return(
    <div  className='pages'>
        <Navbar
          nav={nav}
          handleNav={handleNav}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Main nav={nav} closeNav={closeNav} handleNav={handleNav} />
    </div>
  ) 
};

export default HomePage;
