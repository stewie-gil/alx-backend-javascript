export default function updateStudentGradeByCity(array, city, newGrades) {
    const gradeid = {};
    newGrades.forEach((grade) => {

	gradeid[grade.studentId] = grade.grade;
    });

    const updatedArray = array.map((student) => ({...student, grade: gradeid[student.id] || 'NA'


						 }));
    return updatedArray;
}
