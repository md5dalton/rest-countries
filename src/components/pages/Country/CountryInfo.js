import React, { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import Toolbar from "../../UI/Toolbar"
import Icon from "../../UI/Icon"
import List from "../../UI/List"
import Button from "../../UI/Button"
import Img from "../../UI/Img"

export default ({ name, flags, population, region, subregion, capital, tld, currencies, languages, borders }) => {
    
    const navigate = useNavigate()

    return (
        <Fragment>
            <Toolbar>
                <Button onClick={() => navigate(-1)}>
                    <Img name="icon-arrow-left.svg" />
                    <span>Back</span>
                </Button>
            </Toolbar>
            <div className="country-info">
                <div className="flag">
                    <img src={flags.svg} alt={`flag of ${name.official}`} />
                </div>
                <div className="details">
                    <div className="name">{name.common}</div>
                    <div className="grid-wrapper">
                        <div className="grid-wrapper-group">
                            <div className="detail">
                                <span>Native Name: </span>    
                                <span className="value">{name.common}</span>    
                            </div>
                            <div className="detail">
                                <span>Population: </span>    
                                <span className="value">{population.toLocaleString()}</span>    
                            </div>
                            <div className="detail">
                                <span>Region: </span>    
                                <span className="value">{region}</span>    
                            </div>
                            <div className="detail">
                                <span>Sub Region: </span>    
                                <span className="value">{subregion}</span>    
                            </div>
                            <div className="detail">
                                <span>Capital: </span>    
                                <span className="value">{capital ? capital[0] : "none"}</span>    
                            </div>
                        </div>
                        <div className="grid-wrapper-group">
                            <div className="detail">
                                <span>top level domain: </span>    
                                <span className="value">{tld[0]}</span>    
                            </div>
                            <div className="detail">
                                <span>currencies: </span>    
                                <span className="value">
                                    {currencies ? <List items={Object.values(currencies)} itemHandler={(currency, index) => <span key={index}>{currency.name}</span>} /> : "none"}
                                </span>    
                            </div>
                            <div className="detail">
                                <span>languages: </span>    
                                <span className="value">
                                    <List items={Object.values(languages)} itemHandler={(language, index) => <span key={index}>{language}</span>} />
                                </span>    
                            </div>
                        </div>
                    </div>
                    <div className="detail country-border">
                        <span>border countries: </span>    
                        <div className="value">
                            {borders ? <List items={borders} itemHandler={(country, index) => <div key={index}>{country}</div>} /> : "none"}
                        </div>    
                    </div>
                </div>
            </div>
        </Fragment>
    )
}