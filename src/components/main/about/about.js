import React from 'react';
import './about.css';

export default function About(){
    return(
        <div id="about-container">
            <h1 id="about-title">About</h1>
            <p> This website is created for learning purpose.</p>
            <p> Some fundamental features:</p>
            <ul className="about-list">
                <li>Login</li>
                <li>View storage</li>
                <li>Products Import</li>
                <li>Products Export</li>
            </ul>
            <p><strong>Author:</strong> Doan Tran Huu Phuoc - 1813636.</p>
            <p><strong>Technologies:</strong> ReactJS, PortgreSQL.</p>
            <p><strong>Programming Languages use:</strong> HTML, CSS, Javascript.</p>
        </div>
    );
}