var dt = new Date();
var month = dt.getMonth();
var year = dt.getFullYear();
daysInMonth = new Date(year, month, 0).getDate();
console.log(daysInMonth);
