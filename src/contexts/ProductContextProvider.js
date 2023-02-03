import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContextProvider";

export const ProductsContext = createContext(null);

export default function ProductsContextProvider({ children }) {
    const [productsInCart, setProductsInCart] = useState([]);
    const [productsInWishlist, setProductsInWishlist] = useState([]);

    const { isAuthenticated} = useContext(AuthContext);

    const addProductToCart = (gameId) => {
        if (!isAuthenticated) return;

        const productIndex = findProductIndexInList(productsInCart, gameId);

        if (productIndex === -1) {
            productsInCart.push(gameId); 
        }   else {
                productsInCart.splice(productIndex, 1);
        }
        setProductsInCart([...productsInCart]);
       
    };

    const addProductToWishlist = (gameId) => {
        if (!isAuthenticated) return;

        const productIndex = findProductIndexInList(productsInWishlist, gameId);

        if (productIndex === -1) {
            productsInWishlist.push(gameId); 
        }   else {
                productsInWishlist.splice(productIndex, 1);
        }
        setProductsInWishlist([...productsInWishlist]);
        console.log(productsInWishlist)
    };

    const isProductInWishlist = (gameId) => {
        const productIndex = findProductIndexInList(productsInWishlist, gameId);
        return productIndex === -1 ? false : true;
    }

    const isProductInCart = (gameId) => {
        const productIndex = findProductIndexInList(productsInCart, gameId);
        return productIndex === -1 ? false : true;
    }

    const findProductIndexInList = (list, gameId) => {
        const productIndex = list.findIndex(
            (listGameId) =>
                listGameId === gameId
                
        );

        return productIndex;
    };
    

    return (
        <ProductsContext.Provider value={{productsInCart, productsInWishlist, addProductToCart, addProductToWishlist, isProductInCart, isProductInWishlist}}>{children}</ProductsContext.Provider>
    )
}
