import React, { Fragment, Component } from 'react'
import { Outlet } from 'react-router-dom'
import List from '../../UI/List'
import Icon from '../../UI/Icon'
import CountryCard from '../../UI/CountryCard'
import Toolbar from '../../UI/Toolbar'
import Spinner from '../../UI/Spinner'

import "./styles.sass"

const countries = [
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho"
        },
        flags: {
            svg: "images/ls.svg"
        },
        population: 2142252,
        region: "Africa",
        capital: [
            "Maseru"
        ]
    }
]

export default class Home extends Component
{

    state = {
        countries: [],
        isLoading: false,
        error: null
    }

    componentDidMount () {

        this.getItems()

    }

    getItems = () => {

        if (this.state.isLoading) return

        this.setState({isLoading: true})

        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => this.setState({countries: data.slice(0, 12)}))
            .finally(() => this.setState({isLoading: false}))
            .catch(err => this.setState({error: "Network error"}))

    }

    render () {
        return (
            <Fragment>
                <Toolbar>
                    <div className="search">
                        <Icon name="search" />
                        <input type="text" placeholder="Search for a country..." />
                    </div>
                    <div className="filter">
                        <select>
                            <option>Filter by Region</option>
                            <option>Africa</option>
                            <option>America</option>
                            <option>Asia</option>
                            <option>Europe</option>
                            <option>Oceania</option>
                        </select>
                        <Icon name="chevron-down" />
                    </div>
                </Toolbar>
                <section className="countries-list">
                    <Fragment>{
                        this.state.isLoading ?
                        <Spinner isLoading={this.state.isLoading} /> : this.state.error ?
                        <div>{this.state.error}</div> : this.state.countries.length ?
                        <List items={this.state.countries} itemHandler={(item, index) => <CountryCard key={index} {...item} />} /> :
                        <div>No results</div>
                    }</Fragment>
                    <Outlet />
                </section>
            </Fragment>
        )
    }
}