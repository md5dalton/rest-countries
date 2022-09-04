import React from "react"

export default ({ name }) => (
    <span className="icon-wrapper">
        <img src={`/images/icon-${name}.svg`} alt="icon" />
    </span>
)