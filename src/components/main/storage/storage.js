import React, {useState, useEffect} from 'react';
import Item from './components/items/item';
import './storage.css';

export default function Storage(){
    const [products, setProducts] = useState(false);
    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        fetch('http://localhost:3001/getStocks')
        .then(response => {
            return response.text();
        })
        .then(data => {
            setProducts(JSON.parse(data));
        });
    }
    if (products){
        const productList = products.map(product => <Item product={product} />);
        return(
            <div id="storage-container">
                <h3 id="storage-title">Products List</h3>
                <div id="storage-header">
                    <div id="product-id">ID</div>
                    <div id="product-name">Product Name</div>
                    <div id="product-category">Category</div>
                    <div id="product-quantity">Quantity</div>
                    <div id="product-price">Price</div>
                </div>
                <div id="storage-items">
                    {productList}
                </div>
            </div>
        );
    }

    else return(
        <div className="blank_space" />
    );          
}