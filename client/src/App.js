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
import { getCardData } from "./services/ProductCardData";

function App() {
  const [hide, setHide] = useState(false);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const result = await getCardData();
      console.log(result);
      setProductsData(result);
    }

    fetchProducts();
  }, []);

  return (
    <div className="App">
      {!hide && <Header setHide={setHide} />}
      <Routes>
        <Route index element={<Home data={productsData} />}></Route>

        <Route path="/shop" element={<Shop data={productsData} />}></Route>

        <Route path="/contact" element={<Contact />} />

        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/products/:sku" element={<ProductPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<h1>Route not found</h1>} />
      </Routes>
      {!hide && <Footer />}
    </div>
  );
}

export default App;
