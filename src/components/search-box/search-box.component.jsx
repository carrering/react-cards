import React from 'react';
import './search-box.styles.css';

// functional component just gets some props and returns html
// if you don't need internal state or access to lifecycle methods use a functional component
export const SearchBox = ({ placeholder, handleChange}) => (
  <input 
    className='search'
    type='search' 
    placeholder={placeholder} 
    onChange={handleChange} 
  />
);