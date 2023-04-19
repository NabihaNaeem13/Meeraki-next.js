import React from 'react'
import { Categories } from './Categories/Categories'
import { useProductContext } from 'Context/productContext'

export const FormalEdit = () => {
    const {formalEdit}=useProductContext();
  return (
    <>
        {/* <!-- BEGIN TOP CATEGORIES --> */}
        <section className='all-categories'>
        <div className='top-categories__items'>
          <Categories categories={formalEdit} />
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF --> */}
      </>
  )
}
