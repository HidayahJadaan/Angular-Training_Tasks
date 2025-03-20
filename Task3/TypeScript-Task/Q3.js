//Q3: Create a function to return all values of an object and store them into an array
// then use it and print the array.
function ObjectReturnFunc(receivedObj) {
    var valuesArray = [];
    for (var key in receivedObj) {
        if (receivedObj.hasOwnProperty(key)) {
            valuesArray.push(receivedObj[key]);
        }
    }
    return valuesArray;
}
var passedObj = {
    name: "Hidaya Jadaan",
    age: 25,
    major: "Computer Engineer",
};
console.log(ObjectReturnFunc(passedObj));
