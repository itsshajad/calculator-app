import { useState } from 'react';
import './App.css';
import KeyPad from './components/KeyPad';
import Output from './components/Output';

function App() {
  const [result, setResult] = useState('');

  const buttonPressed = (buttonName) => {
    if (buttonName === '=') {
      calculate();
    } else if (buttonName === 'CE') {
      reset();
    } else if (buttonName === 'X') {
      // backspace();
      setResult(result.toString().slice(0, -1));
    } else {
      setResult(result + buttonName);
    }
  };

  // const backspace = () => {
  //   setResult(result.slice(0, -1));
  // };
  const reset = () => {
    setResult('');
  };
  const calculate = () => {
    try {
      /* eslint no-eval: 0 */
      return setResult(eval(result));
    } catch (e) {
      setResult('error');
    }
  };

  return (
    <div className="App">
      <Output result={result} />
      <KeyPad findButton={buttonPressed} />
    </div>
  );
}

export default App;
