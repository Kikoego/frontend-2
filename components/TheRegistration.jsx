'use client'

import { useState, useEffect } from "react"
import { Login_form } from "./Login_form"
import { Register_form } from "./Register_form"
import { SignUp, setTypeOfForm } from "./SignUp";
import backgroundImage from "public/assets/images/scale_1200.jpg";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'


const TheRegistration = () => {
    const [typeOfAuth, setTypeOfAuth] = useState('registaration')
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
  
    const handleToggle = () => {
      if (type === 'password'){
         setIcon(eye);
         setType('text')
      } 
      else {
         setIcon(eyeOff)
         setType('password')
      }
    }

   setTypeOfForm(typeOfAuth) //меняет с логина на регистрацию и наоборот 

    return (
        <>
            <div className="form-container bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-400 bg-cover min-w-full min-h-screen">
                <div style={{  backgroundImage: `url(${backgroundImage.src})`, }}
                className="form-structor" >
                    
                        <div className="signup" id="signup-window">
                            <h2 className="form-title" id="signup" onClick={ () => setTypeOfAuth('Registration')}><span>or</span>Sign up</h2>
                            
                            <div id='error-holder' className="error-holder w-full h-0 bg-white rounded-2xl">
                                <span className="text-error-holder">
                                    {}
                                </span>
                            </div>

                            <Register_form/>
                            
                        </div>
                    

                    <div className="login slide-up" id="login-window">
                        <div className="center">
                            <h2 className="form-title" id="login" onClick={ () => setTypeOfAuth('Login')}> <span>or</span> Log in</h2>
                            
                            <Login_form/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export {TheRegistration};
