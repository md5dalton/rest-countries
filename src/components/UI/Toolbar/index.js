import React from 'react'

import "./styles.sass"

export default props => (
    <section className="toolbar" style={{padding: "2em 0", marginTop: "1em"}}>{props.children}</section>
)