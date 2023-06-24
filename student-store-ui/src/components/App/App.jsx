// imports necessary modules and components
import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import SearchBar from "../SearchBar/Searchbar";
import WelcomeSection from "../Welcome/Welcomesection";
import Product from "../ProductGrid/Product";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./App.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import SingleProduct from "../Singleproduct/Singleproduct";

//App component that renders all the components
export default function App() {
  // useState hook to set the state of the searchbox and activeTab
  const [searchbox, setSearchbox] = useState("");
  const [activeTab, setActiveTab] = useState("all categories");
  const [products, setProducts] = useState([]);

  // the shopping cart handler
  const [cart, setCart] = useState([]);

  const onAddToCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (existingItem) {
        // if the product is already in the cart, increment its quantity
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // if the product is not in the cart, add it with quantity 1
        const product = products.find((product) => product.id === productId);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const onRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        // if the product is in the cart and its quantity is greater than 1, decrement its quantity
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // if the product's quantity is 1, remove it from the cart
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  // console.log("cart is: " + cart);
  // useEffect hook to fetch the data from the API
  useEffect(() => {
    axios
      .get("http://localhost:3001/store")
      .then((res) => {
        setProducts(res.data.products); // Use the 'products' property
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log("products:" + products);

  return (
    <div className="app">
      <Router>
        <main>
          <Navbar />
          <Sidebar
            cart={cart}
            setCart={setCart}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
          <WelcomeSection />
          <SearchBar searchbox={searchbox} setSearchbox={setSearchbox} />
          <Home activeTab={activeTab} setActiveTab={setActiveTab} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Product
                    searchbox={searchbox}
                    setProducts={setProducts}
                    products={products}
                    category={activeTab}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                  />
                  <About />
                  <Contact />
                </>
              }
            />
            // Route to render the SingleProduct component
            <Route
              path="/product/:id"
              element={<SingleProduct products={products} />}
            />
          </Routes>
          <Footer />
        </main>
      </Router>
    </div>
  );
}
