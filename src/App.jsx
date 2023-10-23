// import { Fragment } from 'react'
import './App.css'
import { CounterApp } from './components/CounterApp'
function App() {
  return (
    <>
      <CounterApp 
        title="Contador de Carrito" 
        subTitle="cantidad de productos en el carrito"
      />

      <CounterApp
       title="Contador de vistas"
       subTitle="cantidad de usuarios en el sitio"
        />
      {/* 
      <CounterApp/>
      <CounterApp/> */}
    </>
  )
}
export default App
// control + k + c "comentar"
// control + k + u