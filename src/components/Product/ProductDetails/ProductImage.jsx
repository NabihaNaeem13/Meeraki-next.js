import React from 'react'
import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import Slider from 'react-slick';

export const ProductImage = ({photos=[{url:""}]}) => {
    let photo=photos[0];
    const [mainImage,setMainImage]=useState(photo);
    console.log(mainImage);
  return (
    <>
     <div className='col-2'>
    {photos.map((curElement,index)=>{
    return(
        <ul className='picoplist'>
    <li key={index}><img src={`https://meeraki.com/public/${curElement}`} alt="" onClick={()=>setMainImage(curElement)}/></li>
    </ul>
    )
    })}
  </div>
  <div className='col-10'>
                       
                       <div className="picopZoomerlk">
                       <ReactImageMagnify style={{zIndex:"999"}} {...{
   smallImage: {
       alt: 'Wristwatch by Ted Baker London',
       isFluidWidth: true,
       src:`https://meeraki.com/public/${mainImage}`,
   },
   largeImage: {
       src:`https://meeraki.com/public/${mainImage}`,
       width: 1400,
       height: 1800
   }
}} />
           </div>
                  
                     </div>
            </>
  )
}
