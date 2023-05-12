import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AddCoffee = () => {
   

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };
    return (
        <>
        <div className='mt-2'>
            <Link to='/'  style={{fontFamily:'Rancho'}} className='btn  btn-warning'><FaArrowLeft/>Back to home</Link>
        </div>
        
        <form className='bg-[#F4F3F0] rounded-md'>
          <h1 className='text-center' style={{fontFamily:'Rancho', fontSize:'45px'}} >Add New Coffee</h1> 
          <p className='text-center mx-4  md:w-1/2 md:mx-auto' style={{fontFamily:'Raleway', fontSize:'18px'}}>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mx-40 mx-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input type="text" name='chef' placeholder="chef" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" name='supplier' placeholder="supplier" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" name='taste' placeholder="taste" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name='category' placeholder="category" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name='details' placeholder="details" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        
        
      </div>
      <div className="form-control md:mx-40 mx-10">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='photo' placeholder="photo" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control mt-6 md:mx-40 mx-10">
          <button className="btn btn-primary btn-block p-3 rounded-lg">Add Coffee</button>
        </div>
  
        </form>
    
      
        

            
        </>
    );
};

export default AddCoffee;