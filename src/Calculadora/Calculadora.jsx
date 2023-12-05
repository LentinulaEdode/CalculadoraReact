import React, { useState, useEffect } from 'react';
import './Calculator.css';
import { CalculatorProvider, useCalculator } from './CalculadoraContext';

const Calculator = () => {
  const [input, setInput] = useState(''); 

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const handleKeyDown = (event) => {
    const key = event.key;
  
    if (/\d/.test(key) || ['+', '-', '*', '/'].includes(key)) {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Delete') {
      clearInput();
    } else if (key === '.') {
      handleButtonClick('.');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  return (
    <div className="calculator">
      <input
        type="text"
        className="input screen"
        value={input}
        placeholder="0"
        readOnly
      />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>÷</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={clearInput}>C</button>
        </div>
      </div>
    </div>
  );
};

const CalculatorWrapper = () => {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
};

export default CalculatorWrapper;