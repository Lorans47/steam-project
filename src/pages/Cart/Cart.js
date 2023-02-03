import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import './Cart.css'
import { ProductsContext } from '../../contexts/ProductContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import games from './../../data/library';


export default function Cart() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const { productsInCart, addProductToWishlist,  isProductInWishlist, addProductToCart, isProductInCart} = useContext(ProductsContext);
   

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <div className="wishlist-products-container">
                {productsInCart.length > 0 ? (
                    <div className="wishlist-data">
                        <h2 className="wishlist-data-title">Cart</h2>
                    </div>
                ) : (
                    <p className="wish-cart-text-color">You don't have any game in your cart.</p>
                )}

                <div className="wishlist-products">
                    {productsInCart.map((key) => {
                        return (
                            <div>
                                <div className="game-trending-wrapper">
                                    <img
                                        className="game-image-trending"
                                        src={games.get(key).img}
                                    ></img>

                                    <div className="game-name-trending">
                                        {games.get(key).name}
                                        <div className="game-name-trending">
                                            {games.get(key).tags}
                                        </div>
                                    </div>

                                    <div className="game-hours-trending">
                                        {games.get(key).discount ?<div> <s>
                                            <p className="old-trending-price">
                                                {games.get(key).price}
                                            </p>
                                        </s>
                                        <p className="trending-discount">
                                            
                                            {games.get(key).discount}
                                        </p></div> : <p> {games.get(key).price}</p>}
                                        
                                        
                                        {isAuthenticated && (
                                        <div className="bottom-wishlist-cart">
                                        <button onClick={() => addProductToWishlist(key)}>{isProductInWishlist(key) ? "Remove" :"Add to wishlist" }</button>
                                        <button className="add-to-cart-button" onClick={() => addProductToCart(key)}><FontAwesomeIcon icon={isProductInCart(key) ? faCheckCircle : faCartArrowDown}/></button>
                                    </div> )}
                                    </div>
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}