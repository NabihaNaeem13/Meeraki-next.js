import { useProductContext } from 'Context/productContext';
import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const API = "https://meeraki.com/api/v2/products/related/";

export const MostViewed = ({ additionalClass }) => {
  const router = useRouter();
  const {getRelateProduct,RelatedProucts,isRelatedLoading}=useProductContext();
  const {id}=router.query;

  useEffect(() => {
    getRelateProduct(`${API}${id}`);
  }, [router.query.id]);

  if(isRelatedLoading){
      return<div>Loading.....</div>
  }

  return (
    <>
      {/* <!-- BEGIN MOST VIEWED --> */}
      <section className={`arrivals ${additionalClass ? additionalClass : ''}`}>
        <SectionTitle
          subTitle='Cosmetics'
          title='You Have Viewed'
          body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
        />

        <div className='products-items'>
          <ProductsCarousel products={RelatedProucts} />
        </div>
      </section>
      {/* <!-- MOST VIEWED EOF --> */}
    </>
  );
};
