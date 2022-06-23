import React, { useState, useEffect } from 'react'

import "./styles.sass"

export default ({ getItems }) => {
    // https://restcountries.com/v3.1/name/{name}

    const [query, setQuery] = useState("")
    
    const onChange = e => setQuery(e.target.value)
    
    useEffect(() => {

        if (query) getItems(`name/${query}`)
        
    }, [query])
    

    return <input type="text" placeholder="Search for a country..." value={query} onChange={onChange} />

}