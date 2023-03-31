import React from "react";
import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

const Calculator = () => {
function clearMemory(){
  console.log('clear');
}

function setOperation(operation){
  console.log(operation);
}

function addDigit(number){
  console.log(number);
}

  return (
    <div className="Calculator">
      <Display value={100}/>
      <Button label='AC' click={() => clearMemory()} triple/>
      <Button label='/' click={()=> setOperation('/')} operation/>
      <Button label='7' click={()=> addDigit('7')}/>
      <Button label='8'  click={()=> addDigit('8')}/>
      <Button label='9'  click={()=> addDigit('9')}/>
      <Button label='*' click={()=> setOperation('*')} operation/>
      <Button label='4' click={()=> addDigit('4')}/>
      <Button label='5' click={()=> addDigit('5')}/>
      <Button label='6' click={()=> addDigit('6')}/>
      <Button label='-' operation/>
      <Button label='1' click={()=> addDigit('1')}/>
      <Button label='2' click={()=> addDigit('2')}/>
      <Button label='3' click={()=> addDigit('3')}/>
      <Button label='+' click={()=> setOperation('+')} operation/>
      <Button label='0'  click={()=> addDigit('0')} double/>
      <Button label='.' click={()=> setOperation('.')} operation/>
      <Button label='=' click={()=> setOperation('=')} operation/>
    </div>
  );
};

export default Calculator;
