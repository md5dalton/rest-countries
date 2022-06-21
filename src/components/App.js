import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import Main from './layout/Main'
import Header from './layout/Header'

import '../styles/styles.sass'

class App extends Component
{
  
  render() {
    return (
      <HashRouter>
        <Header />
        <Main />
      </HashRouter>
    )
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)