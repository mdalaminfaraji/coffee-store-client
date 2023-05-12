import React from 'react';
import bgImageNavbar from '../images/more/15.jpg';
import logo1 from '../images/more/logo1.png';

const Navber = () => {
    const navbarStyle = {
        backgroundImage: `url(${bgImageNavbar})`,
        fontFamily:'Rancho',
        fontWeight:400,
        fontSize:'60px',
        color:"#FFFFFF"
      };
    return (
        <div style={navbarStyle} className='navbar shadow-2xl  h-32'>
        <div className="mx-auto">
            <img src={logo1} className='w-[75px] h-[90px]'/>
            <h1>Espresso Emporium</h1>
        </div>
        </div>
    );
};

export default Navber;