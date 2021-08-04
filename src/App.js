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
        <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="red" outline>
          BUTTON
        </Button>
        <Button size="small" color="grape" outline>
          BUTTON
        </Button>
      </div>
        <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="large" fullWidth color="grape">
          BUTTON
        </Button>
        <Button 
        size="large" 
        fullWidth 
        color="red"
        onClick ={()=>{
          console.log("클릭");
        }}
        >
          BUTTON
        </Button>
      </div>
      </div>
    </div>
  );
}

export default App;