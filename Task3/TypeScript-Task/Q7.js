// Q7: Create a class Person that receives name, age as parameter 
// then create a method called describeMe and return “Hello I’m [name], I am [age] years old!”
// then create an instance then use it.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describeMe = function () {
        return "Hello I'm ".concat(this.name, ", I am ").concat(this.age, " years old!");
    };
    return Person;
}());
var person1 = new Person("Hidayah", 25);
console.log(person1.describeMe());
