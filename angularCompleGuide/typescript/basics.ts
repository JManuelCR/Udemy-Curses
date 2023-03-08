//Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives

let age: number;
age = 12;

let userName: string;

userName = "Manu";

let isInstructor: boolean;

isInstructor = false;

let hobbie: null;

// Arrays & Objects

// Arrays

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Manu",
  age: 32,
};

// person = {
//     isEmployee: true
// };

let people: {
  name: string;
  age: number;
}[];
//with [] brackets we are indicating that it is store as an array

// Type inference

let course = "react- the complete guide";

// course = 123451;

// Union types

// sometimes it is necessary store multiple types of values on a variables so it is necessary use union
// Type of variable

let secondCourse: string | number | boolean;

secondCourse = 12345;

/*
Creating an alias for objects
We can use this part of code anywhere, it do the code more consistent and easier to maintain
*/

type Person = {
  name: string;
  age: number;
};

let persons: Person;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

//stringArray[0].split('');

class Student {
  // firsName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];
  // Instead to define variables here we can add public in front of our parameters in the constructor method
  constructor(
    public first: string,
    public last: string,
    public age: number,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }
  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("MAx", "Schwarz", 32, ["Angular"]);
student.enroll("React");
//student.courses => It is not possible to access to this variable because it is private an its scope is local
//student.listCourses => Angular, React Instead to access to courses value whe can invoke a method to get the courses list


interface Human {
    firstName: string;
    age: number;

    greet: () => void; 
}


let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello');
    },
};

class Instructor implements Human {
    firstName : string;
    age: number;
    greet () {
        console.log('Hello!!!!')
    }
}

                                                                                                      