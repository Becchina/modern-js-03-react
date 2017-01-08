'use strict';

import React from 'react';

export default class Conditional extends React.Component {
  // Passing props from parent, props are READ ONLY
  constructor(props){
    super(props);
    // Init state with props
    this.state = {
      accepted: this.props.accepted === 'true'
    }
    console.log(this.state, this.props);
  }

  select(evt){
    const input = this.refs.userInput.checked;
    this.setState({
      accepted: input
    });
  }

  render(){
    // Template with simple condition
    return (
      <section>
        <hr />
        <h4>Do you accept our policy?</h4>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox"
              className="form-check-input"
              ref="userInput"
              checked={this.state.accepted}
              onChange={ (e) => this.select(e) } />
            <span>Accept</span>
          </label>
        </div>
        { this.state.accepted ? <a href="#">Go ahead!</a> : null }
      </section>
    )
  }
}
