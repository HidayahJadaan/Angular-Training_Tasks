// Q10: Create an object with dynamic properties and force the user to set all values as numbers only.

interface NumberObject {
  [key: string]: number;
}

const dynamicObject: NumberObject = {};

dynamicObject["age"] = 25;
dynamicObject["wight"] = 100;
dynamicObject["height"] = 175;
// dynamicObject["name"] = 'Hidayah'; =======> ERROR

console.log(dynamicObject);
