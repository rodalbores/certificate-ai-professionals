import React, { useRef, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdOutlineVerified } from 'react-icons/md'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import '../css/certificate.css'

const Certificate = () => {
    const certRef = useRef(null)
    const location = useLocation()
    const navigate = useNavigate()
    const [certificateNumber, setCertificateNumber] = useState('')

    useEffect(() => {
        try {
            if (!location.state || !location.state.firstname) {
                navigate('/data')
            } else {
                setCertificateNumber(generateCertificateNumber())
            }
        } catch (error) {
            console.log(error)
        }
        
    }, [])

    const generateCertificateNumber = () => {
        const chars = '0123456789'
        let result = ''
        for (let i = 0; i < 5; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return `RER${result}`
    }
    
    const {
        firstname = '',
        middlename = '',
        lastname = '',
        completion = '',
        length = '',
        title = ''
    } = location.state || {}

    const downloadPDF = async () => {
        const element = certRef.current
        const canvas = await html2canvas(element, { scale: 3, useCORS: true })
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('landscape', 'pt', [canvas.width, canvas.height])
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
        pdf.save('certificate.pdf')
    }

  return (
    <>
        <div className="certificate-wrapper">
            <div className="certificate" ref={certRef}>
                <div className="certificate-content">

                {/* <img src="/ReverionTop.png" alt="Decorative Header" className="reverion-top"/> */}
                <img src="/cert12.png" alt="Decorative Header" className="certificate-bg"/>
                
                <div className="certificate-content">
                    <h1 className="certificate-h1">CERTIFICATE</h1>
                    <h2 className="certificate-h2">OF COMPLETION</h2>

                    <p className="certificate-text">  This is to certify that </p>

                    <h3 className="recipient-name">{firstname} {middlename} {lastname}</h3>

                    <p className='paragraph'>has successfully completed the <strong>"{title}",</strong> <br/>
                    with a duration of <strong>{length}</strong>,  
                    completed on <strong>{completion}</strong>.<br/>
                    We acknowledge your dedication and commitment to professional growth.
                    </p>

                    <p className='name1'></p> <p className='name2'></p>
                    
                    <div className="cert-id">
                        <MdOutlineVerified size={20} color="#555" /> Certificate No: {certificateNumber}
                    </div>
                </div>

                {/* <img src="/ReverionBottom.png" alt="Decorative Header" className="reverion-bottom"/> */}

                </div>
            </div>
        </div>

        <button onClick={downloadPDF} className="download">
        Download as PDF
        </button>
    </>
    )
}

export default Certificate
