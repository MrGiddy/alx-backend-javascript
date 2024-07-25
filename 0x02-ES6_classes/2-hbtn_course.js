export default class HolbertonCourse {
  // Initialize course instance
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Retrieve the course's name
  get name() {
    return this._name;
  }

  // Set the course's name
  set name(courseName) {
    if (typeof courseName === 'string') {
      this._name = courseName;
    }
    throw new TypeError('Name must be a string');
  }

  // Retrieve the course's length
  get length() {
    return this._length;
  }

  // Set the course's length
  set length(courseLength) {
    if (typeof courseLength === 'number') {
      this._length = courseLength;
    }
    throw new TypeError('Length must be a number');
  }

  // Retrieve students in the course
  get students() {
    return this._students;
  }

  // Add student(s) to the course
  set students(studentsArray) {
    if (Array.isArray(studentsArray)) {
      throw new TypeError('Students must be an array of strings');
    }
    for (const s of studentsArray) {
      if (typeof s !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = studentsArray;
    }
  }
}
