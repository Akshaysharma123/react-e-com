import React, {useContext} from 'react';
import {ProductContext} from '../Global/ProductContext';
import {CartContext} from '../Global/CartContext';
import Banner from '../components/Banner';

const Product = () => {

  const {products} = useContext(ProductContext);
  const {dispatch} = useContext(CartContext);

  return(
    <div className="container">
          <Banner />
        <div className="products">
      {
            products.map((product) => (
              <div className="product" key={product.id}>
                  <div className="product-image">
                    <img src={product.image} alt="not Found" className="img-new" />
                       <h3>Name: {product.name}</h3> 
                        <p>Price: ${product.price}.00</p>
                  <div className="add-to-cart" onClick={() => dispatch({type: 'Add_TO_CART', id: product.id, product})}>
                      Add to cart
                  </div>
                  {product.status === 'hot' ? <div className="hot">Hot</div>: ''}
                  {product.status === 'new' ? <div className="new">New</div>: ''}
                  <br />
                  <br />
                  </div>
              </div>
            ))
          }
          </div>
          </div>
    )
}

export default Product;