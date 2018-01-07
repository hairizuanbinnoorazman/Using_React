import React, { Component } from 'react';
import Posts from './components/posts';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar/>
        <Posts/>
      </div>
    );
  }
}

export default App;
