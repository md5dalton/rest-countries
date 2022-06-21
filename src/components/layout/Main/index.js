import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Country from '../../pages/Country'
import Home from '../../pages/Home'

import './styles.sass'

export default () => (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="country" element={<Country />}>
                <Route path=":name" element={<Country />} />
            </Route>
        </Routes>
    </main>
)