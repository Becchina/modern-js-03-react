'use strict';

import React from 'react';
import { render } from 'react-dom';
// Importing component from differnt file/module
import Hello from './hello';

render(<Hello />, document.getElementById('app'));
