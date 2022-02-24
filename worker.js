const { workerData } = require("worker_threads");
const { task } = require("./task");

console.time(workerData);
task();
console.timeEnd(workerData);
