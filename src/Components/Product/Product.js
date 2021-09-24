import React from 'react';
import './Product.css'

const Product = (props) => {
    const { productName, productImage, productPrice, productStock } = props.product;
    return (
        <div className="product">
            <h4>{productName}</h4>
            <p>Price: {productPrice}</p>
            <p>In Stock: {productStock}</p>
            <img src={productImage} alt="" />
            <br></br>
            <button onClick={() => props.addToCart(props.product)}  >Add To Cart</button>
        </div>
    );
};

export default Product;

// onClick={() => props.addToCart(props.product)}