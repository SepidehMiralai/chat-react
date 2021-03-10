import React, { Component } from 'react';
// import './App.css'; <-- commented out for styling
import ChatsList from './components/ChatsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatsList />
      </div>
    );
  }
}

export default App;