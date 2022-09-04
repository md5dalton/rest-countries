import React, { useState } from 'react'
import Button from '../../../UI/Button'
import ContextMenu from '../../../UI/ContextMenu'
import Icon from '../../../UI/Icon'
import List from '../../../UI/List'

import "./styles.sass"

const options = [
    "africa",
    "america",
    "asia",
    "europe",
    "oceania"
].map(item => ({value: item, name: item}))

export default ({ setQuery }) => {

    const [ placeholder, setPlaceholder ] = useState("Filter by Region")
    const [ isOpen, setIsopen ] = useState(false)
    
    return (
        <div className="filter">
            <div className="dropdown">
                <Button onClick={() => setIsopen(true)} className="context-menu-toggler">
                    <span className="placeholder">{placeholder}</span> 
                    <Icon name="chevron-down" />
                </Button>
                <ContextMenu isOpen={isOpen} clickHandler={()=>setIsopen(false)}>
                    <div className="options">
                        <List 
                            items={options} 
                            itemHandler={({ value, name }, index) => (
                                <Button 
                                    key={index} 
                                    className="option"
                                    onClick={() => {
                                        setQuery(`region/${value}`)
                                        setPlaceholder(name)
                                        setIsopen(false)
                                    }}
                                >{name}</Button>
                            ) } 
                        />
                    </div>
                </ContextMenu>
            </div>
        </div>
    )
    
}

// https://restcountries.com/v3.1/region/{region}