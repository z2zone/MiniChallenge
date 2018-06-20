import React, { Component } from 'react';
import Form from './Form';
import Lists from './Lists';

class App extends Component {
  render() {
      return (
          <div className="app">
        	    <Form/>
           		<hr/>
        	    <Lists/>
          </div>
      );
  }
}

export default App;