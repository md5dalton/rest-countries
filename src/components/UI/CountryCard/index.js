import React from "react"
import { Link } from "react-router-dom"

import "./styles.sass"

export default ({ flags, name, population, region, capital }) => (
    <div className="item country-card">
        <Link to={`/country/${name.common}`}>
            <div className="flag">
                <img src={flags.svg} alt={`flag of ${name.official}`} />
            </div>
            <div className="details">
                <div className="name">{name.common}</div>
                <div>
                    <span>Population: </span>    
                    <span className="value">{population.toLocaleString()}</span>    
                </div>
                <div>
                    <span>Region: </span>    
                    <span className="value">{region}</span>    
                </div>
                <div>
                    <span>Capital: </span>    
                    <span className="value">{capital?.[0]}</span>    
                </div>
            </div>
        </Link>
    </div>
)