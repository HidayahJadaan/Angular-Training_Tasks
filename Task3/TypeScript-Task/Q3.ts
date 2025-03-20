//Q3: Create a function to return all values of an object and store them into an array
// then use it and print the array.

function ObjectReturnFunc(receivedObj: { [key: string]: any }): any[] {
  let valuesArray: any[] = [];
  for (let key in receivedObj) {
    if (receivedObj.hasOwnProperty(key)) {
      valuesArray.push(receivedObj[key]);
    }
  }
  return valuesArray;
}

const passedObj = {
  name: "Hidaya Jadaan",
  age: 25,
  major: "Computer Engineer",
};

console.log(ObjectReturnFunc(passedObj));
