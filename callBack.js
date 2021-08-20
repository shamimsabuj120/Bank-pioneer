function CallBackFunction(name, callHandler){
    callHandler(name)
}

const NewFunction = 'helo bro kemon acho'
CallBackFunction(NewFunction, callBackAgain);

function callBackAgain(name){
    console.log('good morning', name);
}