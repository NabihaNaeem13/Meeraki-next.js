import { createContext, useState } from 'react';
import '../styles/styles.scss';
import { AppProvider } from 'Context/productContext';
import { WishProvider } from 'Context/wishlistContext';
import { CurrenciesProvider } from 'Context/CurrenciesContext';
import { AuthProvider } from 'Context/AuthContext';

export const CartContext = createContext();
const MyApp = ({ Component, pageProps}) => {
  const [cart, setCart] = useState([]);
  return (
    <AuthProvider>
    <CurrenciesProvider>
    <AppProvider>
    <WishProvider>
    <CartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
    </CartContext.Provider>
    </WishProvider>
    </AppProvider>
    </CurrenciesProvider>
    </AuthProvider>
  );
};

export default MyApp;
