import React from 'react'
import Select from '../../../UI/Select'

import "./styles.sass"

const options = [
    "africa",
    "america",
    "asia",
    "europe",
    "oceania"
]

export default ({ setQuery }) => {
    // https://restcountries.com/v3.1/region/{region}

    const onChangeHandler = region => setQuery(region ? `region/${region}` : "all")

    return (
        <Select onChange={onChangeHandler} options={options.map(item => ({value: item, name: item}))}>Filter by Region</Select>
        // <select value={query} onChange={onChange}>
        //     <option value="" disabled hidden>Filter by Region</option>
        //     <option value="africa">Africa</option>
        //     <option value="america">America</option>
        //     <option value="asia">Asia</option>
        //     <option value="europe">Europe</option>
        //     <option value="oceania">Oceania</option>
        // </select>
    )

}