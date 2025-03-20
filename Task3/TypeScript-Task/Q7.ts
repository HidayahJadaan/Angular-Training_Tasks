// Q7: Create a class Person that receives name, age as parameter 
// then create a method called describeMe and return “Hello I’m [name], I am [age] years old!”
// then create an instance then use it.


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describeMe(): string {
    return `Hello I'm ${this.name}, I am ${this.age} years old!`;
  }
}

const person1 = new Person("Hidayah", 25);
console.log(person1.describeMe()); 
