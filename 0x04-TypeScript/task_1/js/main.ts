interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attributes
}
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: 'Los Angeles',
};

const teacher3: Teacher = {
  firstName: 'Alice',
  fullTimeEmployee: true,
  location: 'London',
  contract: false, // Dynamic attribute
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0); // Get the first letter of firstName
  return `${firstInitial}. ${lastName}`;
};
console.log(printTeacher("John", "Doe")); // Output: "J. Doe"
console.log(printTeacher("Alice", "Smith")); // Output: "A. Smith"
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
const student = new StudentClass("John", "Doe");

console.log(student.displayName()); // Output: "John"
console.log(student.workOnHomework()); // Output: "Currently working"

