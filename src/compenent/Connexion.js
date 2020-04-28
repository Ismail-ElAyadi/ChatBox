import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Connexion extends Component {

    state = {
        pseudo: '',
        go:false
    }

    handleChange=(e)=>{
        const pseudo = e.target.value
        this.setState({
            pseudo:pseudo
        })
    }
    redirect = event => {
        event.preventDefault()
         this.setState({
            goToChat:true
        })
    }
    render() {
        if(this.state.goToChat){
            return <Redirect push to={`pseudo/${this.state.pseudo}`}/>
        }
        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={this.redirect}>
                    <input
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder="Pseudo"
                    type="text"
                    required
                    />
                    <button type="submit">Connexion</button>
                </form>
            </div>
        )
    }
}
