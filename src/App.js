import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import CalculatorState from './Context/Calculator/CalculatorState';

function App() {
  return (
    <div className="App">
		  <CalculatorState>
			 <Calculator/>	  
		 </CalculatorState>	  
    </div>
  );
}

export default App;
