import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../UI/Spinner'
import CountryInfo from './CountryInfo'

import "./styles.sass"

const country = {
    name: {
        common: "Lesotho",
        official: "Kingdom of Lesotho",
        nativeName: {
            eng: {
                common: "Lesotho",
                official: "Kingdom of Lesotho",
            },
            sot: {
                common: "Lesotho",
                official: "Kingdom of Lesotho",
            }
        }
    },
    flags: {
        svg: "/images/ls.svg"
    },
    population: 2142252,
    region: "Africa",
    subregion: "Southern Africa",
    capital: [
        "Maseru"
    ],
    tld: [
        ".ls"
    ],
    currencies: [
        {
            name: "Lesotho loti"
        },
        {
            name: "South African rand"
        }
    ],
    languages: {
        eng: "English",
        sot: "Sotho"
    },
    borders: [
        "ZAF",
        "BTS"
    ]
}

export default () => {

    const [ count, setCount ] = useState(0)

    const [ country, setCountry ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const param = useParams()

    useEffect(() => {

        getItem(param.name)

    }, [count])

    const getItem = name => {
    
        if (isLoading) return

        setIsLoading(true)

        fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
            .finally(() => setIsLoading(false))
            .catch(err => setError("Network error"))

    }

    return (
        isLoading ?
        <Spinner /> : country ?
        <CountryInfo {...country} /> : null
    )
}