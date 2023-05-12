import React from 'react';
import error from '../images/404/404.gif';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Navber from '../Shared/Navber';

const Errorpage = () => {
    return (
        <div>
            <Navber></Navber>
             <div className='mt-2 w-32 mx-auto'>
              <Link to='/'  style={{fontFamily:'Rancho'}} className='btn text-center btn-warning'><FaArrowLeft/>Back to home</Link>
           </div>
            <img className='w-1/2 mx-auto' src={error}/>
        </div>
    );
};

export default Errorpage;