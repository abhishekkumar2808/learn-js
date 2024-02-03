// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg()
{
    if (this.errMsg)
    {
        console.log(this.errMsg);
    }
}
const obj1 = {
    errMsg: 'Error in Obj1'
}

const obj2 = {
    errMsg: 'Error in Obj2'
}

logMsg.call(obj1);
logMsg.call(obj2);