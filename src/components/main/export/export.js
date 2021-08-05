import React from 'react';

export default function Export(){
    function exportProduct() {
        let product_id = 1;
        let quantity = -10;
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
            alert(data);
          });
      }
    return(
        <div>
            <h1>Export</h1>
            <button onClick={exportProduct}>Export</button>
        </div>
    );
}