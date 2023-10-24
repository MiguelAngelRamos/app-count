import { useEffect, useState } from "react";

export const CounterApp = ({title, subTitle}) => {
  // const {title, subTitle} = props;
  console.log('Renderizando el Componente Counter App');
  // console.log(props);
  const [counter, setCounter] = useState(0);
  console.log(counter);
  //* useEffect
  useEffect(
    () => {
      console.log(counter);
      console.log('use Effect');
    },[]);

  //* Handler (sumar, restar y restear el valor)
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
      {/* <h1>{props.title}</h1> */}
      <h1>{title}</h1>
      {/* <h2>{props.subTitle}: {counter}</h2> */}
      <h2>{subTitle}: {counter}</h2>

      <button onClick={() => handleSubstract(1)}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleAdd(1)}>+1</button>
    </>
  );
  
};