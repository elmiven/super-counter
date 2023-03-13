import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Button from './Button';
import Settings from './Settings';
import { start } from 'repl';


export type CounterPropsType = {
  counter: number
  startVal: number
  maxVal: number
  setCounter: (counter: number) => void
  error: string
  setError: (error: string) => void
  SetChangeSettings: (changeSettings: boolean) => void
  changeSettings: boolean
}







function App() {

  // let startVal = 0;
  // let maxVal = 5;

  // const [startVal, setStartVal] = useState(0)
  // const [maxVal, setMaxVal] = useState(5)

  let startVal;
  let maxVal;


  //Set Start and Max values to the localStorage
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


  //state for counter
  const [counter, setCounter] = useState<number>(startVal)
  //state to set the error
  const [error, setError] = useState<string>('')
  //state to show the editing mode
  const [changeSettings, SetChangeSettings] = useState<boolean>(false)


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
      <Counter
        counter={counter}
        startVal={startVal}
        maxVal={maxVal}
        setCounter={setCounter}
        error={error}
        setError={setError}
        SetChangeSettings={SetChangeSettings}
        changeSettings={changeSettings}
      />
      <div></div>
      <Settings
        counter={counter}
        startVal={startVal}
        maxVal={maxVal}
        setCounter={setCounter}
        error={error}
        setError={setError}
        SetChangeSettings={SetChangeSettings}
        changeSettings={changeSettings}
      />


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

