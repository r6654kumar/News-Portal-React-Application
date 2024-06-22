import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News pageSize={6} country="in" category="sports"></News>
      </div>
    )
  }
}

export default App