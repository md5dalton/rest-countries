import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Main from './layout/Main'
import Header from './layout/Header'

import "./App.sass"

class App extends Component
{
  
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    )
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)