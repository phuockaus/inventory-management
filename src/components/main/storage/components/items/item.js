import React from 'react';
import './item.css';

export default function Item({product}){
    return(        
        <div className="item-container">
            <div id="item-id">
                {product.id}
            </div>
            <div id="item-name">
                {product.name}
            </div>
            <div id="item-category">
                {product.category}
            </div>
            <div id="item-quantity">
                {product.available}
            </div>
            <div id="item-price">
                {product.price}
            </div>
        </div>        
    );
}