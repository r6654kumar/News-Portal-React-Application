import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News Portal </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar