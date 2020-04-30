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
    let {messages} = this.state
    const allMessage = Object.keys(messages).map(e => (
      <Message
      key={e}
      pseudo={messages[e].pseudo}
      message={messages[e].message}
      />

    ))
    return (
      <div className='box' >
        <div>
          <div className="messages">
            <div className="message">{allMessage}</div>
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
