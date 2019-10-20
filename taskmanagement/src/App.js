import React from 'react';
import logo from './logo.svg';
import TaskApp from './components/TaskApp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskApp />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
