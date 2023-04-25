import { useProductContext } from 'Context/productContext'
import React from 'react'
import { Sub_category } from './Sub_category';
import Link from "next/link";

export const AllCategory = () => {
    const {readyToWear,Unstitched}=useProductContext();
    console.log("readyToWear",readyToWear);
  return (
    <div className='container'>
            <div className="mb-3 bg-white shadow-sm rounded">
                <div className="p-3 border-bottom fs-16 fw-600">
                    <a className="text-reset">{readyToWear.name}</a>
                </div>
                <Sub_category id={readyToWear.id}/>
            </div>
            <div className="mb-3 bg-white shadow-sm rounded">
                <div className="p-3 border-bottom fs-16 fw-600">
                    <a className="text-reset">{Unstitched.name}</a>
                </div>
            </div>
            </div>
  )
}
