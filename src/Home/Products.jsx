import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <div className='text-center pt-14'>
               <h6 className=''>--Slip & Savor---</h6>
               <h1  style={{fontFamily:'Rancho'}} className='text-[55px]'>Our Popular Products</h1>
               <Link to='/addCoffee' className='btn btn-warning'>Add Coffee </Link>
            </div>
        </>
    );
};

export default Products;