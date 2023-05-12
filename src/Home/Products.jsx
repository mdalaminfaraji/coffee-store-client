import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProduct]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/coffee/')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])
    return (
        <>
            <div className='text-center pt-14'>
               <h6 className=''>--Slip & Savor---</h6>
               <h1  style={{fontFamily:'Rancho'}} className='text-[55px]'>Our Popular Products</h1>
               <Link to='/addCoffee' className='btn btn-warning'>Add Coffee </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 mt-4'>
                {
                    products.map(product=><Product key={product._id} product={product} products={products}
                    setProduct={setProduct}
                    ></Product>)
                }
            </div>
        </>
    );
};

export default Products;