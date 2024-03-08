import React, { useEffect, useState } from 'react'
import SearchIcon from "@mui/icons-material/Search"
import { useLocation, useMatch, useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isMatch = useMatch("search")

    const [value, setValue] = useState("")

    const handleChange = ({ target: { value: val } }) => {
        setValue(val);
    }

    useEffect(() => {
        if (isMatch) return;

        setValue("")
    }, [location, isMatch])

    const handleSubmit = (e) => {
        e.preventDefault()

        const val = value.trim()

        if (!val) return;

        navigate(`/search?q=${val}`)
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <div className='search-input flex'>
                <SearchIcon className="search-icon" />
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

export default Search;