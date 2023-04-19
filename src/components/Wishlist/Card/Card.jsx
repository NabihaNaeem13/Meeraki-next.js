import Link from 'next/link';

export const Card = ({ wish }) => {
  const { name,thumbnail_image, id, productNumber, base_price,current_stock,product_sku } = wish;
  return (
    <>
      {/* <!-- BEGIN WISHLIST CARD --> */}
      <div className='cart-table__row'>
        <div className='cart-table__col'>
          <Link href={`/product/${id}`}>
            <a className='cart-table__img'>
              <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
            </a>
          </Link>
          <div className='cart-table__info'>
            <Link href={`/product/${id}`}>
              <a className='title5'>{name}</a>
            </Link>
            <span className='cart-table__info-num'>SKU:{product_sku}</span>
          </div>
        </div>
        <div className='cart-table__col'>
          <span className='cart-table__price'>{base_price}</span>
        </div>
        <div className='cart-table__col'>
          {current_stock ? (
            <span className='wishlist-stock'>in stock</span>
          ) : (
            <span className='wishlist-available'>not available</span>
          )}
        </div>
        <div className='cart-table__col'>
          <span className='cart-table__total'>
            <Link href={`/product/${id}`}>
              <a className='blog-item__link'>
                buy now <i className='icon-arrow-md'></i>
              </a>
            </Link>
          </span>
        </div>
      </div>
      {/* <!-- WISHLIST CARD EOF--> */}
    </>
  );
};