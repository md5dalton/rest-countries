import React from 'react'
import Toggler from './Toggler'

import './styles.sass'

export default () => (
    <header>
        <div className="wrapper">
            <h1>Where in the world?</h1>
            <Toggler />
        </div>
    </header>
)