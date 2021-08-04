import React from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="red">
          BUTTON
        </Button>
        <Button color="red">BUTTON</Button>
        <Button size="small" color="red">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="grape">
          BUTTON
        </Button>
        <Button color="grape">BUTTON</Button>
        <Button size="small" color="grape">
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;