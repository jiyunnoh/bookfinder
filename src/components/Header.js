import React, { useContext } from 'react';
import BookContext from '../store/book-context';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const Header = () => {
    const bookCtx = useContext(BookContext)
    return (
        <div className='header'>
            <h1 className='header-h1'>Book Finder</h1>
            <div className='header-search'>
                <input className='header-search__input' type='text' onChange={bookCtx.onChange} value={bookCtx.input} />
                <button className='header-search__btn__clear' onClick={bookCtx.onClear}><HiX /></button>
                <button className='header-search__btn__main' onClick={bookCtx.onSearch}><FaSearch /></button>
            </div>
            <div className='header-warning'>{bookCtx.warning}</div>
        </div>
    )
}

export default Header