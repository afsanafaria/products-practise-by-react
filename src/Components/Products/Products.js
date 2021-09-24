import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./productdb.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        /* const newCart = [...cart, product]
        setCart(newCart); */
    }

    return (
        <>
            <div className="container">


                <div className="products-container">
                    {
                        products.map(product => <Product key={product.productId} product={product}
                            addToCart={addToCart} />)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={products} />
                </div>
            </div>
        </>
    );
};

export default Products;