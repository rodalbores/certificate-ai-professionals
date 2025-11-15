import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/data.css'

function Data() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({ firstname: '', middlename: '', lastname: '', completion: '', length: '', title: '' })
    const [errors, setErrors] = useState({ firstname: '', middlename: '', lastname: '', completion: '', length: '', title: '' })

    const handleUpdateInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value })
        setErrors({ ...errors, [field]: '' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newErrors = {}
        let isValid = true
    
        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) {
                newErrors[key] = 'This field is should not be empty.'
                isValid = false
            }
        })
    
        if (!isValid) {
            setErrors(newErrors)
            return
        }
    
        navigate('/certificate', { state: { ...formData } })
    }

    return (
        <div className="data-form">
            <h2>Certificate Information</h2>
            
            <form noValidate onSubmit={handleSubmit} encType='multipart/form-data'>

                <div className="inputBox">
                <i className='bx bxs-user-rectangle'></i>
                <input type="text" placeholder="Enter your Firstname" value={formData.firstname ?? ''} onChange={(e) => handleUpdateInputChange('firstname', e.target.value)} autoComplete="new-firstname" />
                {errors.firstname && (<span className="error-message"><p className='red'>{errors.firstname}</p></span>)}
                </div>

                <div className="inputBox">
                <i className='bx bxs-user-badge'></i>
                <input type="text" placeholder="Enter your Middlename" value={formData.middlename ?? ''} onChange={(e) => handleUpdateInputChange('middlename', e.target.value)} autoComplete="new-middlename" />
                {errors.middlename && (<span className="error-message"><p className='red'>{errors.middlename}</p></span>)}
                </div>

                <div className="inputBox">
                <i className='bx bxs-user-account'></i>
                <input type="text" placeholder="Enter your Lastname" value={formData.lastname ?? ''} onChange={(e) => handleUpdateInputChange('lastname', e.target.value)} autoComplete="new-lastname" />
                {errors.lastname && (<span className="error-message"><p className='red'>{errors.lastname}</p></span>)}
                </div>

                <div className="inputBox">
                <i className='bx bxs-calendar'></i>
                <input type="text" placeholder="Date of Completion" value={formData.completion ?? ''} onChange={(e) => handleUpdateInputChange('completion', e.target.value)} autoComplete="new-completion" />
                {errors.completion && (<span className="error-message"><p className='red'>{errors.completion}</p></span>)}
                </div>

                <div className="inputBox">
                <i className='bx bx-line-chart'></i>
                <input type="text" placeholder="Course Length" value={formData.length ?? ''} onChange={(e) => handleUpdateInputChange('length', e.target.value)} autoComplete="new-length" />
                {errors.length && (<span className="error-message"><p className='red'>{errors.length}</p></span>)}
                </div>

                <div className="inputBox">  
                <i className='bx bx-edit-alt'></i>
                <input type="text" placeholder="Course Title" value={formData.title ?? ''} onChange={(e) => handleUpdateInputChange('title', e.target.value)} autoComplete="new-title" />
                {errors.title && (<span className="error-message"><p className='red'>{errors.title}</p></span>)}
                </div>

                <div className="generate-button">

                <button type="submit" className="generate">Generate</button>

                </div>

            </form>

        </div>
    )
}

export default Data