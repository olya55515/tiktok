import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search"

const Search = () => {

const [value, setValue] = useState("")

 const handleChange = ({target: {value: val}}) => {
    setValue(val);
 }

 const handleSubmit = (e) => {
e.preventDefault()
 }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <div className='search-input.flex'>
                <SearchIcon />
                <input
                    type="text"
                    name='search'
                    value={value}
                    onChange={handleChange}
                    placeholder='Search'
                />
            </div>
            <button type='submit'>
                Search
            </button>
        </form>
    )
}

export default Search