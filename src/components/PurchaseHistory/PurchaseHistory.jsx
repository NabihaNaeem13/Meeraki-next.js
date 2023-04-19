import React from 'react';
import {FaTimes,FaSignOutAlt,FaUserCircle,FaBattleNet,FaRegHeart, FaTruck} from "react-icons/fa";
import {SlHome} from "react-icons/sl";
import {AiOutlineFileText} from "react-icons/ai";
import {HiOutlineUser} from "react-icons/hi";
import router from 'next/router';

export const PurchaseHistory = () => {
  return (
    <>
        <section className='py-5 container'>
        <div className="row">
        <div className="col-3 remove-col">
         <div className='card'>
            <div className='d-flex'>
                <h1 className='col-sm-10 h5 px-2'><FaSignOutAlt id='logout'/></h1>
                <div className='col-sm-2 text-center'><FaTimes/></div>
            </div>
            <div className='text-center'>
             <FaUserCircle className='fs-1' style={{color:"#dee2e6"}}/>
             <h1 className='h5'>Nabiha Naeem</h1>
            </div>
            <ul className="list-group">
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/dashboard')}><SlHome className='aiz-side-nav-icon'/>
Dashboard</a>
<a className="list-group-item aiz-side-nav-link d-flex active" onClick={() => router.push('/purchase_history')}><AiOutlineFileText className='aiz-side-nav-icon'/>
Purchase History</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/trackOrder')}>
<FaTruck className='aiz-side-nav-icon'/>Track Order</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/wishlist')}>
<FaRegHeart className='aiz-side-nav-icon'/>Wishlist</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/support_ticket')}>
<FaBattleNet className='aiz-side-nav-icon'/>
Support Ticket</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/manage_profile')}>
<HiOutlineUser className='aiz-side-nav-icon'/>Manage Profile</a>
</ul>
         </div>
        </div>
        <div className="col-md-8">
        <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Purchase History</h5>
        </div>
            </div>
           </div>
        </div>
        </section>
    </>
  )
}
