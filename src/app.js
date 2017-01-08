'use strict';

import React from 'react';
import Hello from './hello';
import Conditional from './conditional';
import Iterator from './iterator';

export default class App extends React.Component {
  render(){
    return (
      <section>
        <Hello />
        <Conditional accepted="false" />
        <Iterator />
      </section>
    )
  }
}
