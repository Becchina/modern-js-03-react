'use strict';

import React from 'react';

export default class Hello extends React.Component {
  constructor(){
    super();
    this.state = {
      text: 'React'
    }
  }

  typing(evt){
    const input = this.refs.userInput.value;
    this.setState({
      text: input
    })
  }

  render(){
    return (
      <section>
        <input className="form-control"
          placeholder="type here..."
          value={this.state.text}
          ref="userInput"
          onChange={ (e) => this.typing(e) } />
        <div className="alert alert-info">
          Hello <strong>{this.state.text}</strong>
        </div>
      </section>
    )
  }
}
