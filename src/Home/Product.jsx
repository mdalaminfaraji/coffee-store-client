import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaEdit, FaRegEye } from 'react-icons/fa';
import { BeakerIcon,TrashIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2';

const Product = ({product, setProduct, products}) => {
    const {_id, name, chef, supplier, taste, category, details, photo}=product;
    const handleDelete=(id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            console.log(result);
               if(result.isConfirmed){
                fetch(`http://localhost:5000/coffee/${id}`,{
                            method:'DELETE',
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            console.log(data);
                            if (data.deletedCount>0) {
                                Swal.fire(
                                  'Deleted!',
                                  'Your coffee has been deleted.',
                                  'success'
                                )
                              }
                        });
                        const remaining=products.filter(pro=>pro._id!==id);
                        setProduct(remaining);
               }
        //    
            
          })
       

    }
    return (
        <div className="w-full grid grid-cols-2 bg-base-100 shadow-xl">
            <div className=''>
                 <figure><img src={photo} alt="Movie"/></figure>
            </div>
       
        <div className=" grid grid-cols-2 items-center justify-items-end">
         <div className=''>
         <h2 className="card-title">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>Chef: {details}</p>
          <p>Chef: {taste}</p>
         </div>
         <div className="pe-5">
            <p>
                <Link to={`/viewDetails/${_id}`} className="btn btn-primary"><FaRegEye></FaRegEye></Link>
            </p>
            <p>
                <Link to={`/update/${_id}`}  className="btn btn-secondary"><FaEdit/></Link>
            </p>
            <p>
                <Link onClick={()=>handleDelete(_id)} className="btn btn-warning"><TrashIcon className="h-5 w-4 "/></Link>
            </p>
            
            
         </div>
        </div>
      </div>
    );
};

export default Product;