import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
export class App extends Component {
  pageSize=6;
  apiKey=process.env.REACT_APP_NEWSPORTAL_API
  render() {
    return (
      <div>
        <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" apiKey={this.apiKey}/>} />
              <Route path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general"apiKey={this.apiKey}/>} />
              <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" apiKey={this.apiKey}/>} />
              <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" apiKey={this.apiKey}/>} />
              <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" apiKey={this.apiKey} />} />
              <Route path="/science" element={<News  key="science" pageSize={this.pageSize} country="in" category="science" apiKey={this.apiKey}/>} />
              <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" apiKey={this.apiKey} />} />
              <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" apiKey={this.apiKey}/>} />
            </Routes>
        </Router>
      </div>
    )
  }
}

export default App