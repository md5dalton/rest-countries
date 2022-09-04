import React, { useState } from 'react'
import Button from '../../../UI/Button'
import ContextMenu from '../../../UI/ContextMenu'
import Icon from '../../../UI/Icon'
import List from '../../../UI/List'
import Select from '../../../UI/Select'

import "./styles.sass"

const options = [{ value: "", name: "all", }, ...[
    "all",
    "africa",
    "america",
    "asia",
    "europe",
    "oceania"
].map(item => ({value: item, name: item}))]

export default ({ setQuery }) => {

    const [ placeholder, setPlaceholder ] = useState("filter by region")
    const [ isOpen, setIsopen ] = useState(false)
    
    const onChangeHandler = region => setQuery(region ? `region/${region}` : "all")
    
    return (
        <div className="filter">
            <Button>
                <span className="placeholder">{placeholder}</span> 
                <Icon name="chevron-down" />
            </Button>
            {/* <ContextMenu>
                <div className="options">
                    <List items={options} itemHandler={(item, index) => <div key={index}>{item}</div> } />
                </div>
            </ContextMenu> */}
            {/* <Select 
                onChange={onChangeHandler} 
                options={options.map(item => ({value: item, name: item}))}
            >Filter by Region</Select>
         */}
        </div>
    )
    
}

// https://restcountries.com/v3.1/region/{region}