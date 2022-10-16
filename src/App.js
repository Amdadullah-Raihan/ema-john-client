import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
  return (

    <div className="App">
     
      <BrowserRouter>
      <Header> </Header>
        <Routes>
          <Route exact path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<OrderReview></OrderReview>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/place-order' element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
