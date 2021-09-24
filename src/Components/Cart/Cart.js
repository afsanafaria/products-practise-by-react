import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props);
    const { cart } = props;

    let total = 0;
    for (const product of cart) {

        // totalQuantity = totalQuantity + product.quantity;
        total = total + parseInt(product.price);
        console.log(total);
    }


    return (
        <div className="cart">
            <h3>Cart</h3>
            <p>Number of Order:</p>
            <p>Total Price: {parseInt(total.toFixed(2))}</p>
        </div>
    );
};

export default Cart;

/* const reducer = (previous, current) => previous + parseFloat(current.productPrice);
const totalPrice = cart.reduce(reducer, 0) */