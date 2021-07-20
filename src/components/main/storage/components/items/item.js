import React from 'react';
import './item.css';

export default function Item({product}){
    return(        
        <div className="item-container">
            <div>
                Product: {product.id}, Name: {product.name}
            </div>
            <div>
                Category: {product.category}, In stock: {product.available}, Price: {product.price}
            </div>
        </div>        
    );
}