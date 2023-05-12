import React, { useEffect, useState } from 'react';
import Card from './Card';

const Quality = () => {
    const [qualities, setQuality]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/quality')
        .then(res=>res.json())
        .then(data=>setQuality(data));
    },[])
  
    return (
        <div   className='grid grid-cols-1 md:grid-cols-4 gap-6  bg-[#ECEAE3]'>
            {
                qualities.map(quality=><Card key={quality.id} quality={quality}></Card>)
            }
        </div>
    );
};

export default Quality;