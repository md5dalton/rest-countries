import React, { Fragment, Component, useState } from 'react'
import { Outlet } from 'react-router-dom'
import List from '../../UI/List'
import Icon from '../../UI/Icon'
import CountryCard from '../../UI/CountryCard'
import Toolbar from '../../UI/Toolbar'
import Spinner from '../../UI/Spinner'
import Search from './Search'
import Filter from './Filter'
import Error from '../../UI/Error'
import useFetch from '../../hooks/useFetch'

import "./styles.sass"

export default () => {

    const [ query, setQuery ] = useState("all")

    const { data, isLoading, error } = useFetch(query)
    
    const countries = data.slice(0, 12)

    return (
        <Fragment>
            <Toolbar>
                <div className="search">
                    <Icon name="search" />
                    <Search setQuery={setQuery} />
                </div>
                <div className="filter">
                    <Filter setQuery={setQuery} />
                    <Icon name="chevron-down" />
                </div>
            </Toolbar>
            <section className="countries-list">
                <Fragment>
                    {
                        isLoading ?
                        <Spinner /> : error ?
                        <Error>{error}</Error> : countries.length ?
                        <List items={countries} itemHandler={(item, index) => <CountryCard key={index} {...item} />} /> :
                        <div className="msg notice">No results</div>
                    }
                </Fragment>
                <Outlet />
            </section>
        </Fragment>
    )
}