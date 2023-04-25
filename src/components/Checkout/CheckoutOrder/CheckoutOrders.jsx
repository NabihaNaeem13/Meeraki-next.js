import productData from 'data/product/product';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { Card } from './Card/Card';

export const CheckoutOrders = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce(
    (total, item) => total + Number(item.calculable_price) * Number(item.quantity),
    0
  );

  return (
    <>
      <div className='checkout-order'>
        <h5>Your Order</h5>
        {cart.map((order) => (
          <Card key={order.id} order={order} />
        ))}
      </div>
      <div className='cart-bottom__total'>
        <div className='cart-bottom__total-goods'>
          Goods on
          <span>{total.toFixed(2)}</span>
        </div>
        <div className='cart-bottom__total-promo'>
          Discount on promo code
          <span>No</span>
        </div>
        <div className='cart-bottom__total-delivery'>
          Delivery{' '}
          <span className='cart-bottom__total-delivery-date'>
            (Aug 28,2020 at 11:30)
          </span>
          <span>$30</span>
        </div>
        <div className='cart-bottom__total-num'>
          total:
          <span>{(total + 30).toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-3">
                    <form className="" method="POST">
                        <input type="hidden" name="_token" value="0daflsxKrcU1jn1kKlmVubrBhtcSr08OOd09EqBO"/>                        <div className="input-group">
                            <input type="text" id="coupon" className="form-control" name="code" placeholder="Have coupon code? Enter here" required=""/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-primary">Apply</button>
                            </div>
                        </div>
                    </form>
                </div>
    </>
  );
};
