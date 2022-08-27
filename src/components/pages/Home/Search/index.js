import React from 'react'

import "./styles.sass"

export default ({ setQuery }) => {
    // https://restcountries.com/v3.1/name/{name}

    const onChange = e => {
        const term = e.target.value
        setQuery(term ? `name/${term}` : "all")
    }

    return <input type="text" placeholder="Search for a country..." onChange={onChange} />

}