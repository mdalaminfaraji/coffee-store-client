import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const handleRegister=(event)=>{
             event.preventDefault();
             const form=event.target;
             const name=form.name.value;
             const email=form.email.value;
             const photo=form.photo.value;
             const password=form.password.value;
             const userCreate={name, email, photo, password};
            //  console.log(user);
            createUser(email, password)
            .then(result=>{
                const registerUser=result.user;
                console.log(registerUser);
            })
            .catch(error=>{
                console.log(error.message);
            });


    }
    return (
   
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
                  <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
              <input type="submit" value="Register" className='btn btn-primary'/>
              </div>

            
            </div>
            </form>
           <div className="form-control mt-6">
                <Link to="/login" className="underline pb-5 pl-5  text-red-500">If You have account. please Login?</Link>
            </div>
            
          </div>
          
        </div>
       
      </div>
       
    );
};

export default Register;