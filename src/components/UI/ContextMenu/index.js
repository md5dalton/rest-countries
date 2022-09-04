import React, { Fragment } from 'react'
import Backdrop from '../Backdrop'

import "./style.sass"

export default ({ isOpen, children, clickHandler }) => isOpen && (
    <Fragment>
        <Backdrop isOpen={true} onClick={clickHandler} />
        <div className="context-menu">
            <div className="menu">
                {children}
            </div>
        </div>
    </Fragment>
)