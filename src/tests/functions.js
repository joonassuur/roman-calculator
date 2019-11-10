const functions = {

    convertToArabic: () => {
        const RomanNum = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

        const value1Arr = ["M", "C", "X", "L", "I", "V"]

        //Arrays for converted Arabic numbers
        const converted1 = []

        //Stores indexes for concactonated characters, for removing excess values later
        const index1 = []

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

        //loop through an array in reverse to remove the excessive values after concatenating 
        for (let i = value1Arr.length - 1; i >= 0; --i) {
            for (let e = 0; e < index1.length; e++) {
                if (i === index1[e])
                    value1Arr.splice(i, 1)
            }
        }

        //convert the Roman numbers into Arabic ones
        value1Arr.forEach(e => converted1.push(RomanNum[e]))

        return converted1;
    },


    calculate: () => {

        const value1Arr = [1000, 100, 40, 4];
        const value2Arr = [2000, 300, 30, 1];

        let result;

        //add the values of both inputs together 
        const reducer = (a, c) => a + c;

        result = value1Arr.reduce(reducer) + value2Arr.reduce(reducer)

        return result;
    },


    convertToRoman: () => {
        const reducer = (a, c) => a + c;

        //get the result without decimals and convert it to an array
        const intResult = 3475
        const resultString = intResult.toString()
        const resultArr = Array.from(resultString)

        //array of Arabic numerals
        const numberArr = []

        //array of roman numerals
        const convertedResult = []


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

        return finalResult

    }

}

export default functions;
