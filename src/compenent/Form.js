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
    handleKeyUp=(e)=> {
        if(e.key === 'Enter'){
            this.createMessage()
        }
    }
    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea
                value ={this.state.message}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                placeholder="Write your message"
                required
                maxLength={this.props.length}/>
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
