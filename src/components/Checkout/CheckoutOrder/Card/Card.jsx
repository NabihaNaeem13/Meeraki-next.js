import Link from 'next/link';

export const Card = ({ order }) => {
  const {   name,
    thumbnail_image,
    id,
    product_sku,
    quantity,
    calculable_price,
    currency_symbol} = order;

  return (
    <>
      {/* <!-- BEING ORDER ITEM CARD --> */}
      <div className='checkout-order__item'>
        <Link href={`/SingalProduct/${id}`}>
          <a className='checkout-order__item-img'>
            <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
          </a>
        </Link>
        <div className='checkout-order__item-info'>
          <Link href={`/SingalProduct/${id}`}>
            <a className='title6'>
              {name} <span>x{quantity}</span>
            </a>
          </Link>
          <span className='checkout-order__item-price'>
            {currency_symbol}{(calculable_price * quantity).toFixed(2)}
          </span>
          <span className='checkout-order__item-num'>SKU: {product_sku}</span>
        </div>
      </div>
      {/* <!-- ORDER ITEM CARD EOF --> */}
    </>
  );
};
