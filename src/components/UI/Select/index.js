import React, { useState } from 'react'
import List from '../List'

import "./styles.sass"

const Option = ({ children, ...props }) => <div {...props}>{children}</div>

export default ({ onChange, options, children }) => {

    const [ isOpen, setIsOpen ] = useState(false)

    const itemHandler = (item, index) => (
        <Option 
            key={index} 
            onClick={() => {
                onChange(item.value)
                setIsOpen(false)
            }}
        >
            {item.name}
        </Option>
    )

    return (
        <div className="select">
            <div className="placeholder">{children}</div>
            <div className="options">
                <List items={options} itemHandler={itemHandler} />
            </div>
        </div>
    )

}