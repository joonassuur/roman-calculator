import React, { useState } from 'react';
import Inputs from "./Inputs";
import "./styles/App.css";

const App = () => {

    //final result
    const [value, setValue] = useState('')
    //error state
    const [err, setErr] = useState(false)

    const handlePrint = (result) => {
        setValue(() => result)
    }

    const handleErr = (e) => {
        setErr(() => e)
    }

    return (
        <div className="main-container">
            <Inputs
                printResult={handlePrint}
                showErr={handleErr}
            />
            <div className="result-container">
                {   err === "OOR" ? "Out of Range" :
                    err ? "Please enter a valid sequence of characters" :
                    value
                }
            </div>
        </div>
    )

}

export default App;
