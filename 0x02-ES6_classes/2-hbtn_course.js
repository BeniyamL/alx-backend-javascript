export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (typeof students !== 'object') {
      throw TypeError('students must be an array of string');
    }
    for (const std of students) {
      if (typeof std !== 'string') {
        throw TypeError('student must be a string');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name = '') {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length = 0) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students = []) {
    if (typeof students !== 'object') {
      throw new TypeError('students must be an array of string');
    }
    for (const std of students) {
      if (typeof std !== 'string') {
        throw new TypeError('student must be a string');
      }
    }
    this._students = students;
  }
}
