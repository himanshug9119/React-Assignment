import React from 'react';
import Product from './Product';

export default function ProductList({products}) {
    console.log(products);
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {
                    products.map((product, id) => {
                        return <Product key={id} product={product}/>
                    })
                }
            </ul>
        </div>
    );
}