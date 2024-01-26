function fiboEvenSum(n) {
  console.log(n);
  let sum = 0;
  let arr = [1, 2];
  while (arr[arr.length - 1] <= n){
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  if (arr[arr.length - 1] > n){
    arr.pop();
  }
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0) sum += arr[i];
  }
  console.log(arr);
  return sum;
}
