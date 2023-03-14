import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Button from './Button';
import Settings from './Settings';
import { start } from 'repl';




export type CounterPropsType = {
  counter: number
  setCounter: (counter: number) => void
  startVal: number
  setStartVal: (startVal: number) => void
  maxVal: number
  setMaxVal: (maxVal: number) => void
  error: string
  setError: (error: string) => void
  changeSettings: boolean
  setChangeSettings: (changeSettings: boolean) => void
}





function App() {

  // let startVal = 0;
  // let maxVal = 5;

  // const [startVal, setStartVal] = useState(0)


  const [maxVal, setMaxVal] = useState(5)
  const [startVal, setStartVal] = useState(0)


  useEffect(() => {



    if (localStorage.getItem("max")) {
      setMaxVal(Number(localStorage.getItem("max")))
    }
    if (localStorage.getItem("start")) {

      setStartVal(Number(localStorage.getItem("start")))
    }
  }, [])




  // let startVal = 0;
  // let maxVal = 5



  //Set Start and Max values to the localStorage

  // if (!localStorage.getItem("max")) {
  //   maxVal = localStorage.setItem("max", JSON.stringify(5))
  //   maxVal = Number(localStorage.getItem("max"))
  // } else {
  //   maxVal = Number(localStorage.getItem("max"))
  // }

  // if (!localStorage.getItem("start")) {
  //   startVal = localStorage.setItem("start", JSON.stringify(0))
  //   startVal = Number(localStorage.getItem("start"))
  // } else {
  //   startVal = Number(localStorage.getItem("start"))
  // }

  // console.log(maxVal);
  // console.log(startVal);
  // console.log(maxVal);




  //state for counter
  const [counter, setCounter] = useState<number>(startVal)
  //state to set the error
  const [error, setError] = useState<string>('')
  //state to show the editing mode
  const [changeSettings, setChangeSettings] = useState<boolean>(false)


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
        setCounter={setCounter}
        startVal={startVal}
        setStartVal={setStartVal}
        maxVal={maxVal}
        setMaxVal={setMaxVal}
        error={error}
        setError={setError}
        changeSettings={changeSettings}
        setChangeSettings={setChangeSettings}
      />
      <div></div>
      <Settings
        counter={counter}
        setCounter={setCounter}
        startVal={startVal}
        setStartVal={setStartVal}
        maxVal={maxVal}
        setMaxVal={setMaxVal}
        error={error}
        setError={setError}
        changeSettings={changeSettings}
        setChangeSettings={setChangeSettings}
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

