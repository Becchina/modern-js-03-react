'use strict';

import React from 'react';
import Hello from './hello';
import Conditional from './conditional';

export default class App extends React.Component {
  render(){
    return (
      <section>
        <Hello />
        <Conditional accepted="false" />
      </section>
    )
  }
}
