const repeatString = function() {

    let numRepeats = arguments[1]
    if (numRepeats < 0) return "ERROR"
    let stringToRepeat = arguments[0]
    let repeatedString = ""
    console.log(numRepeats, stringToRepeat)
    for (let i = 0; i < numRepeats; i++) {
        repeatedString += stringToRepeat
    }
    console.log(repeatedString)

    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
