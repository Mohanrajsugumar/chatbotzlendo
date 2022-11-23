import React, { useState } from 'react'
import Chatbot from './components/chatbot/Chatbot'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Slider from './components/Slider'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <div className="bot">
            <Route path="/" component={Chatbot} exact />
          </div>
          <Route path="/" component={Slider} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
