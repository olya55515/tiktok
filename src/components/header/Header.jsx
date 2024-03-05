import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../search/Search'

const Header = () => (
    <header className='header'>
        <Link to="/" className='logo'>
            <h1>TIK TOK</h1>
        </Link>
        <Search />
    </header>
)


export default Header;