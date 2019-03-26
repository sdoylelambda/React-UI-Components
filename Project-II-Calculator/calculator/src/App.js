import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>

      <div className="calculatorWrapper">
      <CalculatorDisplay />
        <div className="contentWrapper">
        
        <NumberButton />
        <ActionButton />
        </div>
      </div>
    
    </div>
  );
};

export default App;
