import { useState } from "react";

export const CounterApp = (props) => {
  console.log('Renderizando el Componente Counter App');
  console.log(props);
  const [counter, setCounter] = useState(0);

  const handleAdd = (number) => {
    // counter = counter + 1;
    setCounter(counter + number);
  };

  const handleSubstract = (number) => {
    setCounter(counter - number);
  }

  const handleReset = () => {
    
    setCounter(0);
  }
  return(
    <>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}: {counter}</h2>

      <button onClick={() => handleSubstract(3)}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleAdd(20)}>+1</button>
    </>
  );
  
};