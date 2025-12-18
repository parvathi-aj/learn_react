//  function that validates user inputs by type.

function validateInputs(value, expectedType){
    let actualtype = typeof(value)
    if (expectedType == actualtype){
        return true;
    }
    else{
        return false;
    }
}

console.log(validateInputs(123,'number'))