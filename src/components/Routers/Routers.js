import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home.js/Home';
import Modal from '../modal/Modal';
import Products from '../Products/Products';
import LoginForm from '../Signup/LoginForm';
import '../../App.css';




const Routers = (props) => {
  console.log(props.show1,"router")
  return (
    <div className='app-css'>
      <Routes>
        <Route path='/' element={<Home handleAddProduct={props.handleAddProduct} />} />
        <Route path='/Products' element={<Products handleAddProduct={props.handleAddProduct} />} />
        <Route path='/modal' element={<Modal cartItem={props.cartItem} handleAddProduct={props.handleAddProduct} show1={props.show1}
        
              onClose1={props.onClose1} handleRemoveProduct={props.handleRemoveProduct} handleCartClear={props.handleCartClear} />} />
        <Route path='/signup' element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default Routers