function gateFullName(firstName, LastName){
    console.log(arguments);
    let result = " ";
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        result =  result + " " + element;
        
    }
    return result;
}

const namePrint = gateFullName("nasir","shamim", "sabuj","kalam");
console.log(namePrint)