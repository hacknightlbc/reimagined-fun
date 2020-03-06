const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(queryString);
urlParams.forEach((x, y) =>
document.forms["simpleform"][y].value = x);
