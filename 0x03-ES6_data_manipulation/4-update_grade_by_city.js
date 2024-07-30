export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  // Filter the students by the given city
  const cityStudents = studentsArray.filter((student) => student.location === city);

  // Map the city's students to their grades
  const cityStudentsGrades = cityStudents.map((student) => {
    // Get the grade of a student
    const gradeForStudent = newGrades.find((grade) => grade.studentId === student.id);
    // Return a student object with the updated grade
    return {
      ...student,
      grade: gradeForStudent ? gradeForStudent.grade : 'N/A',
    };
  });

  return cityStudentsGrades;
}
