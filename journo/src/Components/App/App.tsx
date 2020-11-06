import React from 'react';
import './App.css';

import Calculator from '../Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This calculator spits out best estimated ratio for publishing.</p>
        <p>Enter percentage that you want to convert:</p>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
