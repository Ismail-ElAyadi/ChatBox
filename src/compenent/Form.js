import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        message:''

    }
    createMessage = ()=> {
        const {addMessage,pseudo} = this.props
        const message = {
            pseudo,
            message:this.state.message
        }
        addMessage(message)
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        this.createMessage()

    }
    handleChange=(e)=> {
        this.setState({
            message : e.target.value
        })
    }
    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea
                onChange={this.handleChange}
                required
                maxLength='140'/>
                <div className='info'>
                    140
                </div>
                <button type='submit'>
                    Send
                </button>

            </form>
        )
    }
}
