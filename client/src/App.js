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
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SignUpform from "./components/SignUpform";

function App() {
  const { showHeaderFooter } = useSelector((store) => store.header);

  const cartState = useSelector((store) => store.cart);
  const favSate = useSelector((store) => store.favourites);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
    localStorage.setItem("favList", JSON.stringify(favSate));
    localStorage.setItem(
      "show_header_footer",
      JSON.stringify(showHeaderFooter)
    );
  }, [cartState, favSate, showHeaderFooter]);

  // useEffect(() => {
  //   localStorage.removeItem("cart");
  // }, []);

  console.log(showHeaderFooter);

  return (
    <div className="App">
      {showHeaderFooter && <Header />}
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
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
