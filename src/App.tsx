import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Button from './Button';
import Settings from './Settings';
import { start } from 'repl';


type CounterType = {
  counter: number
}


function App() {

  // let startVal = 0;
  // let maxVal = 5;

  // const [startVal, setStartVal] = useState(0)
  // const [maxVal, setMaxVal] = useState(5)

  let startVal;
  let maxVal;



  if (!localStorage.getItem("max")) {
    maxVal = localStorage.setItem("max", JSON.stringify(5))
    maxVal = Number(localStorage.getItem("max"))
  } else {
    maxVal = Number(localStorage.getItem("max"))

  }

  if (!localStorage.getItem("start")) {
    startVal = localStorage.setItem("start", JSON.stringify(0))
    startVal = Number(localStorage.getItem("start"))
  } else {
    startVal = Number(localStorage.getItem("start"))
  }

  // console.log(startVal);
  // console.log(maxVal);


  // startVal = localStorage.getItem("start")
  // maxVal = localStorage.getItem("max")
  // useEffect( ()=>{
  //   localStorage.setItem(1, JSON.stringify(value))
  // }, [value]  )


  const [counter, setCounter] = useState(startVal)

  const [error, setError] = useState('')

  const [changeSettings, SetChangeSettings] = useState(false)
  

  // console.log(counter);
  // const incHandler = () => {
  //   if (counter < maxVal) {


  //     setCounter(() => (counter + 1));
  //     console.log(counter);
  //     console.log(disableIncButton);

  //   }
  //   if (counter >= maxVal) {
  //     disableIncButton = false;
  //     // setisIncButtonDisabled(true);
  //     // setisResetButtonDisabled(false);
  //   }
  // }




  // const resetHandler = () => {
  //   setCounter(initialVal);
  //   // setisIncButtonDisabled(false);
  //   // setisResetButtonDisabled(true);
  // }



  return (
    <div className="AppCount">
    <Counter counter={counter} startVal={startVal} maxVal={maxVal} setCounter={setCounter} error={error} setError={setError} SetChangeSettings={SetChangeSettings} changeSettings={changeSettings}/>
    <div></div>
      <Settings counter={counter} startVal={startVal} maxVal={maxVal} setCounter={setCounter} error={error} setError={setError} SetChangeSettings={SetChangeSettings}/>
      
    </div>
  );
}



export default App;



{/* <div className="counterBody">
<h1>SUPER-COUNTER</h1>
<div className="counterButtonBody">
  <div className={(counter === maxVal) ? "counter-max" : "counter"}>
    {counter}
  </div>
  <Button name={"Inc"} callBack={incHandler} disabled={disableIncButton} />
  <Button name={"reset"} callBack={resetHandler} disabled={counter === initialVal} />
</div>
</div> */}

// function App() {
//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

