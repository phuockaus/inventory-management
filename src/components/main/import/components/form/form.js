import React, { useState, useEffect } from 'react';
import './form.css';

export default function Form({getImportList}){
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
        if(checkId() && checkQuantity()) getImportList(details.product_id, parseInt(details.quantity), details.product_name);  
    }
    const checkQuantity = () => {
        let check = details.quantity;     
        if(check.length === 0){
            document.getElementById('import-error').innerHTML = "Please enter a quantity!";
            return false;
        }
        for(let i = 0; i < check.length; i++) {
            if(check[i] < '0' || check[i] > '9') {
                document.getElementById('import-error').innerHTML = "Quantity must be a number!";
                return false;
            }
        }
        return true;
    }
    const checkId = () => {
        if(details.product_id === ''){
            document.getElementById('import-error').innerHTML = "Please select a product to import!";
            return false;
        }
        return true;
    }
    const handleFocus = () => {
        document.getElementById('import-error').innerHTML = '';
    }
    if(products){
        const productList = products.map(product => <option value={product.id}>{product.name}</option>);
        return(         
            <div id="import-header-form">    
                <form id="import-form">
                    <select
                        className="import-input"
                        id="import-input-id"
                        value={details.product_id}
                        onChange={handleNameChange}
                        onFocus={handleFocus}
                        >
                        <option value="">Select product</option>
                        {productList}
                    </select> 
                    <input
                        className="import-input"
                        id="import-input-quantity"
                        type="text"
                        placeholder="Import quantity"
                        value={details.quantity}
                        onChange={handleQuantityChange}
                        onFocus={handleFocus}
                        />    
                    <div id="import-error"></div>
                    </form>
                <button className="import-button" id="import-button-add" onClick={Add}>Add</button>                  
            </div>   
        );
    }
    return(
        <div className="blank_space"></div>
    );
}