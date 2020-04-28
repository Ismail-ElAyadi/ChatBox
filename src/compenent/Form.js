import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        message:'',
        length:this.props.length

    }
    createMessage = ()=> {
        const {addMessage,pseudo} = this.props
        const message = {
            pseudo,
            message:this.state.message
        }
        addMessage(message)
        this.setState({
            message:''
        })
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        this.createMessage()
    }
    handleChange=(e)=> {
        const message = e.target.value
        const length = this.props.length - message.length
        this.setState({
            message,
            length
        })
    }
    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea
                value ={this.state.message}
                onChange={this.handleChange}
                placeholder="Write your message"
                required
                maxLength='140'/>
                <div className='info'>
                    {this.state.length}
                </div>
                <button type='submit'>
                    Send
                </button>

            </form>
        )
    }
}
