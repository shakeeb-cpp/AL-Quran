import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container-fluid pt-2 d-flex'>
            <a className="navbar-brand mx-auto" href="/">
                <img src="https://cdn-icons-png.flaticon.com/512/3165/3165243.png" width={120} height={120} alt="Logo" className="d-flex align-text-top" />
            </a>
        </div>
    )
}

export default Navbar
