import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/home'
import PostProduct from './pages/post'
import ProductPage from './pages/productPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/product/:id' element={<ProductPage />}>
        </Route>
        <Route path='/postProduct' element={<PostProduct />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
