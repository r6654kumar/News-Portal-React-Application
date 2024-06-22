import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News Portal</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar