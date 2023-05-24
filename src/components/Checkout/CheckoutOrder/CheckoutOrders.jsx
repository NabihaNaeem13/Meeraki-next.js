import productData from 'data/product/product';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { Card } from './Card/Card';
import { useCurrenciesContext } from 'Context/CurrenciesContext';

export const CheckoutOrders = () => {
  const { cart,mycart,subtotal} = useContext(CartContext);
  const  {currency}=useCurrenciesContext();
  console.log("subtotal",subtotal);
  const newprice = (subtotal * currency.conversionRate).toFixed(2);
 

  return (
    <>
      <div className='checkout-order'>
        <h5>Summary<span style={{marginLeft:"23rem",fontSize:"14px"}} className="badge badge-inline summary_checkitem-primary">{Object.keys(mycart).length ?? '0'} Items</span></h5>
                          
        {Object.keys(mycart).map((order) => (
          <Card order={mycart[order]} />
        ))}
      </div>
      <div className='cart-bottom__total border-0 shadow-sm p-4' style={{background:"#FFF"}}>
        <div className='cart-bottom__total-goods'>
          Subtotal
          <span>{currency.symbol}{newprice}</span>
        </div>
        <div className='cart-bottom__total-promo'>
        tax
          <span>PKR0.00</span>
        </div>
        <div className='cart-bottom__total-delivery'>
        Total Shipping
          <span>{currency.symbol}200.00</span>
        </div>
        <div className='cart-bottom__total-num'>
          total:
          {!subtotal==0? <span>{currency.symbol}{((subtotal + 200.00)* currency.conversionRate).toFixed(2)}</span>:<span>{currency.symbol}{((subtotal + 0)* currency.conversionRate).toFixed(2)}</span>}      
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
      </div>
     
                
    </>
  );
};
