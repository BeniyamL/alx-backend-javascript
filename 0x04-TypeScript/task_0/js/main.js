/** Render table based on some spectification **/
var student_1 = {
    firstName: 'Beniyam',
    lastName: 'Legesse',
    age: 27,
    location: 'Addis'
};
var student_2 = {
    firstName: 'Johann',
    lastName: 'Kerbrat',
    age: 40,
    location: 'California'
};
var StudentList = [student_1, student_2];
var tbl = document.createElement('table');
var bdy = document.createElement('tbody');
StudentList.forEach(function (std) {
    var rw = document.createElement('tr');
    var fname = document.createElement('td');
    var lc = document.createElement('td');
    fname.textContent = std.firstName;
    lc.textContent = std.location;
    rw.appendChild(fname);
    rw.appendChild(lc);
    bdy.appendChild(rw);
});
tbl.appendChild(bdy);
document.body.appendChild(tbl);
