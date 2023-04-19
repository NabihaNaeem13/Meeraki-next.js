import categoryData from 'data/category/category';
import { Categories } from './Categories/Categories';
import { useProductContext } from 'Context/productContext';

export const Category = () => {
  const categories = [...categoryData];
  const {NewArrivalProduct}=useProductContext();

  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className='all-categories'>
        <div className='top-categories__items'>
          <Categories categories={NewArrivalProduct} />
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF --> */}
    </>
  );
};
