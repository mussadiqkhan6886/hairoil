import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div>
      <input type='text' placeholder='search product name' className='outline-none border-gray-200 border' />
      <FiSearch />
    </div>
  )
}

export default Search
