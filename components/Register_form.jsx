'use client'

import { useState, useEffect } from "react"
import { SignUp } from "./SignUp"
import {Icon} from 'react-icons-kit'
import { Formik, Field, ErrorMessage } from 'formik';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

const Register_form = () => {
    const [typeOfPasswordField, setTypeOfPasswordField] = useState('password')
    const [icon, setIcon] = useState(eyeOff)
    
    // const handleToggle = () => {
    //     if (typeOfPasswordField === 'password'){
    //        setIcon(eye)
    //        setTypeOfPasswordField('text')
    //     } 
    //     else {
    //        setIcon(eyeOff)
    //        setTypeOfPasswordField('password')
    //     }
    // }

    return (
        <>
            <Formik
                initialValues={{ Username: '', Email: '', Password: '' }}
                onSubmit={ (values) => SignUp(values) }
            >
                {(formik) => (
                    <form onSubmit={ formik.handleSubmit }>
                        <div id='form-holder' className="form-holder mt-12">
                            <label htmlFor="RegisterUsername"></label>
                                <Field
                                    id="RegisterUsername"
                                    name="Username"
                                    className="input"
                                    type="text"
                                    placeholder="Username"
                                />
                            

                            <label htmlFor="RegisterEmail"></label>
                                <Field
                                id="RegisterEmail"
                                name="Email" 
                                className="input" 
                                type="email"
                                placeholder="Email"
                                />
                            

                            <label htmlFor="Password"></label>
                                <Field
                                    id="RegisterPassword"
                                    // type={typeOfPasswordField}
                                    type='password'
                                    name="Password" 
                                    className="input" 
                                    placeholder="Password"
                                />
                            

                            {/* <span className="flex justify-around items-center " onClick={handleToggle}>
                                <Icon className="absolute password-control mr-10" icon={icon} size={25}/>
                            </span>     */}
                        </div>
                        <button className="submit-btn">Sign up</button>
                    </form>                    
                )}

            </Formik>
        </>
    )
}

export {Register_form};