import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './assets/pages/Landing'
import Data from './assets/pages/Data'
import Certificate from './assets/pages/Certificate'
import Bubbles from './assets/pages/Bubbles'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Landing />} />
                <Route path="/data" element={<Data />} />
                <Route path="/certificate" element={<Certificate />} />

            </Routes>

      </BrowserRouter>
    </StrictMode>,
)

createRoot(document.getElementById('bg')).render(
    <StrictMode>
        <Bubbles/>
    </StrictMode>,
)
