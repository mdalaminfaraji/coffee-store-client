import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Login = () => {
    const {signIn,user, googleSignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || "/";
    const handleLogin=(event)=>{
        event.preventDefault();
       const form=event.target;
        const email=form.email.value;
         const password=form.password.value;
         signIn(email, password)
         .then(result=>{
            const loggedUser=result.user;
            navigate(from, { replace: true });
            console.log(loggedUser);
         })
         .catch(error=>{
            console.log(error.message);
         })
    }

    const handleGoogleSignIn=()=>{
            googleSignIn()
            .then(result=>{
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error=>console.log(error.message))
    }
    console.log(user?.photoURL);
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Google Login now!</h1>
            <p className="py-6"><button className='btn btn-primary' onClick={handleGoogleSignIn}>GoogleSignIn</button></p>
            <p>Login in user picture: {user?.displayName}</p>
           <img src={user?.photoURL}/>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleLogin}>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login" />
              </div>
                </form>
             
              <div className="form-control mt-6">
                <Link to="/register" className="underline text-red-500">Don't have account. please register?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;