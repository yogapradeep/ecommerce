import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store";
import ProductsGrid from "./components/ProductsGrid";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <div className=" bg-light d-flex align-items-center justify-content-center px-4">
            <h1 className="my-5 text-center flex-grow-1">Products</h1>
            <div className="flex-shrink-1">
              <Cart />
            </div>
          </div>
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<ProductsGrid />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
