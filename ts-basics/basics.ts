// Primitives: number, string, boolean
// More complex types; arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Bruno";

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ['Biking', 'Scuba Diving'];

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Bruno',
    age: 46,
}

/*
person = {
    isEmployee: true
}*/

let people: {
    name: string;
    age: number;
}[];

// Type inference
//let course = 'React - The Complete Guide';

// Union Types
let course: string | number = 'React - The Complete Guide';
course = 12341;

// Alias Type

type User = {
    id: number;
    username: string;
    email: string;
}

let user: User;
let users: User[];

// Functions & Types
/*function add(a: number, b: number): number | string {
    return a + b;
}*/

function add(a: number, b: number): number {
    return a + b;
}

function printoutput(value: any): void {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]