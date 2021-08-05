import React , { useEffect, useState} from 'react';
import './import.css';
import Form from './components/form/form';
import Item from './components/items/item';

export default function Import(){
    const [products, setProducts] = useState(false);
    const [details, setDetails] = useState([]);
    const [productList, setProductList] = useState(details.map(product => <Item product={product} />));
    const [notification, setNotification] = useState('');
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

    function importProduct() {
        for(let i = 0; i < details.length; i++){
            let product_id = details[i].product_id;
            let quantity = details[i].quantity;
            fetch('http://localhost:3001/port', {
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
                setNotification('Success!')
              });
        }
    }
    
    const getImportList = (id, quan) => {
        let exist = false;
        for(let i = 0; i < details.length; i++){
            if(details[i].product_id === id){
                details[i].quantity += quan;
                exist = true;
            }
        }
        if(exist === false){
            details.push({product_id: id, quantity: quan});
        }
        updateList();
        console.log(details);
    }

    const updateList = () => {
        setProductList(details.map(product => <Item product={product} />))
    } 

    return(
        <div>
            <h1>Import</h1>
            <Form getImportList={getImportList}></Form>
            <button onClick={importProduct}>Import</button>
            {productList}
            <div>
                {notification}
            </div>
        </div>
    );
}