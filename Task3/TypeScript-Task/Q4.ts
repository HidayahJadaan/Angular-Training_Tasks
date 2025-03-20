//Q4: Create a closure function that receives parameters for the message 
//then return another function to print the message with username which
// passed as parameter for it. => message, []

function createMessageFunction(message: string) {
  return function (username: string): void {
    console.log(`${message}, ${username}`);
  };
}

const firstMessage = createMessageFunction("Hello");
firstMessage("Hidayah");  

const lastMessage = createMessageFunction("Goodbye");
lastMessage("Hidayah");  
