import React from 'react';
import './App.css';
import Effect from './hooks/Effect';
import Ref from './hooks/Ref';
import State from './hooks/State';

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <State
        initialCount={0}
      />
      <h1>useEffect</h1>
      <Effect />
      <h1>useRef</h1>
      <Ref />
    </div>
  );
}

export default App;
