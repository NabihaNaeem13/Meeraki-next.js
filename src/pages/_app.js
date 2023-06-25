import { createContext, useEffect, useState } from 'react';
import '../styles/styles.scss';
import { AppProvider } from 'Context/productContext';
import { WishProvider } from 'Context/wishlistContext';
import { CurrenciesProvider } from 'Context/CurrenciesContext';
import { AuthProvider } from 'Context/AuthContext';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { CardListProvider } from 'Context/CardListContext';


export const CartContext = createContext();
const MyApp = ({ Component, pageProps}) => {
  const [mycart,setMycart]=useState({});
  const [subtotal,setsubtotal]=useState(0);
  const [progress, setProgress] = useState(0);
  const [user,setUser]=useState({value:null});
  const [user_id,setUser_id]=useState(0);
  const [key,setKey]=useState(0);
 const router=useRouter();

  const saveCart=(apcart)=>{
    localStorage.setItem("cart",JSON.stringify(apcart));
    subtotal=0
    let key=Object.keys(apcart)
    for(let i=0;i<key.length;i++){
      subtotal+=apcart[key[i]].price * apcart[key[i]].quantity
    }
    setsubtotal(subtotal)
  }
 
  const ADDTOCART=async(userId,product_id,variant,quantity,user_token,name,price,image,product_sku,current_stock,base_price)=>{
    const user_id= parseInt(userId)
    let newCart=await JSON.parse(JSON.stringify(mycart));

    if(product_id in newCart){
      newCart[product_id].quantity=newCart[product_id].quantity + quantity
   }
   else{
    try{
      const res=await axios.post("https://meeraki.com/api/v2/carts/add",{user_id,product_id,variant,quantity},
        {
          headers: {
            Authorization: 'Bearer ' + user_token//the token is a variable which holds the token
          }
        }
       );
       if(res.data.result===true){
        newCart[product_id]={variant,quantity:quantity,name,price,image,product_sku,current_stock,base_price}
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
       }
       setMycart(newCart)
       saveCart(newCart)
    }catch(err){
        console.log(err);
    }
   }
  }

  const addtocart=(id,name,size,price,quantity,image,product_sku,current_stock,stroked_price,base_price)=>{
   let newCart=JSON.parse(JSON.stringify(mycart));
   if(id in newCart){
      newCart[id].quantity=newCart[id].quantity + quantity
   }
   else{
    newCart[id]={name,size,price,quantity:quantity,image,product_sku,current_stock,stroked_price,base_price}
    toast.success('Product added in the cart', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      }); 
  }
   setMycart(newCart)
   saveCart(newCart)
  }


  const removeFromCart=(id,name,size,price,quantity,image,product_sku,current_stock,stroked_price)=>{
    let newCart=JSON.parse(JSON.stringify(mycart));
    if(id in mycart){
       newCart[id].quantity=mycart[id].quantity - quantity
    }
    if(newCart[id].quantity<=0){
      delete newCart[id]
    }
    setMycart(newCart)
    saveCart(newCart)
   }

   useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
      console.log("load")
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(400)
      console.log("load")
    })
    console.log("hey me me!");
    try{
      if(localStorage.getItem('mycart')){
        setMycart(JSON.parse(localStorage.getItem("mycart")))
        saveCart(JSON.parse(localStorage.getItem("mycart")))
       }
    }catch(error){
       console.error(error);
       localStorage.clear()
    }
    const token=localStorage.getItem('token')
    const userId=localStorage.getItem('User');
    if(token){
      setUser({value:token})
      setUser_id(userId);
      setKey(Math.random())
    }
   },[router.query])

   const Logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('User')
    localStorage.removeItem('user_name')
    setUser({value:null})
    setKey(Math.random())
    router.push('/')
   }

   const buyNow=(id,name,size,price,quantity,image,product_sku,current_stock,stroked_price,base_price)=>{
    saveCart({})
    let newCart=JSON.parse(JSON.stringify(mycart));
   if(id in newCart){
      newCart[id].quantity=newCart[id].quantity + quantity
   }
   else{
    newCart[id]={name,size,price,quantity:quantity,image,product_sku,current_stock,stroked_price,base_price}
   }
   setMycart(newCart)
   saveCart(newCart)
   router.push('/checkout')
   }

   const clearcart=()=>{
    setMycart({})
    saveCart({})
   }
  return (
    <>
     <LoadingBar
        color='#000 !important'
        progress={progress}
        waitingTime={100}
        onLoaderFinished={() => setProgress(0)}
      />
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
    <AuthProvider>
    <CurrenciesProvider>
    <AppProvider>
    <CardListProvider>
    <WishProvider>
    <CartContext.Provider value={{Logout,buyNow,user_id,ADDTOCART,addtocart,removeFromCart,mycart,clearcart,subtotal,user,key}}>
      <Component {...pageProps} />
    </CartContext.Provider>
    </WishProvider>
    </CardListProvider>
    </AppProvider>
    </CurrenciesProvider>
    </AuthProvider>
    </>
  );
};

export default MyApp;
