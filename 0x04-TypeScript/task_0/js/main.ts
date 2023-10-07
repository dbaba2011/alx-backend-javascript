interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];
// Get a reference to the table element in your HTML.
const table = document.createElement("table");

// Iterate over the studentsList and create a row for each student.
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  // Create table cells for first name and location.
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  // Append cells to the row and the row to the table.
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body of your HTML document.
document.body.appendChild(table);

