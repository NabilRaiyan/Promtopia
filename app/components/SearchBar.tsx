"use client"

import React from 'react'
import {SearchManufacturer} from './';
import { useState } from 'react';


const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = ()=>{

    }

  return (
    <form className='searchbox' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        </div>
    </form>
  )
}

export default SearchBar
