import React, { Component } from 'react'
import './App.css'
import Form from './compenent/Form'
import Message from './compenent/Message'
class App extends Component {
  state = {
    messages:{},
    pseudo:this.props.match.params.pseudo
  }
  addMessage = msg => {
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`] = msg
    this.setState({
      messages
    })
  }
  render () {
    return (
      <div className='box' >
        <div>
          <div className="messages">
            <Message/>
          </div>
        </div>
        <Form
        length={140}
        addMessage={this.addMessage}
        pseudo={this.state.pseudo}
        />
      </div>
    )
  }
}

export default App
