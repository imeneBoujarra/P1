import React from 'react';
import './login.css';
import { FaUser,FaLock } from "react-icons/fa";


const loginForm = () => {
    return (
        <div className='wrapper'>


             <form action=''>
               
               <h1>Login</h1>
               <div className='input-box'>
                  <input type='Text' placeholder='Email Adress' required/>
                  <FaUser className='icon' />
               </div>

               <div className='input-box'>
                  <input type='Password' placeholder='Password' required/>
                  <FaLock className='icon'/>    
               </div>

                <div className='Forget'>

                      <a href='#'>Forgot Password ?</a>               

                </div> 

                <button type='Submit'>Login</button>   


             </form>     
               
        </div>

    );


};

export default loginForm ;