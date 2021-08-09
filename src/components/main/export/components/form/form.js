import React, { useState, useEffect } from 'react';
import './form.css';

export default function Form({getExportList}){
    const [products, setProducts] = useState(false);
    const [details, setDetails] = useState({product_id: '', quantity: '', product_name: ''});

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

    const handleQuantityChange = event => {
        setDetails({...details, quantity: event.target.value});              
    }

    const handleNameChange = event => {
        for (let i = 0; i < products.length; i++){
            if(String(products[i].id) === event.target.value){
                setDetails({...details, product_name: products[i].name, product_id: event.target.value});
                break;
            }
        }
    }

    const Add = () => {
        if(checkId() && checkQuantity()){
            if(checkAvailability()){
                getExportList(details.product_id, parseInt(details.quantity), details.product_name);  
            }
        }
    }

    const checkQuantity = () => {
        let check = details.quantity;     
        if(check.length === 0){
            document.getElementById('export-error').innerHTML = "Please enter a quantity!";
            return false;
        }
        for(let i = 0; i < check.length; i++) {
            if(check[i] < '0' || check[i] > '9') {
                document.getElementById('export-error').innerHTML = "Quantity must be a number!";
                return false;
            }
        }
        return true;
    }
    const checkAvailability = () => {
        let id = details.product_id;
        let quantity = parseInt(details.quantity);        
        for (let i = 0; i < products.length; i++){
            if(String(products[i].id) === id){
                if(products[i].available < quantity){
                    document.getElementById('export-error').innerHTML = "Not enough amount for this product!";
                    return false;
                }
            }
        }
        return true;
    }

    const checkId = () => {
        if(details.product_id === ''){
            document.getElementById('export-error').innerHTML = "Please select a product to import!";
            return false;
        }
        return true;
    }

    const handleFocus = () => {
        document.getElementById('export-error').innerHTML = '';
    }

    if(products){
        const productList = products.map(product => <option value={product.id}>{product.name}</option>);
        return(         
            <div id="export-header-form">    
                <form id="export-form">
                    <select
                        className="export-input"
                        id="export-input-id"
                        value={details.product_id}
                        onChange={handleNameChange}
                        onFocus={handleFocus}
                        >
                        <option value="">Select product</option>
                        {productList}
                    </select> 
                    <input
                        className="export-input"
                        id="export-input-quantity"
                        type="text"
                        placeholder="Export quantity"
                        value={details.quantity}
                        onChange={handleQuantityChange}
                        onFocus={handleFocus}
                        />    
                    <div id="export-error"></div>
                    </form>
                <button className="export-button" id="export-button-add" onClick={Add}>Add</button>                  
            </div>   
        );
    }
    return(
        <div className="blank_space"></div>
    );
}