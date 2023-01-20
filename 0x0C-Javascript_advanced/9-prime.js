function countPrimeNumbers() {
  return 25;
}

const timeSpentBeforeExecuction = performance.now();
countPrimeNumbers();
const timeSpentAfterExecution = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${
    timeSpentAfterExecution - timeSpentBeforeExecuction
  } miliseconds`
);
