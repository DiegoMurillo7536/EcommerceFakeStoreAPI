import {BrowserRouter, Routes, Route } from 'react-router-dom' 
import { ShoppingCartProvider } from '../../context/Context'
// components
import Navbar from '../../components/navbar/Navbar'
// pages
import Home from '../home/Home'
import MyAccount from '../myaccount/MyAccount'
import MyOrder from '../myorder/MyOrder'
import MyOrders from '../myorders/MyOrders'
import NotFound from '../notfound/NotFound'
import SignIn from '../signin/SignIn'
import CheckoutSideMenu from '../../components/checkoutsidemenu/CheckoutSideMenu'
import './App.css'
// routes
const  App = () => {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:category' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/myaccount' element={<MyAccount/>}/>
      <Route path='/my-order' element={<MyOrder/>}/>
      <Route path='/my-order/last' element={<MyOrder/>}/>
      <Route path='/my-orders' element={<MyOrders/>}/>
      <Route path='/my-order/:id' element={<MyOrder/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <CheckoutSideMenu/>
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
