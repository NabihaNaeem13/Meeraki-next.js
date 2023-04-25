import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin'
import React from 'react'
import router from 'next/router';

export const GuestLogin = () => {
  return (
    <>
    {/* <!-- BEGIN LOGIN --> */}
    <div className='login'>
      <div className='wrapper'>
        <div
          className='login-form js-img'
          style={{ backgroundImage: `url('/assets/img/login-form__bg.png')` }}
        >
         <form className="mt-md-4">
            <h3>log in with</h3>
            <SocialLogin />
            <label className='checkbox-box checkbox-box__sm'>
              <input type='checkbox' />
              <span className='checkmark'></span>
              By signing up you agree to our terms and conditions.
            </label>
            <div className="separator mb-3 mt-3">
            <button className='btn'>
            Login as a Guest
            </button>
          </div>
            <div className='login-form__bottom'>
              <span>
              Already have an account?{' '}
                <a onClick={() => router.push('/login')}>
                Log In
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
