import React from 'react'
import Toggler from './Toggler'
import { Link } from 'react-router-dom'

import './styles.sass'

export default () => (
    <header>
        <div className="wrapper">
            <h1>
                <Link to="/">Where in the world?</Link> 
            </h1>
            <Toggler />
        </div>
    </header>
)