function range(start, end) {
  let num =[];
  for(let i = 0; i <= (end - start); i++) {
    if(i == 0) {
      num[i] = start;
    }
    else{
      num[i] = num[i - 1]+ 1;
    }     
  }
  return num;
}

function sum(numList) {
  let total = 0;
  for(let i = 0; i < numList.length; i++) {
    total = total + numList[i];
  } 
  return total;
}

console.log(sum(range(1, 10)));