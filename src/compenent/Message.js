import React, { Component } from "react";

export default class Message extends Component {
  render() {
    let { pseudo, message } = this.props;
    return (
      <div>
        <p className="user-message">
          {pseudo}: {message}
        </p>
      </div>
    );
  }
}
