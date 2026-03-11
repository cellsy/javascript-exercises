const removeFromArray = function() {

    //first find where the element is
    inputArray = arguments[0]
    let locatedAt = 0
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === arguments[1]) 
            locatedAt = i
    }
    console.log(arguments[0])
    let returnArray = arguments[1](3,1)
    console.log(returnArray);
    return arguments[0].splice(locatedAt,1)    
};

// Do not edit below this line
module.exports = removeFromArray;
