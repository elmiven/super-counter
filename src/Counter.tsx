import Button from "./Button";




function Counter(props: any) {

  
    let disableIncButton = props.counter === props.maxVal
  

    const incHandler = () => {
      if (props.counter < props.maxVal) {
  
  
        props.setCounter(props.counter + 1);
        // console.log(props.counter);
        // console.log(disableIncButton);
  
      }
      if (props.counter >= props.maxVal) {
        disableIncButton = false;
        // setisIncButtonDisabled(true);
        // setisResetButtonDisabled(false);
      }
    }
    
    const resetHandler = () => {
      props.setCounter(props.startVal);
      // setisIncButtonDisabled(false);
      // setisResetButtonDisabled(true);
    }
  

  
    return (
      <div className="App">
  
        <div className="counterBody">
          <h1>SUPER-COUNTER</h1>
          <div className={"counterButtonBody"} >
            <div className={props.error ? "hoverdiv" : props.changeSettings ? "changeSettings" :  (props.counter === props.maxVal) ? "counter-max" : "counter"}>
              {props.error||props.changeSettings ? "" : props.counter} 
              {props.error}
              {props.changeSettings ? <div>Change settings and pres SET</div> : ''}
              {/* {props.error ? <div className={"hoverdiv"} >{props.error}</div> : ''} */}

            </div>
            <Button name={"Inc"} callBack={incHandler} disabled={disableIncButton || (props.error)} />
            <Button name={"reset"} callBack={resetHandler} disabled={(props.counter === props.startVal) || (props.error)} />
          </div>
        </div>
  
      </div>
    );
  }
  

  export default Counter;