1. Find the Product.

const Find_Prod = (array, N) => 
{
  let product = 1;
  for(let i = 0; i < array.length ; i++){
    product = product * array[i];
  }
  return product;
};

2. Find the Sum.

const Find_Sum = (array, N) => 
{
  let sum = 0;
  for(let i = 0; i < array.length ; i++){
    sum += array[i];
  }
  return sum;
};
 
3. Count Occurrences

const findCount = (N, K, Arr) => 
{
  let count = 0;
  for(let i = 0; i < N; i++){
    if(Arr[i] == K){
      count++;
    }
  }
  return count;
};

4. Even Odd

const findEvenOdd = (N, Arr) => 
{
  let B = [];
  let sumEven = 0 , sumOdd = 0;
  for(let i = 0; i < N; i++){
    if(Arr[i]%2 === 0){
      sumEven += Arr[i];
    }
    else{
      sumOdd += Arr[i];
    }
  }
  B.push(sumEven);
  B.push(sumOdd);
  return B;
};


5. Find whether the number is present or not

const Find_Num = (array,N,M) => 
{
  for (let i = 0; i < N; i++){
    if(array[i] = M){
      return "YES";
    }
    else{
      return "NO";
    }
  }
};

6. Higher Age

const highAge = (N, arr) => 
{
  let arr2 = [];
  for(let i = 0; i < N; i++){
    if(arr[i] >= 18){
      arr2.push(arr[i]);
    }
  }
  return arr2;
};

 

7. Increment the Array Elements

const Inc_Arr = (arr,N) => 
{
  for(let i = 0; i < N; i++){
    arr[i] += 1;
  }
  console.log(...arr);
};



8. Pass or Fail


const isAllPass = (N, arr) => 
{
  let x = true;
  for(let i = 0; i < N; i++){
    if(arr[i] < 32){
      x = false;
      break;
    }
    else{
      x = true;
    }
  }
  if(x === true){
    return "YES";
  }
  else{
    return "NO";
  }
};



9. Unique Color Shirt

function Unique_Shirts (arr,N) {
    arr = arr.sort();
    let count = 0;
    for(let i = 0; i < N; i++){
      if((arr[i-1] === arr[i]) || (arr[i] === arr[i+1])){
        count += 1;
      }
    }
    return (N - count);
  }



  10. Min and Max


  function arrayMin(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  
  function arrayMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
    }
    return max;
  }


  11. Birthday Game

  
  function Birthday_Game(arr,D ,M) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++){
        let subArray = arr.slice(i, i+M);
        if (subArray.length === M){
        let sum = subArray.reduce((a,b) => a+b , 0);
        if(sum === D){
            count += 1;
        }
        }
    }
    return count;
    }






