function largestPrimeFactor(number) {
  let arr = [];
  for (let i = 1; i <= number; i++){
    if (number % i == 0){
      number /= i;
      arr.push(i);
      i = 1;
    }
  }
  return arr[arr.length - 1];
}
