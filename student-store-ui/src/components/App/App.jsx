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

  // useEffect hook to fetch the data from the API
  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((res) => {
        setProducts(res.data.products); // Use the 'products' property
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(products);

  return (
    <div className="app">
      <Router>
        <main>
          <Navbar />
          <Sidebar />
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
