import React,{ useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ProductImage } from 'components/Product/ProductDetails/Product_Image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { CartContext } from 'pages/_app';
import { useWishlistContext } from 'Context/wishlistContext';
import { useProductContext } from 'Context/productContext';
import socialData from 'data/social';
import { useCurrenciesContext } from 'Context/CurrenciesContext';
import { useEffect } from 'react';
import { SizeValue } from 'components/Product/ProductDetails/SizeValue';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
const API = "https://meeraki.com/api/v2/products/";

export const SingleModel = ({id}) => {
    const [openSingle, setOpenSingle] = useState(false);
  const handleOpen = () => setOpenSingle(true);
  const handleClose = () => setOpenSingle(false);
  const { cart, setCart } = useContext(CartContext);
  const {getSingleProduct,singleProduct}=useProductContext();
  console.log("singleProduct",singleProduct);
  const [product, setProduct] = useState(null);
  const [addedInCart, setAddedInCart] = useState(false);
  const  {currency}=useCurrenciesContext();
  const price = singleProduct.calculable_price * currency.conversionRate;

  useEffect(() => {
    getSingleProduct(`${API}${id}`);
  }, [id]);


  useEffect(() => {
    if (singleProduct) {
      setAddedInCart(Boolean(cart?.find((pd) => pd.id === singleProduct.id)));
    }
  }, [product, cart]);


  const [quantity, setQuantity] = useState(1);

 

  const handleAddToCart = () => {
    const newProduct = { ...singleProduct, quantity: quantity };
    setCart([...cart, newProduct]);
  };
  return (
<div>
      <Button onClick={handleOpen}><i className='icon-cart'></i></Button>
      <Modal
        open={openSingle}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="container mt-3">
            <div className='bg-white'>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 mb-4'>
                  <div className='CUSTOM-ZOOM'>
                    <div className='row'>
                    <ProductImage photos={singleProduct.photos}/>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 tutwee'>
                 <div className='text-left'>
                 <h1 className="mb-2 fs-20 fw-600">
                 {singleProduct.name}
                            </h1>
                            <p style={{margin: "0", padding: "0"}}> <b>{singleProduct.product_sku}</b> </p>
                            <div className="row align-items-center">
                                <div className="col-6">
                                </div>
                                <div className="col-6 text-right">
                                   {singleProduct.current_stock > 0 ? <span className="badge badge-md badge-inline badge-pill badge-success">In Stock</span>:<span className="badge badge-md badge-inline badge-pill badge-danger">Out of Stock</span>}
                                  </div>
                                  <div className="row align-items-center">
                                    <div className="row no-gutters mt-1 mb-2">
                                    <div className="col-sm-2">
                                        <div className="opacity-50 my-2">Price:</div>
                                    </div>
                                    <div className="col-sm-10">
                                    <del className="fs-20 opacity-60"> 
                                            {singleProduct.stroked_price}
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
                                            {singleProduct.main_price}
                                            </strong>
                                        </div>
                                    </div>
                                </div>       
                            </div>
                            <form id="option-choice-form mt-0">
                                <input type="hidden" name="_token" value="YEA12NWGmycptTSr3iDp5tQU1Oi0ojHxN5sLOAAQ"/>
                                <input type="hidden" name="id" value="16"/>
                                <SizeValue sizeBox={singleProduct.choice_options}/>
                                
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
              </div>
                            </div>
                            <div className="d-table width-100 mt-3">
                        </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
