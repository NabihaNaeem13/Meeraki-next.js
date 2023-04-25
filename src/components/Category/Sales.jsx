import React from 'react'
import { Categories } from './Categories/Categories'
import { useProductContext } from 'Context/productContext'

export const Sales = () => {
  const {isLoading,endSeasonProduct}=useProductContext();
  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <>
    {/* <!-- BEGIN TOP CATEGORIES --> */}
    <section className='all-categories'>
    <div className='top-categories__items'>
      <Categories categories={endSeasonProduct}/>
    </div>
  </section>
  {/* <!-- TOP CATEGORIES EOF --> */}
  </>
  )
}
