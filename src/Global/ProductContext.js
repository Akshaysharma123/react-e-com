import React, {createContext, useState} from 'react';

import product1 from '../img/product1.png';
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";
import product4 from "../img/product4.png";
import product5 from "../img/product5.png";
import product6 from "../img/product6.png";
import product7 from "../img/product7.png";
import product8 from "../img/product8.png";

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [products] = useState ([
        {id: 1, name: 'Dslr', price: 300, image: product1, status: 'hot'},
        {id: 2, name: 'Head Phone', price: 500, image: product2, status: 'new'},
        {id: 3, name: 'iPhone', price: 200, image: product3, status: 'hot'},
        {id: 4, name: 'Samsumg', price: 700, image: product4, status: 'new'},
        {id: 5, name: 'Nokia', price: 1000, image: product5, status: 'hot'},
        {id: 6, name: 'Hu-Fi', price: 1200, image: product6, status: 'new'},
        {id: 7, name: 'Real Me', price: 2100, image: product7, status: 'hot'},
        {id: 8, name: 'One+', price: 1800, image: product8, status: 'new'},
    ]);

    return(
        <>
            <ProductContext.Provider value={{ products: [...products] }}>
                {props.children}
            </ProductContext.Provider>
        </>
    )

}

export default ProductContextProvider;