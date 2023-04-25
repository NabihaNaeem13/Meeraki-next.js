import React from 'react'
import { Categories } from './Categories/Categories'
import { useProductContext } from 'Context/productContext'

export const Basics = () => {
    const {basics,isBasicsLoading}=useProductContext();
    if(isBasicsLoading){
        return(
            <div>Loading...</div>
        )
    }
  return (
    <>
        {/* <!-- BEGIN TOP CATEGORIES --> */}
        <section className='all-categories'>
        <div className='top-categories__items'>
          <Categories categories={basics}/>
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF --> */}
      </>
  )
}
