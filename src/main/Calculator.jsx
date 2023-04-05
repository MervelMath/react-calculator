import React, { useState } from "react";
import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

const Calculator = () => {
  // const[displayValue, setDisplay] = useState('0');
  // const[clearDisplay, setClearDisplay] = useState(false);
  // const[operation, setOperation] = useState(null)
  // const[values, setValues] = useState([0, 0])
  // const[current, setCurrent] = useState(0)

  const defaultCalculatorDisplayValues = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  };
  
  const [count, setMyValue] = useState(defaultCalculatorDisplayValues);

 

  function clearMemory() {
    setMyValue(defaultCalculatorDisplayValues)
  }

  function setOperation(operation) {
    console.log(count.current)
    if (count.current === 0) {
      setMyValue({
        ...count,
        operation: operation,
        current: 1,
        clearDisplay: true,
      });
    } 
    else {
      const equals = operation === "=";
      const currentOperation = count.operation;

      const values = [...count.values];
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (e) {
        values[0] = count.values[0];
      }

      values[1] = 0;

      setMyValue({
        ...count,
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });
    }
  }

  function addDigit(n) {
    if (n === "." && count.displayValue.includes(".")) {
      return;
    }

    const clearDisplay = count.displayValue === "0" || count.clearDisplay;

    const currentValue = clearDisplay ? "" : count.displayValue;

    const displayValue = currentValue + n;

    setMyValue({
      ...count,
      displayValue: displayValue,
    });

    if (n !== ".") {
      const i = count.current;
      const newValue = parseFloat(displayValue);
      const values = [...count.values];
      console.log(values);
      values[i] = newValue;
      setMyValue({
        ...count,
        displayValue: displayValue,
        values: values,
      });
    }
  }

  return (
    <div className="Calculator">
      <Display value={count.displayValue} />
      <Button label="AC" click={() => clearMemory()} triple />
      <Button label="/" click={() => setOperation("/")} operation />
      <Button label="7" click={() => addDigit("7")} />
      <Button label="8" click={() => addDigit("8")} />
      <Button label="9" click={() => addDigit("9")} />
      <Button label="*" click={() => setOperation("*")} operation />
      <Button label="4" click={() => addDigit("4")} />
      <Button label="5" click={() => addDigit("5")} />
      <Button label="6" click={() => addDigit("6")} />
      <Button label="-" operation />
      <Button label="1" click={() => addDigit("1")} />
      <Button label="2" click={() => addDigit("2")} />
      <Button label="3" click={() => addDigit("3")} />
      <Button label="+" click={() => setOperation("+")} operation />
      <Button label="0" click={() => addDigit("0")} double />
      <Button label="." click={() => addDigit(".")} />
      <Button label="=" click={() => setOperation("=")} operation />
    </div>
  );
};

export default Calculator;
