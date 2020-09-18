import React from 'react';
import './App.css';
import { ShoesContextprovider } from './components/Context';
import Screen from './React-router/Screen';


function App() {
  return (
    <ShoesContextprovider>
      <div className="App">
        <Screen />
      </div>
    </ShoesContextprovider>
  );
}

export default App;
