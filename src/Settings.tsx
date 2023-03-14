import { useEffect, useState } from "react";
import { CounterPropsType } from "./App";
import Button from "./Button";






function Settings(props: CounterPropsType) {

    //state to save Start and Max setting when changin in inputs (before send it to the local state with set button) 
    const [startSetting, setStartSetting] = useState(props.startVal)   //(Number(localStorage.getItem("start")))
    const [maxSetting, setMaxSetting] = useState(props.maxVal)  //(Number(localStorage.getItem("max")))

    useEffect(() => {
    if (localStorage.getItem("max")) {
        setMaxSetting(Number(localStorage.getItem("max")))
      }
      if (localStorage.getItem("start")) {
  
        setStartSetting(Number(localStorage.getItem("start")))
      }
    }, [])



    //handler for button set settings to the localStorage  
    const setValHandler = () => {
        // props.setMaxVal(maxSetting);
        // props.setStartVal(startSetting);

        props.setMaxVal(maxSetting)
        props.setStartVal(startSetting)
        localStorage.setItem("max", JSON.stringify(maxSetting))
        localStorage.setItem("start", JSON.stringify(startSetting))

        props.setCounter(startSetting);

        props.setChangeSettings(false)
        // localStorage.setItem("keyK", "test" )
        // alert(localStorage.getItem("1"))
    }



    //handler for input start settings
    const inputStartHandler = (e: any) => {

        props.setChangeSettings(true)
        setStartSetting(+e.target.value);

        if ((+e.target.value >= 0) && (+e.target.value < maxSetting)) {
            props.setError("");
        } else if (+e.target.value < 0) {
            props.setError("Error: Start value can't be less than 0! ")
        } else if (+e.target.value >= maxSetting) {
            props.setError("Error: Start value can't be more or equal max value! ")
        }
    }


    //handler for input max settings
    const inputMaxHandler = (e: any) => {

        props.setChangeSettings(true)
        setMaxSetting(+e.target.value);

        if ((+e.target.value > 0) && (+e.target.value > startSetting)) {
            props.setError("");
        } else if (+e.target.value < 0) {
            props.setError("Error: Max value can't be less than 1! ")
        } else if (+e.target.value <= startSetting) {

            props.setError("Error: Max value can't be less or equal start value! ")
        }
    }



    const HoverHandler = () => {
    }



    return (

        <div className="App">

            <div className="settingsBody" onMouseOver={HoverHandler} >
                <h1>SETTINGS</h1>
                <div className="counterButtonBody">
                    <span>max</span>
                    <input
                        type="number"
                        name="inputmax"
                        onChange={inputMaxHandler}
                        value={maxSetting}
                        className={props.error ? "inputError" : "input"} />
                    <div className=""></div>
                    <span>start</span>
                    <input
                        type="number"
                        name="inputstart"
                        onChange={inputStartHandler}
                        value={startSetting}
                        className={props.error ? "inputError" : "input"} />
                    <Button
                        name={"SET"}
                        callBack={setValHandler}
                        disabled={(props.error !== '')}
                    />
                </div>

            </div>

        </div>

    );
}


export default Settings;