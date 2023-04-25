import { ForgotPasswordSchema } from 'Schemas';
import axios from 'axios';
import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import { useFormik } from 'formik';
import React from 'react'
import { useState } from 'react';
import router from 'next/router';

const initialValues={
    email:""
    }

const ForgotPassword = () => {
    const [error, setError] = useState();
  const [success,setSuccess]=useState(null);
  const onSubmit = async (values) => {
    try{
      const response = await axios.post("https://meeraki.com/api/v2/auth/password/forget_request", values);
      console.log("response", response.data.message);
      if (response.data.result === true) {
          setSuccess(response.data.message);
          setError(null);
          router.push('/Reset_Password');
          formik.resetForm();
      }else{
        setError(response.data.message);
        setSuccess(null);
      }
    }catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema:ForgotPasswordSchema
  });
  return (
    <>
      {/* <!-- BEGIN LOGIN --> */}
      <div className='login'>
        <div className='wrapper'>
          <div
            className='login-form js-img'
            style={{ backgroundImage: `url('/assets/img/login-form__bg.png')` }}
          >
           <form className="mt-md-4" onSubmit={formik.handleSubmit}>
              <h3>log in with</h3>
              {!error && <p className="text-center mb-2" style={{color:"green",fontSize:"1rem"}}>{success ? success : ""}</p>} 
              <SocialLogin />
              <p
                        className="mb-4 opacity-60 fs-13"
                        style={{ color: "#898b92" }}
                      >
                        Enter your email address to recover your password.
                      </p>
              <div className='box-field'>
                <input
                  type="email"
                  id="email"
                  className='form-control'
                  placeholder='Enter your email'
                  name="email"
                          autoComplete='off' 
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                />
                  {formik.errors.email && formik.touched.email ? (
                      <p className="form-error">{formik.errors.email}</p>
                    ) : null}
              </div>
              <button className='btn' type='submit'  disabled={!formik.isValid}>
              Send Password Reset Link
              </button>
              <div className='login-form__bottom'>
                <span>
                  <a onClick={() => router.push('/login')}>
                  Back to Login
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- LOGIN EOF   --> */}
    </>
  )
}

export default ForgotPassword