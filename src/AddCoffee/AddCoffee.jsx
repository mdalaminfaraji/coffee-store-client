import React from 'react';
import { FaArrowLeft } from "react-icons/fa";

const AddCoffee = () => {
    return (
        <>
        <div className='mt-2'>
            <button  style={{fontFamily:'Rancho'}} className='btn  btn-warning'><FaArrowLeft/>Back to home</button>
        </div>
            
        </>
    );
};

export default AddCoffee;