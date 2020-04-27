import React, { Component } from 'react'

export default class Connexion extends Component {

    state = {
        pseudo: ''
    }

    handleChange=(e)=>{
        const pseudo = e.target.value
        this.setState({
            pseudo:pseudo
        })
    }
    render() {
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder="Pseudo"
                    type="text"
                    required
                    />
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        )
    }
}
