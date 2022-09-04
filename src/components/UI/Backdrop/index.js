import React from "react"

import "./styles.sass"

export default ({ isOpen, ...props }) => isOpen && (
    <div className="backdrop" {...props}></div>
)