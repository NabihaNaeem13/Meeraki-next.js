import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useState } from "react";
const WishlistContext = createContext();

const WishProvider = ({ children }) => {
    const [wishList,setWishList]=useState([]);

    return <WishlistContext.Provider value={{wishList,setWishList}}>{children}</WishlistContext.Provider>;
}

//custom hooks
const useWishlistContext = () => {
    return useContext(WishlistContext);
  };

export { WishProvider, WishlistContext, useWishlistContext };