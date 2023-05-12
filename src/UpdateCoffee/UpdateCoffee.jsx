import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
   const product=useLoaderData();
   const {_id, name, chef, supplier, taste, category, details, photo}=product;

    const handleSubmit = (e) => {
      e.preventDefault();
      const form=e.target;
      const name=form.name.value;
      const chef=form.chef.value;
      const supplier=form.supplier.value;
      const taste=form.taste.value;
      const category=form.category.value;
      const details=form.details.value;
      const photo=form.photo.value;
      const updateProduct={
          name, chef, supplier, taste, category, details, photo
      }
  
      fetch(`http://localhost:5000/coffee/${_id}`,{
          method:'PUT',
          headers:{
              'content-type':'application/json',
          },
          body:JSON.stringify(updateProduct),
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          if(data.modifiedCount>0){
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'coffee updated successful',
                  showConfirmButton: false,
                  timer: 1500
                })
          }
          form.reset();
      })
     
    };
      return (
          <>
          <div className='mt-2'>
              <Link to='/'  style={{fontFamily:'Rancho'}} className='btn  btn-warning'><FaArrowLeft/>Back to home</Link>
          </div>
          
          <form onSubmit={handleSubmit} className='bg-[#F4F3F0] rounded-md'>
            <h1 className='text-center' style={{fontFamily:'Rancho', fontSize:'45px'}} >Update Existing Coffee Details</h1> 
            <p className='text-center mx-4  md:w-1/2 md:mx-auto' style={{fontFamily:'Raleway', fontSize:'18px'}}>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mx-40 mx-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' defaultValue={name} className="p-3 rounded-lg border-2 border-slate-500" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input type="text" name='chef' defaultValue={chef} className="p-3 rounded-lg border-2 border-slate-500" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input type="text" name='supplier' defaultValue={supplier} className="p-3 rounded-lg border-2 border-slate-500" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input type="text" name='taste' defaultValue={taste} className="p-3 rounded-lg border-2 border-slate-500" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input type="text" name='category' defaultValue={category} className="p-3 rounded-lg border-2 border-slate-500" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input type="text" name='details' defaultValue={details} className="p-3 rounded-lg border-2 border-slate-500" />
          </div>
          
          
        </div>
        <div className="form-control md:mx-40 mx-10">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="text" name='photo' defaultValue={photo} className="p-3 rounded-lg border-2 border-slate-500" />
          </div>
          <div className="form-control mt-6 md:mx-40 mx-10">
            <button  style={{fontFamily:'Rancho', fontSize:'20px'}}  className="btn btn-primary btn-block p-3 rounded-lg">Update Coffee Details</button>
          </div>
    
          </form>
      
        
          
  
              
          </>
      );
  };

export default UpdateCoffee;