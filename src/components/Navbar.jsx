import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
    render() {
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
}

export default Navbar