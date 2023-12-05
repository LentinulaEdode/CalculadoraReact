import React from 'react';
import Calculadora from "./Calculadora/Calculadora.jsx";
import { CalculatorProvider } from './Calculadora/CalculadoraContext';

function App() {
  return (
    <CalculatorProvider>
      <div>
        <Calculadora />
      </div>
    </CalculatorProvider>
  );
}

export default App;