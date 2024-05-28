import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setCurrentValue(eval(currentValue));
      } catch {
        setCurrentValue('Error');
      }
    } else if (value === 'C') {
      setCurrentValue('');
    } else {
      setCurrentValue(currentValue + value);
    }
  };

  return (
    <div>
      <div className='title'><h2>CASIO</h2></div>
      <input type="text" value={currentValue} readOnly />
      <div className="button-row">
        {['7', '8', '9', '/'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
      </div>
      <div className="button-row">
        {['4', '5', '6', '*'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
      </div>
      <div className="button-row">
        {['1', '2', '3', '-'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
      </div>
      <div className="button-row">
        {['0', 'C', '=', '+'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} className={val === 'C' ? 'red-button' : ''} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
  