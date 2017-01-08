'use strict';

import React from 'react';
// Importing component from differnt file/module
import Hello from './hello';

export default class App extends React.Component {
  render(){
    return (
      <section>
        <Hello />
      </section>
    )
  }
}
