export default function updateStudentGradeByCity(array, city, newGrades) {
  // Step 1: Filter students from the specified city
  const filteredStudents = array.filter((student) => student.location === city);

  // Step 2: Create a map of studentId to grade from the newGrades array
  const gradeMap = {};
  newGrades.forEach((grade) => {
    gradeMap[grade.studentId] = grade.grade;
  });

  // Step 3: Update grades for the filtered students using map
  const updatedStudents = filteredStudents.map((student) => ({
    ...student,
    grade: gradeMap[student.id] || 'NA',
  }));

  return updatedStudents;
}
