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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route index element={<HomePage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
