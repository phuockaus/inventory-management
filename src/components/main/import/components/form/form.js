import React, { useState, useEffect } from 'react';
import './form.css';

export default function Form({getImportList}){
    const [products, setProducts] = useState(false);
    const [details, setDetails] = useState({product_id: '', quantity: ''});
    // const [error, setError] = useState('');

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
        setDetails({...details, product_id: event.target.value});      
    }
    const Add = () => {
        if(checkId() && checkQuantity()) getImportList(details.product_id, parseInt(details.quantity)); ;     
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
            <div>    
            <form>
                <select
                    value={details.product_id}
                    onChange={handleNameChange}
                    onFocus={handleFocus}
                    >
                    <option value="">Select product</option>
                    {productList}
                </select> 
                <input
                    type="text"
                    placeholder="Import quantity"
                    value={details.quantity}
                    onChange={handleQuantityChange}
                    onFocus={handleFocus}
                    />    
                </form>
                <div id="import-error"></div>
                <button onClick={Add}>Add</button>                  
            </div>   
        );
    }
    return(
        <div className="blank_space"></div>
    );
}