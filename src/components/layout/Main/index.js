import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Country from '../../pages/Country'
import Home from '../../pages/Home'

export default () => (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="country">
                <Route path=":code" element={<Country />} />
            </Route>
        </Routes>
    </main>
)