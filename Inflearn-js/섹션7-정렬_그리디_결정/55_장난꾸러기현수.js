function solution(arr) {
  let answer = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
  }

  for (let i = 0; i < arr2.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < arr2.length; j++) {
      if (arr2[index] > arr2[j]) {
        index = j;
      }
    }
    [arr2[index], arr2[i]] = [arr2[i], arr2[index]];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

/////////////
////// slice, sort
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
