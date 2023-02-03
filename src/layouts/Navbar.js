import { Link, useNavigate } from 'react-router-dom';
import categories from '../data/categories';
import './Navbar.css';
import { AuthContext } from './../contexts/AuthContextProvider';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faShoppingCart,
    faUserCircle,
    faDownload,
    faUser,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faSteam } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    const navigate = useNavigate();

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleAuth = () => {
        if (isAuthenticated) {
            setIsAuthenticated(false);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="navbar">
            <div className="logo-categories-wrapper">
                <Link className="logo" to="/">
                    <FontAwesomeIcon icon={faSteam} />
                    STEAM
                </Link>

                <div className="categories">
                    <ul className="categories-list">
                        {categories.map((category, index) => {
                            return (
                                <li key={index} className="category">
                                    <Link
                                        className="link"
                                        to={`/category/${category.id}`}
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="profile">
                {isAuthenticated && (
                    <div className="wishlist-cart">
                        <Link className="linkWishCart" to="/wishlist">
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                        <Link className="linkWishCart" to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                        <Link className="linkWishCart" to="/profile">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        <Link className="linkWishCart" to="/">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                    </div>
                )}
                <a href="https://store.steampowered.com/about/" target="_blank">
                    <button>
                        <FontAwesomeIcon icon={faDownload} />
                        Install Steam
                    </button>
                </a>
                <button className="login" onClick={() => handleAuth()}>
                    {!isAuthenticated ? 'Login' : 'Logout'}
                </button>
            </div>
        </div>
    );
}
