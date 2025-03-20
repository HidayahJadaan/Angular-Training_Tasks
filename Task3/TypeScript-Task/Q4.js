//Q4: Create a closure function that receives parameters for the message 
//then return another function to print the message with username which
// passed as parameter for it. => message, []
function createMessageFunction(message) {
    return function (username) {
        console.log("".concat(message, ", ").concat(username));
    };
}
var firstMessage = createMessageFunction("Hello");
firstMessage("Hidayah");
var lastMessage = createMessageFunction("Goodbye");
lastMessage("Hidayah");
