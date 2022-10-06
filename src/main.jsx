import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import HomePage from './pages/home'
import ProductPage from './pages/productPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/product' element={<ProductPage />}>
        </Route>
      </Routes>
    <App />
    </Router>
  </React.StrictMode>
)
