import React from 'react';
import './item.css';

export default function Item({product}){
    return(        
        <div className="import-item-container">
            <div id="import-item-id">
                {product.product_id}
            </div>
            <div id="import-item-quantity">
                {product.quantity}
            </div>
        </div>        
    );
}