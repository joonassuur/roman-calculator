import React from 'react';
import CalcBtn from './CalcBtn.js';
import ResetBtn from './ResetBtn';
import { Input, Dropdown, Label, Icon } from 'semantic-ui-react';
import './styles/Inputs.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

//valid input characters
const validInput = "^[IVXLCDMivxlcdm]*$";
//valid sequence for calculation
const validSeq = "^(M{0,3})(D?C{0,3}|CM|CD)(L?X{0,3}|XC|XL)(V?I{0,3}|IX|IV)$";
//values to convert to
const RomanNum = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

const initialState = {

    value1: '',
    value1Arr: [],

    value2: '',
    value2Arr: [],

    operator: '+',

    result: null,

    hold: false,

    val1Empty: false,
    val2Empty: false,
    err: false
}

class Inputs extends React.Component {

    state = initialState;

    handleValue = (e, data) => {

        if (e.target.value.match(validInput)) {
            //first input
            if (data.placeholder === "Input 1")
                this.setState({ value1: data.value.toUpperCase() },
                    () => this.convertToArr(1)
                )
            //second input
            if (data.placeholder === "Input 2")
                this.setState({ value2: data.value.toUpperCase() },
                    () => this.convertToArr(2)
                )
        }
    }

    convertToArr = (e) => {
        //converts the input strings into an array
        this.setState({ value1Arr: Array.from(this.state.value1), hold: false, err: false })
        this.setState({ value2Arr: Array.from(this.state.value2), hold: false, err: false })

        //handle error labels for respective inputs
        if (e === 1)
            this.setState({ val1Empty: false })
        if (e === 2)
            this.setState({ val2Empty: false })
    }

    convertToArabic = (e) => {

        e.preventDefault()

        const { value1, value2, value1Arr, value2Arr, hold } = this.state;

        //prevent further array modifications (and calculations) if input hasn't been modified after displaying the result
        if (hold) {
            this.calculate();
            return;
        }

        //Arrays for converted Arabic numbers
        const converted1 = []
        const converted2 = []

        //Stores indexes for concactonated characters, for removing excess values later
        const index1 = []
        const index2 = []

        //check if any values should be concatenated (for both input fields)
        for (let i = 0; i < value1Arr.length; i++) {
            if (value1Arr[i] === "I" && value1Arr[i + 1] === "V") {
                value1Arr[i] = value1Arr[i] + value1Arr[i + 1]
                index1.push(i + 1)
            }
            if (value1Arr[i] === "I" && value1Arr[i + 1] === "X") {
                value1Arr[i] = value1Arr[i] + value1Arr[i + 1]
                index1.push(i + 1)
            }
            if (value1Arr[i] === "X" && value1Arr[i + 1] === "L") {
                value1Arr[i] = value1Arr[i] + value1Arr[i + 1]
                index1.push(i + 1)
            }
            if (value1Arr[i] === "X" && value1Arr[i + 1] === "C") {
                value1Arr[i] = value1Arr[i] + value1Arr[i + 1]
                index1.push(i + 1)
            }
            if (value1Arr[i] === "C" && value1Arr[i + 1] === "D") {
                value1Arr[i] = value1Arr[i] + value1Arr[i + 1]
                index1.push(i + 1)
            }
            if (value1Arr[i] === "C" && value1Arr[i + 1] === "M") {
                value1Arr[i] = value1Arr[i] + value1Arr[i + 1]
                index1.push(i + 1)
            }
        }

        for (let i = 0; i < value2Arr.length; i++) {
            if (value2Arr[i] === "I" && value2Arr[i + 1] === "V") {
                value2Arr[i] = value2Arr[i] + value2Arr[i + 1]
                index2.push(i + 1)
            }
            if (value2Arr[i] === "I" && value2Arr[i + 1] === "X") {
                value2Arr[i] = value2Arr[i] + value2Arr[i + 1]
                index2.push(i + 1)
            }
            if (value2Arr[i] === "X" && value2Arr[i + 1] === "L") {
                value2Arr[i] = value2Arr[i] + value2Arr[i + 1]
                index2.push(i + 1)
            }
            if (value2Arr[i] === "X" && value2Arr[i + 1] === "C") {
                value2Arr[i] = value2Arr[i] + value2Arr[i + 1]
                index2.push(i + 1)
            }
            if (value2Arr[i] === "C" && value2Arr[i + 1] === "D") {
                value2Arr[i] = value2Arr[i] + value2Arr[i + 1]
                index2.push(i + 1)
            }
            if (value2Arr[i] === "C" && value2Arr[i + 1] === "M") {
                value2Arr[i] = value2Arr[i] + value2Arr[i + 1]
                index2.push(i + 1)
            }
        }

        //loop through an array in reverse to remove the excessive values after concatenating 
        for (let i = value1Arr.length - 1; i >= 0; --i) {
            for (let e = 0; e < index1.length; e++) {
                if (i === index1[e])
                    value1Arr.splice(i, 1)
            }
        }
        for (let i = value2Arr.length - 1; i >= 0; --i) {
            for (let e = 0; e < index2.length; e++) {
                if (i === index2[e])
                    value2Arr.splice(i, 1)
            }
        }

        //convert the Roman numbers into Arabic ones
        value1Arr.forEach(e => converted1.push(RomanNum[e]))
        value2Arr.forEach(e => converted2.push(RomanNum[e]))

        this.setState({ result: null, value1Arr: converted1, value2Arr: converted2 },
            () => {

                //display error if either field is empty
                if (value1 === '' || value2 === '') {
                    if (value1 === '') {
                        this.setState({ val1Empty: true })
                    }
                    if (value2 === '') {
                        this.setState({ val2Empty: true })
                    }
                    return;
                }

                this.calculate()
            })
    }

