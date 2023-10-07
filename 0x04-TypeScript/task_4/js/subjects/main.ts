// Import necessary classes and interfaces from the Subjects namespace
import { Cpp, Java, React } from './subjects/Cpp';
import { Teacher } from './subjects/Teacher';

// Create a constant cpp for Cpp Subjects
export const cpp = new Cpp();

// Create a constant java for Java Subjects
export const java = new Java();

// Create a constant react for React Subjects
export const react = new React();

// Create one Teacher object cTeacher with experienceTeachingC = 10
const cTeacher: Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
