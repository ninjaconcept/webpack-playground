import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
          <button className="ui primary button">
            Save
          </button>
          <button className="ui button">
            Discard
          </button>
      </div>
    )
  }
}

ReactDOM.render(<Hello/>, document.body);
