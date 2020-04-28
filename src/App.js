import React, { Component } from 'react'
import './App.css'
import Form from './compenent/Form'
import Message from './compenent/Message'
class App extends Component {
  render () {
    return (
      <div className='box' >
        <div>
          <div className="messages">
            <Message/>
          </div>
        </div>
        <Form/>
      </div>
    )
  }
}

export default App