    calculate = async () => {

        const { value1, value2, value1Arr, value2Arr, operator } = this.state;

        //add the values of both inputs together before further calculations
        const reducer = (a, c) => a + c;

        this.doCalc = async () => {

            if (value1Arr.length < 1 || value2Arr.length < 1)
                return;

            //check if both input values match RegEx valid sequence
            if (value1.match(validSeq) && value2.match(validSeq)) {
                switch (operator) {
                    case '+':
                        this.setState({ result: value1Arr.reduce(reducer) + value2Arr.reduce(reducer) })
                        break;
                    case '-':
                        this.setState({ result: value1Arr.reduce(reducer) - value2Arr.reduce(reducer) })
                        break;
                    case '*':
                        this.setState({ result: value1Arr.reduce(reducer) * value2Arr.reduce(reducer) })
                        break;
                    case '/':
                        this.setState({ result: value1Arr.reduce(reducer) / value2Arr.reduce(reducer) })
                        break;
                    default:
                        return;
                }

                this.setState({ hold: true })
            } else {
                //display error if aither field has invalid sequence that does not match RegEx sequence
                this.setState({ result: null, err: true }, () => this.displayError())
                return;
            }
        }

        await this.doCalc()

        //if value is out of upper range of Roman numbers
        if (this.state.result > 3999) {
            this.setState({ err: "OOR" }, () => this.displayError());
            return;
        }

        this.convertToRoman()
    }

