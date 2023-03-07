import { useEffect, useState } from "react";
import Button from "./Button";




function Settings(props: any) {





    const setValHandler = () => {
        // props.setMaxVal(maxSetting);
        // props.setStartVal(startSetting);



        localStorage.setItem("max", JSON.stringify(maxSetting))
        localStorage.setItem("start", JSON.stringify(startSetting))

        props.setCounter(startSetting);


        props.SetChangeSettings(false)
        // localStorage.setItem("keyK", "test" )
        // alert(localStorage.getItem("1"))


    }




    const inputStartHandler = (e: any) => {
        props.SetChangeSettings(true)
        if ((+e.target.value >= 0) && (+e.target.value < maxSetting)) {
            setStartSetting(+e.target.value);
            props.setError("");
        } else if (+e.target.value < 0) {
            setStartSetting(+e.target.value);
            props.setError("Error: Start value can't be less than 0! ")
        } else if (+e.target.value >= maxSetting) {
            setStartSetting(+e.target.value);
            props.setError("Error: Start value can't be more or equal max value! ")

        }


    }

    const inputMaxHandler = (e: any) => {
        props.SetChangeSettings(true)
        if ((+e.target.value > 0) && (+e.target.value > startSetting)) {
            setMaxSetting(+e.target.value);
            props.setError("");
        } else if (+e.target.value < 0){
            setMaxSetting(+e.target.value);
            props.setError("Error: Max value can't be less than 1! ")
        } else if (+e.target.value <= startSetting) {
            setMaxSetting(+e.target.value);
            props.setError("Error: Max value can't be less or equal start value! ")

        }
    }


    const [startSetting, setStartSetting] = useState(Number(localStorage.getItem("start")))
    const [maxSetting, setMaxSetting] = useState(Number(localStorage.getItem("max")))




    const HoverHandler = () => {




    }



    return (

        <div className="App">

            <div className="settingsBody" onMouseOver={HoverHandler} >
                <h1>SETTINGS</h1>
                <div className="counterButtonBody">
                    <span>max</span> <input type="number" name="inputmax" onChange={inputMaxHandler} value={maxSetting} className={props.error ? "inputError" : "input"}/>
                    <div className=""></div>
                    <span>start</span> <input type="number" name="inputstart" onChange={inputStartHandler} value={startSetting} className={props.error ? "inputError" : "input"}/>
                    <Button name={"SET"} callBack={setValHandler} disabled={(props.error)}/>
                </div>

            </div>

        </div>

    );
}


export default Settings;