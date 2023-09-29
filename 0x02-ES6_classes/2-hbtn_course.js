export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = null;
    this._length = null;
    this._students = [];

    // Verify and set the name attribute
    this.name = name;

    // Verify and set the length attribute
    this.length = length;

    // Verify and set the students attribute
    students.forEach((student) => {
      this.addStudent(student);
    });
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Method to add a student to the students array
  addStudent(student) {
    if (typeof student === 'string') {
      this._students.push(student);
    } else {
      throw new TypeError('Student name must be a string');
    }
  }
}
