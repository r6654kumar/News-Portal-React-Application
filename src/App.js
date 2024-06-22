import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
import { BrowserRouter as Router,Routes,Route}from "react-router-dom";
const App =()=> {
  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWSPORTAL_API
    return (
      <div>
        <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<News key="general" pageSize={pageSize} country="in" category="general" apiKey={apiKey}/>} />
              <Route path="/general" element={<News key="general" pageSize={pageSize} country="in" category="general"apiKey={apiKey}/>} />
              <Route path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business" apiKey={apiKey}/>} />
              <Route path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health" apiKey={apiKey}/>} />
              <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" apiKey={apiKey} />} />
              <Route path="/science" element={<News  key="science" pageSize={pageSize} country="in" category="science" apiKey={apiKey}/>} />
              <Route path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" apiKey={apiKey} />} />
              <Route path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology" apiKey={apiKey}/>} />
            </Routes>
        </Router>
      </div>
    )
  }

export default App