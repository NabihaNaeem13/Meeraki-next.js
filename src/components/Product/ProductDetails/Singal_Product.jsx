import React from 'react'
import { Product_Image } from './Product_Image';
import { useContext, useEffect, useState } from 'react';
import socialData from 'data/social';
import { ReviewFrom } from '../ReviewForm/ReviewFrom';
import { useRouter } from 'next/router';
import { CartContext } from 'pages/_app';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useWishlistContext } from 'Context/wishlistContext';
import { SizeValue } from './SizeValue';
import {BasicModal} from './BasicModal';
import { useCurrenciesContext } from 'Context/CurrenciesContext';

export const Singal_Product = (data) => {
    const productDetail=data.data.data.data[0];
    const { cart, setCart } = useContext(CartContext);
    const {wishList,setWishList}=useWishlistContext();
    const socialLinks = [...socialData];
    const [addedInCart, setAddedInCart] = useState(false);
  const [addInWishList, setAddInWishList] = useState(false);
  const  {currency}=useCurrenciesContext();
  const price = productDetail.calculable_price * currency.conversionRate;

  useEffect(() => {
    if (productDetail) {
      setAddedInCart(Boolean(cart?.find((pd) => pd.id === productDetail.id)));
    }
  }, [cart]);

  useEffect(() => {
    if (productDetail) {
      setAddInWishList(Boolean(wishList?.find((pd) => pd.id === productDetail.id)));
    }
  }, [wishList]);

  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(2);

 

  const handleAddToCart = () => {
    const newProduct = { ...productDetail, quantity: quantity };
    setCart([...cart, newProduct]);
  };

  const handleAddToWish=()=>{
    const newProduct = {...productDetail};
    setWishList([...wishList, { ...newProduct}]);
   }
  console.log("allnewArrival 5 line",productDetail);
  return (
    <div className="container mt-3">
    <div className='bg-white'>
      <div className='row'>
        <div className='col-xl-6 col-lg-6 mb-4'>
          <div className='CUSTOM-ZOOM'>
            <div className='row'>
            <Product_Image photos={productDetail.photos}/>
            </div>
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 tutwee'>
         <div className='text-left'>
         <h1 className="mb-2 fs-20 fw-600">
         {productDetail.name}
                    </h1>
                    <p style={{margin: "0", padding: "0"}}> <b>{productDetail.product_sku}</b> </p>
                    <div className="row align-items-center">
                        <div className="col-6">
                        </div>
                        <div className="col-6 text-right">
                           {productDetail.current_stock > 0 ? <span className="badge badge-md badge-inline badge-pill badge-success">In Stock</span>:<span className="badge badge-md badge-inline badge-pill badge-danger">Out of Stock</span>}
                          </div>
                          <p className='mt-2'><div
dangerouslySetInnerHTML={{__html: productDetail.description}}/></p>
   <div className='contacts-info__social mt-2'>
        <span>Share here:</span>
        <ul>
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a href={social.path}>
                <i className={social.icon ? social.icon : ''}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
                          <div className="row align-items-center">
                            <div className="row no-gutters mt-3 mb-2">
                            <div className="col-sm-2">
                                <div className="opacity-50 my-2">Price:</div>
                            </div>
                            <div className="col-sm-10">
                            <del className="fs-20 opacity-60"> 
                                    {productDetail.stroked_price}
                                    </del>   
                            </div>
                        </div></div>
                        <div className="row no-gutters my-2">
                            <div className="col-sm-4">
                                <div className="opacity-50">Discount Price:</div>
                            </div>
                            <div className="col-sm-8">
                                <div className="">
                                    <strong className="h2 fw-600 text-primary">
                                    {productDetail.main_price}
                                    </strong>
                                </div>
                            </div>
                        </div>       
                    </div>
                    <form id="option-choice-form">
                        <input type="hidden" name="_token" value="YEA12NWGmycptTSr3iDp5tQU1Oi0ojHxN5sLOAAQ"/>
                        <input type="hidden" name="id" value="16"/>
                        <SizeValue sizeBox={productDetail.choice_options}/>
                        <BasicModal/>
                        <div className="row no-gutters">
                            <div className="col-sm-2">
                                <div className="opacity-50 my-2">Quantity:</div>
                            </div>
                            <div className="col-sm-10">
                            <div className='counter-box'>
            <span
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
              className='counter-link counter-link__prev'
            >
              <i className='icon-arrow'></i>
            </span>
            <input
              type='text'
              className='counter-input'
              disabled
              value={quantity}
            />
            <span
              onClick={() => setQuantity(quantity + 1)}
              className='counter-link counter-link__next'
            >
              <i className='icon-arrow'></i>
            </span>
          </div>
                            </div>
                        </div>
                        <div className="row no-gutters pb-3 mt-3" id="chosen_price_div">
                            <div className="col-sm-3 mt-2">
                                <div className="opacity-50 my-2">Total Price:</div>
                            </div>
                            <div className="col-sm-9">
                                <div className="product-price mt-0">
                                    <strong id="chosen_price" className="h4 fw-600 text-primary">{currency.symbol}{price}</strong>  
                                </div>
                            </div>
                        </div>
                        </form>
                        <div className="mt-0" style={{display: "flex", alignItems: "center"}}>
                        <div className='product-buttons mt-0'>
        <button
          disabled={addedInCart}
          onClick={() => handleAddToCart()}
          className='btn-cartProductDetail'
        >
          <i className='icon-cart'></i> cart
        </button>
        <button className='btn btn-icon'>
        <AiOutlineShoppingCart className='mx-1' style={{fontSize:"16px",fontWeight:"400"}}/> Buy Now
        </button>
        <button className='btn-grey'  disabled={addInWishList} onClick={() => handleAddToWish()}  style={{backgroundColor:"#ffff",color:"#999999",border:"none"}}>
          <AiFillHeart className='btn-heart'/>
        </button>
      </div>
                    </div>
                    <div className="d-table width-100 mt-3">
                </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}
