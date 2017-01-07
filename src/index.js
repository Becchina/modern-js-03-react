'use strict';

// Import libraries ( ES6 import )
import React from 'react';
import { render } from 'react-dom';

// Javascript class
class Hello extends React.Component {
  // Functions inside classes are called "methods"
  render(){
    // JSX: HTML inside Javascript
    return (
      <div className="alert alert-info">
        Hello <strong>React</strong>
      </div>
    )
  }
}

// Render the application inside a DOM node
render(<Hello />, document.getElementById('app'));
