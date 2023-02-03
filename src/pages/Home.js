import games from '../data/library';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useContext} from 'react';
import { AuthContext } from './../contexts/AuthContextProvider';
import { ProductsContext } from '../contexts/ProductContextProvider';



export default function Home() {
    const {isAuthenticated} = useContext(AuthContext);
    const {isProductInWishlist, isProductInCart, addProductToCart, addProductToWishlist, productsInWishlist, productsInCart} = useContext(ProductsContext)


    return (
        <div className="home-style">
            <div className="featured-game-bg">
                <div className="dummy-navbar">
                    <button className="dummy-navbar-button">Your Store</button>
                    <button className="dummy-navbar-button">
                        New & Noteworthy
                    </button>
                    <button className="dummy-navbar-button">Categories</button>
                    <button className="dummy-navbar-button">Points Shop</button>
                    <button className="dummy-navbar-button">News</button>
                    <button className="dummy-navbar-button">Labs</button>
                </div>

                <img className="featured-game" src={games.get('nfs').img}></img>
            </div>

            <h2 className="special-offers-text">SPECIAL OFFERS</h2>
            <div className="special-offers-wrapper">
                <div className="special-offers">
                    <img src={games.get('gta5').img}></img>
                    <span>TODAY'S DEAL !</span>
                    <span className="offer-ends">Offer ends Today!</span>
                    <div className="discount-wrapper">
                        <div className="discount-percent">-50%</div>
                        <div className="discount-numbers">
                            <div className="old-price">
                                <s>{games.get('gta5').price}</s>
                            </div>
                            <div className="new-price">
                                {games.get('gta5').discount}
                            </div>
                        </div>
                        {isAuthenticated && (
                        <div className="discount-wishlist-cart">
                            <button onClick={() => addProductToWishlist('gta5')}>{isProductInWishlist('gta5') ? "Remove" :"Add to wishlist" }</button>
                            <button className="add-to-cart-button" onClick={() => addProductToCart('gta5')}><FontAwesomeIcon icon={isProductInCart('gta5') ? faCheckCircle : faCartArrowDown }/></button>
                        </div> )}
                    </div>
                </div>
                <div className="special-offers">
                    <img src={games.get('eldenring').img}></img>
                    <span>WEEKEND DEAL - Until 30 Jan 2023</span>
                    <span className="offer-ends">Offer ends 30 Jan 2023!</span>
                    <div className="discount-wrapper">
                        <div className="discount-percent">-35%</div>
                        <div className="discount-numbers">
                            <div className="old-price">
                                <s>{games.get('eldenring').price}</s>
                            </div>
                            <div className="new-price">
                                {games.get('eldenring').discount}
                            </div>
                        </div>
                        {isAuthenticated && (
                        <div className="discount-wishlist-cart">
                            <button onClick={() => addProductToWishlist('eldenring')}>{isProductInWishlist('eldenring') ? "Remove" :"Add to wishlist" }</button>
                            <button className="add-to-cart-button" onClick={() => addProductToCart('eldenring')}><FontAwesomeIcon icon={isProductInCart('eldenring') ? faCheckCircle : faCartArrowDown }/></button>
                        </div> )}
                    </div>
                </div>
                <div className="special-offers">
                    <img src={games.get('fifa23').img}></img>
                    <span>TODAY'S DEAL !</span>
                    <span className="offer-ends">Offer ends soon!</span>
                    <div className="discount-wrapper">
                        <div className="discount-percent">-20%</div>
                        <div className="discount-numbers">
                            <div className="old-price">
                                <s>{games.get('fifa23').price}</s>
                            </div>
                            <div className="new-price">
                                {games.get('fifa23').discount}
                            </div>
                        </div>
                        {isAuthenticated && (
                        <div className="discount-wishlist-cart">
                            <button onClick={() => addProductToWishlist('fifa23')}>{isProductInWishlist('fifa23') ? "Remove" :"Add to wishlist" }</button>
                            <button className="add-to-cart-button" onClick={() => addProductToCart('fifa23')}><FontAwesomeIcon icon={isProductInCart('fifa23') ? faCheckCircle : faCartArrowDown }/></button>
                        </div> )}
                    </div>
                </div>
            </div>
            <h2 className="special-offers-text">STEAM DECK</h2>
            <div className="steam-deck-wrapper">
                <img
                    className="steam-deck-img"
                    src="https://cdn.cloudflare.steamstatic.com/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_desktop_english.gif?t=1672461895"
                ></img>
                <img
                    className="steam-vr"
                    src="https://cdn.cloudflare.steamstatic.com/store/home/store_index_promo.jpg"
                ></img>
            </div>

            <h2 className="special-offers-text">BROWSE BY CATERGORY</h2>
            <div className="browse-by-category">
                <button className="arrow-font-awesome">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className="img-container">
                    <img className="browse-picture"
                    src="https://store.steampowered.com/categories/homepageimage/category/strategy?cc=us&l=english">
                        </img><div className="centered-text">Strategy</div>

                </div>
                <div className="img-container">
                    <img className="browse-picture"
                    src="https://store.steampowered.com/categories/homepageimage/category/survival?cc=us&l=english">
                        </img><div className="centered-text">Survival</div>

                </div>
                <div className="img-container">
                    <img className="browse-picture"
                    src="https://store.steampowered.com/categories/homepageimage/freetoplay?cc=us&l=english">
                        </img><div className="centered-text">Free to Play</div>

                </div>
                <div className="img-container">
                    <img className="browse-picture"
                    src="https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=english">
                        </img><div className="centered-text">Racing</div>

                </div>
                <button className="arrow-font-awesome">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            <div className="big-useless-block"></div>
            <div className="wrapper-wrapper">
                <div className="new-trending-wrapper">
                    <div className="new-trending-navbar">
                        <div className="trending-navbar-item">
                            New & Trending
                        </div>
                        <div className="trending-navbar-item">Top Sellers</div>
                        <div className="trending-navbar-item">
                            Popular Upcoming
                        </div>
                        <div className="trending-navbar-item">Specials</div>
                    </div>
                    <div>
                        {Array.from(games.entries()).map((entry) => { 
                            const [key, game] = entry; 
                            return (
                            <div>
                                <div className="game-trending-wrapper">
                                    <img
                                        className="game-image-trending"
                                        src={game.img}
                                    ></img>

                                    <div className="game-name-trending">
                                        {game.name}
                                        <div className="game-name-trending">
                                            {game.tags}
                                        </div>
                                    </div>

                                    <div className="game-hours-trending">
                                        {game.discount ?<div> <s>
                                            <p className="old-trending-price">
                                                {game.price}
                                            </p>
                                        </s>
                                        <p className="trending-discount">
                                            
                                            {game.discount}
                                        </p></div> : <p> {game.price}</p>}
                                        
                                        
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
            </div>
        </div>
    );
}
