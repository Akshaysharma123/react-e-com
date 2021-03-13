import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import DeleteIcon from '@material-ui/icons/Delete';

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  return (
    <>
      <h2 className="text-center mt-5 mb-5">CART PAGE</h2>
      <div className="container">
    <div className="row text-center">
      <div className="col-md-8">
        <div className="cart">
          <div className="cart-image">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Images</th>
                  <th scope="col">Name</th>
                  <th scope="col">Cost</th>
                  <th>Express</th>
                  <th>Total Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              {shoppingCart.length > 0
                ? shoppingCart?.map((cart) => (
                  <tbody>
                    <tr key={cart.id}>
                      <td><img src={cart.image} alt="notfound" className="image-cart" /></td>
                      <td>{cart.name}</td>
                      <td className="cost-price">${cart.price}.00</td>
                      <td className="total">
                        <AddIcon className="icon-cart" onClick={() => dispatch({type: 'INC', id: cart.id, cart})} />
                         {cart.qty} 
                         <MinimizeIcon className="icon-cart-dec" onClick={() => dispatch({type: 'DEC', id: cart.id, cart})} />
                      </td>
                     <td>${cart.price * cart.qty}.00</td>
                      <td><DeleteIcon className="delete" onClick={() => dispatch({type: 'DELETE', id: cart.id, cart})} /></td>
                    </tr>
                  </tbody>
                ))
              : "sorry"}
    </table>
  </div>
  
</div>        
      </div>
      <div className="col-md-4">
        {
          shoppingCart.length > 0 ? 
           <div className="cart-counting">
             <h3 className="cart-heading">Cart Details</h3><br/>
             <h4>Quntity : <span className="qty-color">{qty}</span></h4><br/>
             <h4>Total Amount : <span className="qty-color">{totalPrice}</span></h4>
           </div>
          : "Add To Some Items"
        }
      </div>

    </div>
      </div>
    </>
  );
};

export default Cart;
