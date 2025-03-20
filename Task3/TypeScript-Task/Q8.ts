// Q8: Create an abstract class Student that receive an array of marks as number and name and have an abstract
//  method called isPassed which return boolean.
// Then Create a Bachelor class that inherits from Student and implement isPassed method and return true if the 
// average is over or equals 60. Create a PHD class that inherits from Student and implement isPassed method and
//  return true if the average is over or equals 80. use a reduce method to calculate the average of students.


abstract class Student {
  name: string;
  marks: number[];

  constructor(name: string, marks: number[]) {
    this.name = name;
    this.marks = marks;
  }

  abstract isPassed(): boolean;

  calculateAverage(): number {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }
}

class Bachelor extends Student {
  constructor(name: string, marks: number[]) {
    super(name, marks);
  }

  isPassed(): boolean {
    const average = this.calculateAverage();
    return average >= 60;
  }
}

class PhD extends Student {
  constructor(name: string, marks: number[]) {
    super(name, marks);
  }

  isPassed(): boolean {
    const average = this.calculateAverage();
    return average >= 80;
  }
}

const bachelorStudent = new Bachelor("Hidayah", [65, 40, 30, 90]);
console.log(`${bachelorStudent.name} passed: ${bachelorStudent.isPassed()}`); 

const phdStudent = new PhD("Ahmad", [85, 90, 95, 90]);
console.log(`${phdStudent.name} passed: ${phdStudent.isPassed()}`);

const phdStudent2 = new PhD("Rahaf", [70, 75, 50, 45]);
console.log(`${phdStudent2.name} passed: ${phdStudent2.isPassed()}`);
