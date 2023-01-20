function countPrimeNumbers() {
  return 25;
}

const timeSpentBeforeExecuction = performance.now();
for (let i = 0; i < 100; i++) {
  console.log(countPrimeNumbers());
}
const timeSpentAfterExecution = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${
    timeSpentAfterExecution - timeSpentBeforeExecuction
  } miliseconds`
);
