import React from 'react'
import { Categories } from './Categories/Categories'
import { useProductContext } from 'Context/productContext'

export const WinterWear = () => {
    const {winterWear}=useProductContext();
    console.log("winterWear",winterWear);
  return (
    <>
    {/* <!-- BEGIN TOP CATEGORIES --> */}
    <section className='all-categories'>
    <div className='top-categories__items'>
      <Categories categories={winterWear}/>
    </div>
  </section>
  {/* <!-- TOP CATEGORIES EOF --> */}
  </>
  )
}
