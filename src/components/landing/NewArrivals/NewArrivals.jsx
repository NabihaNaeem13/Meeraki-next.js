import { useProductContext } from 'Context/productContext';
import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';

export const NewArrivals = () => {

  const {isnewArrivalLoading,NewArrivalProduct}=useProductContext();
    
  if(isnewArrivalLoading){
      return<div>Loading.....</div>
  }

  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          title='New Arrivals'
        />

        <div className='products-items'>
          <ProductsCarousel products={NewArrivalProduct} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};
