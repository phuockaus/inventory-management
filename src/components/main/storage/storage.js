import React, {useState, useEffect} from 'react';
import Item from './components/items/item';

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
            <div>
                {productList}
            </div>
        );
    }

    else return(
        <div>
            <h1>No data available</h1>
        </div>
    );
    
          
}