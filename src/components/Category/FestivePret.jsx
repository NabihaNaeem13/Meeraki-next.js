import React from 'react'
import { Categories } from './Categories/Categories'
import { useProductContext } from 'Context/productContext'

export const FestivePret = () => {
    const {festivePret}=useProductContext();
  return (
    <>
    {/* <!-- BEGIN TOP CATEGORIES --> */}
    <section className='all-categories'>
    <div className='top-categories__items'>
      <Categories categories={festivePret}/>
    </div>
  </section>
  {/* <!-- TOP CATEGORIES EOF --> */}
  </>
  )
}
