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
import ProfilePage from "./components/ProfilePage";
import MyDetails from "./components/MyDetails";
import MyOrders from "./components/MyOrders";
import { ToastContainer } from "react-toastify";

function App() {
  const { showHeaderFooter } = useSelector((store) => store.header);

  const cartState = useSelector((store) => store.cart);
  const favSate = useSelector((store) => store.favourites);
  const logInState = useSelector((store) => store.login);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
    localStorage.setItem("favList", JSON.stringify(favSate));
    localStorage.setItem(
      "show_header_footer",
      JSON.stringify(showHeaderFooter)
    );
    localStorage.setItem("login-state", JSON.stringify(logInState));
  }, [cartState, favSate, showHeaderFooter, logInState]);

  // useEffect(() => {
  //   localStorage.removeItem("cart");
  // }, []);

  const { showEditDetails, showAddressEditor } = useSelector(
    (store) => store.profile
  );

  return (
    <div
      className={`App ${showEditDetails || showAddressEditor ? "active" : ""}`}
    >
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
        <Route path="/account" element={<ProfilePage />}>
          <Route index element={<MyDetails />} />
          <Route path="details" element={<MyDetails />} />
          <Route path="orders" element={<MyOrders />} />
        </Route>
        <Route path="*" element={<h1>Route not found</h1>} />
      </Routes>
      {showHeaderFooter && <Footer />}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
