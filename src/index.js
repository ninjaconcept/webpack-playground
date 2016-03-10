require('semantic-ui/dist/semantic.css')
require('semantic-ui/dist/semantic.js')
require("./style/main.scss");

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './app/hello.jsx';

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
