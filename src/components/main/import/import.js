import React, { useState } from 'react';
import './import.css';
import Form from './components/form/form';
import Item from './components/items/item';

export default function Import(){
    const [details, setDetails] = useState([]);
    const [productList, setProductList] = useState();
    const [notification, setNotification] = useState('');
    function importProduct() {
        for(let i = 0; i < details.length; i++){
            let product_id = details[i].product_id;
            let quantity = details[i].quantity;
            fetch('http://localhost:3001/port/import', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({product_id, quantity}),
            })
            .then(response => {
                return response.text();
            })
            .then(data => {
                setNotification('Import success!')
            });
        }
    }
    
    const getImportList = (id, quan, name) => {
        let exist = false;
        for(let i = 0; i < details.length; i++){
            if(details[i].product_id === id){
                details[i].quantity += quan;
                exist = true;
            }
        }
        if(exist === false){
            details.push({product_id: id, quantity: quan, product_name: name});
        }
        updateList();
    }

    const updateList = () => {
        setProductList(details.map(product => <Item product={product} />))
    } 

    return(
        <div id='import-container'>
            <Form getImportList={getImportList}></Form>
            <p>Import list</p>
            <div id="import-list">
                <div id="import-list-header">
                    <div id="import-list-id">ID</div>
                    <div id="import-list-name">Product Name</div>
                    <div id="import-list-quantity">Quantity</div>
                </div>
                <div id="import-list-items">
                    {productList}
                </div>
            </div>
            <button className="import-button" id="import-button-import" onClick={importProduct}>Import</button>
            <div id="import-success">
                {notification}
            </div>
        </div>
    );
}