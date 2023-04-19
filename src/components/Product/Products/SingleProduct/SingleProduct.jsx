import Link from 'next/link';

export const SingleProduct = ({
  product,
  onAddToWish,
  onAddToCart,
  addedInCart,
  addInWishList
}) => {
  const { name, thumbnail_image,base_price,id,category_name } = product;
  
  return (
    <>
      {/* <!-- BEING SINGLE PRODUCT ITEM --> */}
      <div className='products-item'>
        <div className='products-item__type'>
          {category_name && <span className='products-item__sale'>{category_name}</span>}
        </div>
        <div className='products-item__img'>
          <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
          <div className='products-item__hover'>
            <Link href={`/product/${id}`}>
              <a>
                <i className='icon-search'></i>
              </a>
            </Link>
            <div className='products-item__hover-options'>
              <button disabled={addInWishList}
                className={`addList ${addInWishList ? 'added' : ''}`} onClick={() => onAddToWish(id)}>
                <i className='icon-heart'></i>
              </button>
              <button
                disabled={addedInCart}
                className={`addList ${addedInCart ? 'added' : ''}`}
                onClick={() => onAddToCart(id)}
              >
                <i className='icon-cart'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='products-item__info'>
          <Link href={`/product/${id}`}>
            <a>
              <span className='products-item__name'>{name}</span>
            </a>
          </Link>
          <span className='products-item__cost'>
            {base_price}
          </span>
        </div>
      </div>
      {/* <!-- SINGLE PRODUCT ITEM EOF <span>{base_price && `${base_price}`}</span>--> */}
    </>
  );
};
