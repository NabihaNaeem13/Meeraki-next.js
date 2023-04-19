import React from 'react'
import {FaTimes,FaSignOutAlt,FaUserCircle,FaBattleNet,FaRegHeart,FaTruck} from "react-icons/fa";
import {SlHome} from "react-icons/sl";
import {AiOutlineFileText} from "react-icons/ai";
import {HiOutlineUser} from "react-icons/hi";
import router from 'next/router';
import { TrackForm } from './TrackForm';
import { useState } from 'react';
import { useEffect } from 'react';

export const TrackOrder = () => {

  const [searchedProduct, setSearchedProduct] = useState([]);
    console.log("TrackYourOrder",searchedProduct);

     
   const getSearched = async (order_code) => {
     try{
             const res = await axios.get(`https://meeraki.com/api/v2/track_your_order/${order_code}`);
             const searchproduct=await res.data.data;
             setSearchedProduct(searchproduct);
         }
     catch(err){
         console.log(err);
     }
   };
   
 
   useEffect(() => {
     getSearched();
   }, []); 
  return (
    <section className='py-5 container'>
    <div className="row">
    <div className="col-3 remove-col">
     <div className='card' style={{boxShadow: "0 0 13px 0 rgb(82 63 105 / 5%)"}}>
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
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/purchase_history')}><AiOutlineFileText className='aiz-side-nav-icon'/>
Purchase History</a>
<a className="list-group-item aiz-side-nav-link d-flex active" onClick={() => router.push('/trackOrder')}>
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
    <div className="card" style={{boxShadow: "0 0 13px 0 rgb(82 63 105 / 5%)"}}>
    <div className="card-header bg-white">
      <h1 className='fw-600 h4'>Track Order</h1>
    </div>
    <div className="card-body">
    <TrackForm/>
    </div>
</div>
       </div> 
    </div>
    </section>
  )
}
