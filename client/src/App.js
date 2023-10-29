import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import CheckOut from "./components/CheckOut";
import ShoppingCart from "./components/ShoppingCart";
import LogIn from "./components/LogIn";
import ProductPage from "./components/ProductPage";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SignUpform from "./components/SignUpform";

function App() {
  const [hide, setHide] = useState(false);

  const cartState = useSelector((store) => store.cart);
  const favSate = useSelector((store) => store.favourites);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
    localStorage.setItem("favList", JSON.stringify(favSate));
  }, [cartState, favSate]);

  // useEffect(() => {
  //   localStorage.removeItem("cart");
  // }, []);

  return (
    <div className="App">
      {!hide && <Header setHide={setHide} />}
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/shop" element={<Shop />}></Route>

        <Route path="/contact" element={<Contact />} />

        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="shop/products/:sku" element={<ProductPage />} />

        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SignUpform />} />
        <Route path="*" element={<h1>Route not found</h1>} />
      </Routes>
      {!hide && <Footer />}
    </div>
  );
}

export default App;
