import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/landing.css'

function Landing() {
    const [eventData, setEventData] = useState({ event: '' })

    return (
        <>

        <div className='certificate-chooser'>Hello! Welcome to <img src="/ReverionTechLogo.png" /> Certificate Generator

           <Link to="/data" className="event-data">Create Certificate</Link>

        </div>

        </>
        
    )
}

export default Landing