import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Error from '../../UI/Error'
import Spinner from '../../UI/Spinner'
import CountryInfo from './CountryInfo'

import "./styles.sass"

export default () => {

    const { code } = useParams()
    const { data, isLoading, error } = useFetch(`alpha/${code}`)

    return (
        isLoading ?
        <Spinner /> : error ?
        <Error>{error}</Error> :
        <CountryInfo {...data[0]} />
    )
}