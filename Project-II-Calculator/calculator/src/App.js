import React from 'react';
import './App.css';
import '../src/components/ButtonComponents/ActionButton';
import '../src/components/ButtonComponents/NumberButton';
import '../src/components/DisplayComponents/CalculatorDisplay';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  render() {
  return (
    <div className="calculator-wrapper">
      <div className="NumberButton">
        <CalculatorDisplay />
      </div>
  
      <h3>Welcome to React Calculator ya knooo</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      </div>
  );
};
}

export default App;


// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);