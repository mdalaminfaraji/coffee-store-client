import React, { useContext } from 'react';
import bgBannerImage from '../images/more/3.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Banner = () => {
    const {user, logOut}=useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(result=>{console.log(result)})
        .catch(error=>{
            console.log(error);

        })
    }
    return (
        <div className='h-[800px] relative' style={{backgroundImage: `url(${bgBannerImage})` ,backgroundSize:'cover' }}>
            <div className='absolute lg:w-1/3 right-48 top-1/3'>
                <h1 style={{fontWeight:'400',fontFamily:'Rancho', fontSize:'55px', color:'#FFFFFF'}}>Would you like a Cup of Delicious Coffee?</h1>
                <p style={{fontFamily:'Raleway', fontSize:'16px' ,lineHeight:'30px', color:'#FFFFFF'}}>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                {
                     !user?<Link to='/login' style={{color:'#242222'}} className='bg-[#E3B577] hover:bg-red-200 btn'>Login</Link>:<>
                       <img src={user?.photoURL}/>
                       <p>{user?.displayName}</p>
                      <button onClick={handleLogOut} className='btn btn-warning'>LogOut</button>
                     </>
                }
                
            </div>
        </div>
    );
};

export default Banner;