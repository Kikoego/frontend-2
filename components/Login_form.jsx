'use client';
import { useState } from 'react';
import { signIn, getCsrfToken, useSession } from 'next-auth/react';
import { Formik, Field, ErrorMessage } from 'formik';
// import {Icon} from 'react-icons-kit';
// import {eyeOff} from 'react-icons-kit/feather/eyeOff';
// import {eye} from 'react-icons-kit/feather/eye'
// import { values } from 'lodash';

const Login_form = () => {

    // const [typeOfPasswordField, setTypeOfPasswordField] = useState('password')
    // const [icon, setIcon] = useState(eyeOff)
    const [error, setError]= useState(null)
    const { data: session } = useSession();
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


    const handleLoginUser = async (e) => {
        e.preventDefault();
        const res = await signIn("credentials", {
        redirect: false,
        email: values.username,
        password: values.password,
        callbackUrl: `${window.location.origin}`

        })
        if (res?.error) {
            setError(res.error);
            // console.log(error)
            console.log("res: ", res)
        } else {
            
            setError(null);
        }
    }
    if (session){
        return(
            <>
            <p>you already log in as name</p>
            {console.log(session.user)}
            </>
        )
    }
    return (
        <>
            <Formik
                initialValues={{ username: '', password: '', tenantKey: '' }}
                onSubmit={ async (values, { setSubmitting }) => {
                
                const res = await signIn('credentials', {
                    redirect: false,
                    username: values.username,
                    password: values.password,
                    callbackUrl: `${window.location.origin}`,
                })


                if (res?.error) {
                    setError(res.error);
                    console.log(error)
                } else {
                    setError(null);
                }
               
              }}>

            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-holder">
                        <label htmlFor="Username">
                            <Field
                                name="username"
                                placeholder="Username"
                                type="text"
                                className="py-4 input"
                            />
                        </label>


                        <label htmlFor='Password'>
                            <Field
                                name='password'
                                // type={typeOfPasswordField}
                                type='password'
                                className="input"
                                placeholder="Password"
                            />
                        </label>
                        {/* <span className="flex justify-around items-center " onClick={handleToggle}>
                            <Icon className="absolute password-control psw-eye-login mr-10" icon={icon} size={25}/>
                        </span> */}
                    </div>
                    <button className="submit-btn">Log in</button>
                </form>
            )}

            </Formik>
        </>
    )
}


export async function getServerSideProps(context) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    };
  }


export {Login_form}

























