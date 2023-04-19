import { createContext, useState } from 'react';
import '../styles/styles.scss';
import { AppProvider } from 'Context/productContext';
import { WishProvider } from 'Context/wishlistContext';


export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);
  return (
    <AppProvider>
    <WishProvider>
    <CartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
    </CartContext.Provider>
    </WishProvider>
    </AppProvider>
  );
};

export default MyApp;
