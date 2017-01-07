'use strict';

import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {
  // "constructor" method is called automatically at class initialization
  constructor(){
    // overriding default constructor
    super();
    // "global" properties inside class must have context
    this.state = {
      text: 'React'
    }
  }

  typing(evt){
    // All references inside this project
    console.log(this.refs);
    const input = this.refs.userInput.value;
    // Update the state object
    this.setState({
      text: input
    })
  }

  render(){
    // There must always be a top level wrapper element (no adjacents)
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

render(<Hello />, document.getElementById('app'));
