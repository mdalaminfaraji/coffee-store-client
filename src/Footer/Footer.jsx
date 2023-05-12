import React from 'react';
import logo1 from '../images/more/logo1.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { MapPinIcon } from '@heroicons/react/24/solid';
import bgImage from '../images/more/13.jpg';

const Footer = () => {
    const navbarStyle = {
        backgroundImage: `url(${bgImage})`,
      };
    return (
        <div className='mx-20 pt-10 grid grid-cols-1 md:grid-cols-2' style={navbarStyle}>
                 
  <div>
    <img className='w-12 h-14' src={logo1}/>
    <p style={{fontFamily:'Rencho', fontSize:'45px', color:'#331A15'}}>Espresso Emporium</p>
    <p style={{fontFamily:'Raleway'}} className='text-[20px]'>Always ready to be your friend. Come & Contact with us<br/> to share your memorable moments, to share <br/> with your best companion.</p>
    <p className='inline-flex text-2xl'>
        <FaFacebook className='m-1'></FaFacebook>
        <FaTwitter className='m-1'></FaTwitter>
        <FaInstagram className='m-1'></FaInstagram>
        <FaLinkedin className='m-1'></FaLinkedin>
    </p>
    <h1 style={{fontFamily:'Rencho', fontSize:'45px', color:'#331A15'}}>Get in Touch</h1>
    <p className='inline-flex'><FaPhone className='mr-2'></FaPhone> +88028477777</p><br/>
    <p className='inline-flex'><FaEnvelope  className='mr-2'></FaEnvelope>info@gmail.com</p><br/>
    <p className='inline-flex '><MapPinIcon className='w-6 h-8 mr-2'></MapPinIcon>72, Wall street, King Road, Dhaka</p>
  </div> 
  <div>
   
    <div className="">
     <h1 style={{fontFamily:'Rencho', fontSize:'45px', color:'#331A15'}}>Connect with us</h1>
     <form>
        <input type="text" placeholder='Enter your Name' name="name" id="" className='p-3 border-2 mt-2 border-slate-500 rounded-lg' /><br/>
        <input type="email" placeholder='Enter your Email' name="email" id="" className='p-3 border-2 mt-2 border-slate-500 rounded-lg'/><br/>
        <textarea name="textarea" id="" cols="30" rows="5" placeholder='textarea.....' className='p-3 mt-2 border-2 border-slate-500 rounded-lg'></textarea>
        <input type="submit" value="Send Message" className='btn btn-warning block'/>
     </form>
    </div>
  </div>
        </div>
  

    );
};

export default Footer;