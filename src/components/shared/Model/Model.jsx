import React, { useState } from "react";
import { HiUser } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";



const Model = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      <button
        type="button"
        className="modelLoginbtn text-left"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{border:"none",background:"transparent"}}
      >
        <HiUser className="mx-1 text-left" />
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
      <form>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2
                className="mb-0 text-dark h4 fw-600 text-center"
                id="exampleModalLabel"
              >
                Login to your account
              </h2>
            </div>
            <div className="modal-body">
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                          id="email"
                          placeholder="Email"
                          className="login-input"
                          name="email"
                          autoComplete='off' 
                        
                />
              </div>
              <div className="form-outline form-white mb-4">
                <input
                 type="password"
                          id="password"
                          placeholder="Password"
                          className="login-input"
                          name="password"
                          autoComplete='off' 
                        
                />
              </div>
              <div className="row mb-2">
                <div className="col d-flex justify-content-left">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkbox"
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="checkbox"
                    >
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="col offset-md-1">
                  <p
                    className="fs-13 forgot-p"
                    data-bs-toggle="modal"
                    data-bs-target="#ForgotPassword"
                    data-bs-dismiss="modal"
                    style={{ color: "#1b1b28" }}
                  >
                    Forgot password?
                  </p>
                </div>
              </div>

              <button
                 type="submit"
                className="btn btn-primary btn-block mb-1 col-12"
              >
                Login
              </button>
              <div className="separator mb-1">
                <p
                  className="forgot-p"
                  data-bs-toggle="modal"
                  data-bs-target="#GuestModel"
                  data-bs-dismiss="modal"
                  style={{ color: "#1b1b28" }}
                >
                  {" "}
                  <span className="fs-13" style={{backgroundColor:"white"}}>Login as a Guest</span>
                </p>
              </div>
              <div className="separator mb-2">
                <span className="bg-white px-3 opacity-60 text-dark fs-13" style={{backgroundColor:"white"}}>
                  Or Login With
                </span>
              </div>
              <ul className="list-inline social colored text-center mb-1">
                <li className="list-inline-item">
                  <a
                    href="http://meeraki.com/social-login/redirect/facebook"
                    className="facebook"
                  >
                    <FaFacebookF className="text-white mb-2 fs-13" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="http://meeraki.com/social-login/redirect/google"
                    className="google"
                  >
                    <TfiGoogle className="text-white mb-2 fs-13" />
                  </a>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-muted mb-0 fs-13" style={{ color: "#babac4" }}>
                  Dont have an account?
                </p>
                <button
                  type="button"
                  className="modelLoginbtn text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#Register"
                  data-bs-dismiss="modal"
                  style={{ color: "#1b1b28", fontSize: "0.83rem" }}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
      <div
        className="modal fade"
        id="ForgotPassword"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2
                className="mb-0 text-dark h4 fw-600 text-left"
                id="exampleModalLabel"
              >
                Forgot Password?
              </h2>
            </div>
            <div className="modal-body">
              <p className="mb-4 opacity-60 fs-13" style={{ color: "#898b92" }}>
                Enter your email address to recover your password.
              </p>
              <div className="form-outline form-white mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="login-input"
                  name="email"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block mb-2 col-12"
              >
                Send Password Reset Link
              </button>
              <p
                className="mb-0 opacity-60 fs-13 forgot-p"
                style={{ color: "#898b92" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-dismiss="modal"
              >
                Back to Login
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="Register"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
      <form>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2
                className="mb-0 text-dark h4 fw-600 text-center"
                id="exampleModalLabel"
              >
                Create account
              </h2>
            </div>
            <div className="modal-body">
              <div className="form-outline form-white mb-2">
                <input
                  type="text"
                  id="fulname"
                  placeholder="Full Name"
                  className="login-input"
                  name="name"
                />
              </div>
              <div className="form-outline form-white mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="login-input"
                  name="email"
                />
              </div>
              <div className="form-outline form-white mb-2">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="login-input"
                />
              </div>
              <div className="form-outline form-white mb-2">
                <input
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirm Password"
                  className="login-input"
                />
              </div>
              <div className="form-outline form-white mb-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                  />
                  <label className="form-check-label fs-13" htmlFor="form2Example31">
                    By signing up you agree to our terms and conditions.
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block mb-2 col-12"
              >
                Create Account
              </button>
              <button
                type="button"
                className="btn btn-primary btn-block mb-1 col-12"
                data-bs-toggle="modal"
                data-bs-target="#GuestModel"
                data-bs-dismiss="modal"
              >
                Login as a Guest
              </button>
              <div className="separator mb-2">
                <span
                  className="bg-white px-3 opacity-60  fs-13"
                  style={{ color: "#babac4",backgroundColor:"white" }}
                >
                  Or Join With
                </span>
              </div>
              <ul className="list-inline social colored text-center mb-1">
                <li className="list-inline-item">
                  <a
                    href="http://meeraki.com/social-login/redirect/facebook"
                    className="facebook"
                  >
                    <FaFacebookF className="text-white mb-1 fs-13" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="http://meeraki.com/social-login/redirect/google"
                    className="google"
                  >
                    <TfiGoogle className="text-white mb-1 fs-13" />
                  </a>
                </li>
              </ul>
              <div className="text-center">
                <p
                  className="text-muted mb-0 fs-13"
                  style={{ color: "#babac4" }}
                >
                  Already have an account?
                </p>
                <button
                  type="button"
                  className="modelLoginbtn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-dismiss="modal"
                  style={{ color: "#1b1b28", fontSize: "0.83rem" }}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
      <div
        className="modal fade"
        id="GuestModel"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2
                className="mb-0 text-dark h4 fw-600 text-center"
                id="exampleModalLabel"
              >
                Guest Login
              </h2>
            </div>
            <div className="modal-body">
              <div className="form-outline form-white mb-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                  />
                  <label className="form-check-label" htmlFor="form2Example31">
                    By signing up you agree to our terms and conditions.
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block mb-2 col-12"
              >
                Guest Login
              </button>
              <div className="separator mb-2">
                <span
                  className="bg-white px-3 opacity-60  fs-13"
                  style={{ color: "#babac4",backgroundColor:"white" }}
                >
                  Or Join With
                </span>
              </div>
              <ul className="list-inline social colored text-center mb-2">
                <li className="list-inline-item">
                  <a
                    href="http://meeraki.com/social-login/redirect/facebook"
                    className="facebook"
                  >
                    <FaFacebookF className="text-white mb-2 fs-13" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="http://meeraki.com/social-login/redirect/google"
                    className="google"
                  >
                    <TfiGoogle className="text-white mb-2 fs-13" />
                  </a>
                </li>
              </ul>
              <div className="text-center">
                <p
                  className="text-muted mb-0 fs-13"
                  style={{ color: "#babac4" }}
                >
                  Already have an account?
                </p>
                <button
                  type="button"
                  className="modelLoginbtn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-dismiss="modal"
                  style={{ color: "#1b1b28", fontSize: "0.83rem" }}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Model;