    convertToRoman = () => {
        const reducer = (a, c) => a + c;

        //get the result without decimals and convert it to an array
        const intResult = parseInt(this.state.result)
        const resultString = intResult.toString()
        const resultArr = Array.from(resultString)

        //array of Arabic numerals
        const numberArr = []

        //array of roman numerals
        const convertedResult = []


        //if value is less than 0, display error and exit function
        if (intResult < 1) {
            this.setState({ err: "OOR" }, () => this.displayError())
            return;
        }

        //push Arabic numbers into an array in reverse order before converting to Roman numerals
        resultArr.reverse().forEach(e => {
            numberArr.push(Number(e))
        })


        //Do the final conversion to Roman numerals
        //-----0-9
        if (numberArr[0] < 4) {
            for (let i = 0; i < numberArr[0]; i++) {
                convertedResult.push("I")
            }
        }
        if (numberArr[0] === 4) {
            convertedResult.push("IV")
        }
        if (numberArr[0] >= 5 && numberArr[0] < 9) {
            for (let i = 0; i < numberArr[0] - 5; i++) {
                convertedResult.push("I")
            }
            convertedResult.push("V")
        }
        if (numberArr[0] === 9) {
            convertedResult.push("IX")
        }
        //------10-90
        if (numberArr[1] < 4) {
            for (let i = 0; i < numberArr[1]; i++) {
                convertedResult.push("X")
            }
        }
        if (numberArr[1] === 4) {
            convertedResult.push("XL")
        }
        if (numberArr[1] >= 5 && numberArr[1] < 9) {
            for (let i = 0; i < numberArr[1] - 5; i++) {
                convertedResult.push("X")
            }
            convertedResult.push("L")
        }
        if (numberArr[1] === 9) {
            convertedResult.push("XC")
        }
        //------100-900
        if (numberArr[2] < 4) {
            for (let i = 0; i < numberArr[2]; i++) {
                convertedResult.push("C")
            }
        }
        if (numberArr[2] === 4) {
            convertedResult.push("CD")
        }
        if (numberArr[2] >= 5 && numberArr[2] < 9) {
            for (let i = 0; i < numberArr[2] - 5; i++) {
                convertedResult.push("C")
            }
            convertedResult.push("D")
        }
        if (numberArr[2] === 9) {
            convertedResult.push("CM")
        }
        //------1000-3000
        if (numberArr[3] < 4) {
            for (let i = 0; i < numberArr[3]; i++) {
                convertedResult.push("M")
            }
        }

        let finalResult;

        if (convertedResult.length > 0) {
            finalResult = convertedResult.reverse().reduce(reducer)
        }


        //send results to parent for display, along with the error status
        this.props.showErr(this.state.err)

        if (!this.state.err) {
            this.props.printResult(finalResult)
        }
    }

    //send error status to parent in case of error
    displayError = () => {
        if (this.state.err) {
            this.props.showErr(this.state.err)
        }
    }

    //handle operator change
    operatorChange = (e, data) => {
        this.setState({ operator: data.value, err: false })
    }

    handleReset = (e) => {
        e.preventDefault();
        this.props.printResult('')
        this.setState(initialState);

    }

    render() {
        const { value1, value2, operator } = this.state;

        //operator dropdown options
        const options = [
            { key: 1, text: <Icon link name='plus' />, value: '+' },
            { key: 2, text: <Icon link name='minus' />, value: '-' },
            { key: 3, text: <Icon link name='times' />, value: '*' },
            { key: 4, text: <FontAwesomeIcon icon={faDivide} />, value: '/' },
        ]

        return (

                <form>

                    <div className="inputs-container">

                        <div className="input-container">

                            <Input onChange={this.handleValue} value={value1} placeholder='Input 1' />

                            {/* error label */}
                            <Label
                                basic
                                color='red'
                                pointing
                                style={{ display: this.state.val1Empty ? "block" : "none" }}
                            >
                                Please enter a value
                            </Label>

                        </div>

                        <Dropdown
                            value={operator}
                            selection
                            compact
                            onChange={this.operatorChange}
                            options={options}
                        />

                        <div className="input-container">

                            <Input onChange={this.handleValue} value={value2} placeholder='Input 2' />

                            {/* error label */}
                            <Label
                                basic
                                color='red'
                                pointing
                                style={{ display: this.state.val2Empty ? "block" : "none" }}
                            >
                                Please enter a value
                            </Label>

                        </div>

                    </div>

                    <div className="btn-container">
                        <ResetBtn reset={this.handleReset} />
                        <CalcBtn  calculate={this.convertToArabic} />
                    </div>

                </form>

        )
    }
}

export default Inputs;
