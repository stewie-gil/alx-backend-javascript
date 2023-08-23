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
location: "New york"
};

const student2: Student = {
firstName: "Jane",
lastName: "Smith",
age: 22,
location: "Los Angeles"
};

const studentList: Student[] = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

studentList.forEach(student => {
const row = table.insertRow();
const firstNameCell = row.insertCell();
const locationCell = row.insertCell();

firstNameCell.textContent = student.firstName;
locationCell.textContent = student.location;

});

