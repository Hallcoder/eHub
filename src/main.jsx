import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import { PersistGate } from "redux-persist/integration/react";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/productPage";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import PostProduct from "./pages/post";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route index element={<HomePage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/post" element={<PostProduct />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </PersistGate>
      </Provider>
    </Router> 
);
