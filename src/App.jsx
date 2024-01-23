import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Products from "./components/pages/Products";
import ProductInfo from "./components/pages/ProductInfo";
import { CartProvider } from "./context/cartContext";
import Cart from "./components/pages/Cart";
import { WishlistProvider } from "./context/wishListContext";
import WishList from "./components/pages/WishList";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products/category/:category" element={<Products />} />
            <Route path="/products/:pid" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
