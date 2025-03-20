// Q8: Create an abstract class Student that receive an array of marks as number and name and have an abstract
//  method called isPassed which return boolean.
// Then Create a Bachelor class that inherits from Student and implement isPassed method and return true if the 
// average is over or equals 60. Create a PHD class that inherits from Student and implement isPassed method and
//  return true if the average is over or equals 80. use a reduce method to calculate the average of students.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.calculateAverage = function () {
        var total = this.marks.reduce(function (sum, mark) { return sum + mark; }, 0);
        return total / this.marks.length;
    };
    return Student;
}());
var Bachelor = /** @class */ (function (_super) {
    __extends(Bachelor, _super);
    function Bachelor(name, marks) {
        return _super.call(this, name, marks) || this;
    }
    Bachelor.prototype.isPassed = function () {
        var average = this.calculateAverage();
        return average >= 60;
    };
    return Bachelor;
}(Student));
var PhD = /** @class */ (function (_super) {
    __extends(PhD, _super);
    function PhD(name, marks) {
        return _super.call(this, name, marks) || this;
    }
    PhD.prototype.isPassed = function () {
        var average = this.calculateAverage();
        return average >= 80;
    };
    return PhD;
}(Student));
var bachelorStudent = new Bachelor("Hidayah", [65, 40, 30, 90]);
console.log("".concat(bachelorStudent.name, " passed: ").concat(bachelorStudent.isPassed()));
var phdStudent = new PhD("Ahmad", [85, 90, 95, 90]);
console.log("".concat(phdStudent.name, " passed: ").concat(phdStudent.isPassed()));
var phdStudent2 = new PhD("Rahaf", [70, 75, 50, 45]);
console.log("".concat(phdStudent2.name, " passed: ").concat(phdStudent2.isPassed()));
