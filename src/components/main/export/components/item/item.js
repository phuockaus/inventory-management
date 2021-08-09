import React from 'react';
import './item.css';

export default function Item({product}){
    return(        
        <div className="export-item-container">
            <div id="export-item-id">
                {product.product_id}
            </div>
            <div id="export-item-name">
                {product.product_name}
            </div>
            <div id="export-item-quantity">
                {product.quantity}
            </div>
        </div>        
    );
}