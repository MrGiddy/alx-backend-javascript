function reducer(accumulator, nextStudent) {
  return accumulator + nextStudent.id;
}

export default function getStudentIdsSum(studentsArray) {
  const idSum = studentsArray.reduce(reducer, 0);
  return idSum;
}
