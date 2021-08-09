import React, { useState } from 'react';
import './export.css';
import Form from './components/form/form';
import Item from './components/item/item';

export default function Export(){
  const [details, setDetails] = useState([]);
  const [productList, setProductList] = useState();
  const [notification, setNotification] = useState('');
  function exportProduct() {
    for(let i = 0; i < details.length; i++){
      let product_id = details[i].product_id;
      let quantity = details[i].quantity;
      fetch('http://localhost:3001/port/export', {
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
          setNotification('Export success!')
        });
    }
  }

  const getExportList = (id, quan, name) => {
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
    <div id='export-container'>
      <Form getExportList={getExportList}></Form>
      <p>Export list</p>
      <div id="export-list">
        <div id="export-list-header">
          <div id="export-list-id">ID</div>
          <div id="export-list-name">Product Name</div>
          <div id="export-list-quantity">Quantity</div>
        </div>
        <div id="export-list-items">
          {productList}
        </div>
      </div>
      <button className="export-button" id="export-button-export" onClick={exportProduct}>Export</button>
      <div id="export-success">
        {notification}
      </div>
    </div>
  );
}