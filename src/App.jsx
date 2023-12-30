import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Products from "./components/pages/Products";
import ProductInfo from "./components/pages/ProductInfo";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/category/:category" element={<Products />} />
        <Route path="/products/:pid" element={<ProductInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
