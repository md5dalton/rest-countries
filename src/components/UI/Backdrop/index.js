import React from "react"

import "./styles.sass"

export default props => props.isOpen ? (
    <div className="backdrop" onClick={props.onClick}>{props.children}</div>
) : null