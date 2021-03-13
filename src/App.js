import React from 'react';
import './App.css';
import NavBar from './layouts/NavBar';
import ProductContextProvider from './Global/ProductContext';
import CartContextProvider from './Global/CartContext';



function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <NavBar />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
