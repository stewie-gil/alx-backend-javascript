export default function updateStudentGradeByCity(array, city, newGrades) {
  const citystudents = array.filter((student) => student.location === city);
  const newstudent = citystudents.map((obj) => {
    const a = newGrades.find((grade) => grade.studentId === obj.id);

    return { ...obj, grade: a ? a.grade || 'N/A' : 'N/A' };
  });

  return newstudent;
}
