import React from 'react';
import './home.css';
import warehouse from './static/icons/warehouse.png'

export default function Home(){
    return(        
        <div id="home-container">
            <div id="home-item-about">
                <h1>Welcome to Phuoc Phu's Inventory Management</h1>
                <p className="Description">
                    See informations about this website 
                </p>
                <a href='./home/about'>Go to About</a>
            </div>
            <div className="home-item-container">
                <div className="home-item" id="home-item-storage">
                    <img src={warehouse} alt="warehouse" className="icons"/>
                    <p className="Description">
                        List of products in the storage
                    </p>
                    <a href='./home/storage'>View storage</a>
                </div>
                <div className="home-item" id="home-item-import">
                    <img src="https://img.icons8.com/material-rounded/48/000000/download--v1.png"/>
                    <p className="Description">
                        Import some products
                    </p>
                    <a href='./home/import'>Import products</a>
                </div>
                <div className="home-item" id="home-item-export">
                    <img src="https://img.icons8.com/material-outlined/48/000000/export.png"/>
                    <p className="Description">
                        Export some products
                    </p>
                    <a href='./home/storage'>Export products</a>
                </div>
            </div>
            <div class="footer"></div>
        </div>
    );
}