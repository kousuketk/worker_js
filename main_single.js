const { task } = require("./task");

console.time("total");

console.time("task#1");
task();
console.timeEnd("task#1");

console.time("task#2");
task();
console.timeEnd("task#2");

console.time("task#3");
task();
console.timeEnd("task#3");

console.timeEnd("total");
