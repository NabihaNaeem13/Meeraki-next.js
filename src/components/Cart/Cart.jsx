import { Card } from './Card/Card';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import {BsArrowLeft} from "react-icons/bs";
import router from 'next/router';
import { AddToCart } from './addToCart';

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);


  const total = cart.reduce(
    (total, item) => total + Number(item.calculable_price) * Number(item.quantity),
    0
  );

  const handleProductQuantity = (change, quantity, id) => {
    console.log(change, quantity, id);
    if (change === 'increment') {
      cart.find((item) => item.id === id).quantity = quantity + 1;
      setCount(count + 1);
    }
    if (change === 'decrement' && quantity > 1) {
      cart.find((item) => item.id === id).quantity = quantity - 1;
      setCount(count + 1);
    }
  };

  useEffect(() => {
    setCart(cart);
  }, [cart, count]);

  return (
    <>
      {/* <!-- BEGIN CART --> */}
      <div className='cart'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col'>Product</div>
                <div className='cart-table__col'>Price</div>
                <div className='cart-table__col'>Tax</div>
                <div className='cart-table__col'>Quantity</div>
                <div className='cart-table__col text-center'>Total</div>
                <div className='cart-table__col text-center'>Remove</div>
              </div>

              {cart.map((cart) => (
                <Card
                  onChangeQuantity={(change, quantity) =>
                    handleProductQuantity(change, quantity, cart.id)
                  }
                  key={cart.id}
                  cart={cart}
                />
              ))}
            </div>
          </div>
          <div className="px-3 py-2 mb-4 d-flex justify-content-between">
                            <span className="opacity-60 fs-15">Subtotal</span>
                            <span className="fw-600 fs-17">PKR{total}</span>
                        </div>
          <div className='cart-bottom'>
            <div className='cart-bottom__promo'>
            <button className='btn btn-grey' onClick={() => router.push('/')}>
            <BsArrowLeft style={{fontSize:"1rem",marginRight:"10px"}}/>
            Return to shop
                  </button>
            </div>
            <Link href='/checkout'>
                <a className='btn' style={{lineHeight:"60px"}}>Continue to Delivery Information</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- CART EOF   --> */}
    </>
  );
};
