import { Route, Routes } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContextProvider';
import ProductsContextProvider from './contexts/ProductContextProvider';

import AuthLayout from './layouts/AuthLayout';
import StoreLayout from './layouts/StoreLayout';
import Category from './pages/category';
import Home from './pages/Home';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist/Wishlist';
import Profile from './pages/Profile';
import Cart from './pages/Cart/Cart';
import Store from './pages/Store';
import Community from './pages/Community';
import Support from './pages/Support';

function App() {
    return (
        <AuthContextProvider>
            <ProductsContextProvider>
            <Routes>
                <Route path="/" element={<StoreLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/category/:id" element={<Category />}></Route>
                    <Route path="/category/1" element={<Store />}></Route>
                    <Route path="/category/2" element={<Community />}></Route>
                    <Route path="/category/4" element={<Support />}></Route>
                    <Route path="/wishlist" element={<Wishlist />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Route>
                <Route path="/login" element={<AuthLayout />}>
                    <Route index element={<Login />}></Route>
                </Route>
            </Routes>
            </ProductsContextProvider>
        </AuthContextProvider>
    );
}

export default App;
