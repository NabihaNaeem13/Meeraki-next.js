import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import React from 'react'

const newArrival = (props) => {
    console.log(props);
  return (
    <section className='arrivals'>
        <SectionTitle
          title='New Arrivals'
        />

        <div className='products-items'>
          <ProductsCarousel products={props.data.data} />
        </div>
      </section>
  )
}

export const getServerSideProps=async()=>{
   const res=await fetch('https://meeraki.com/api/v2/products/new-arrival');
   const data=await res.json();
    return{
        props:{
          data
        }
    }
}
export default newArrival