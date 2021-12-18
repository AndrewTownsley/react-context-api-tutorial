import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({cart}) => {
    return (
        <div className='header'>
            <h2>Header Component</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>  
                </ul>
            </nav>
        </div>
    )
}

export default Header
