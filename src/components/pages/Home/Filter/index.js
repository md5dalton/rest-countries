import React, { useState, useEffect } from 'react'

import "./styles.sass"

export default ({ getItems }) => {
    // https://restcountries.com/v3.1/region/{region}

    const [query, setQuery] = useState("")
    
    const onChange = e => setQuery(e.target.value)
    
    useEffect(() => {

        if (query) getItems(`region/${query}`)
        
    }, [query])
    

    return (
        <select value={query} onChange={onChange}>
            <option>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )

}