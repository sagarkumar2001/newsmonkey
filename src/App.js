import React, { Component } from 'react'
import Navbar from './component/Navbar.js'
import News from './component/News.js'
import {BrowserRouter as Router, 
  Routes,
   Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
      <Router>
      <Routes>
          <Route exact path="/" element={<News />} />
          <Route key="entertainment" exact path="/entertainment" element={<News pageSize={6} country="in" category="entertainment" />} />
          <Route key="science" exact path="/science" element={<News pageSize={6} country="in" category="science" />} />
          <Route key="business" exact path="/business" element={<News pageSize={6} country="in" category="business" />} />
          <Route key="general" exact path="/general" element={<News pageSize={6} country="in" category="general" />} />
          <Route key="sports" exact path="/sports" element={<News pageSize={6} country="in" category="sports" />} />
          <Route key="technology" exact path="/technology" element={<News pageSize={6} country="in" category="technology" />} />
          <Route key="health" exact path="/health" element={<News pageSize={6} country="in" category="health" />} />  
    </Routes>
    </Router>
    </div>
    )
  }
}

