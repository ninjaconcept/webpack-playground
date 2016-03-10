require('./style/vendor/semantic-ui/dist/semantic.css');
require("./style/main.scss");

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './app/hello.jsx';

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
