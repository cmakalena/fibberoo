/**
 * Created by Chad on 9/20/16.
 */

function fib(max) {
  let firstTerm = 0;
  let secondTerm = 1;
  const numbers = [firstTerm, secondTerm];
  while (numbers.length < max) {
    const nextTerm = firstTerm + secondTerm;
    numbers.push(nextTerm);
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }
  return numbers;
}

console.log(fib(100));
