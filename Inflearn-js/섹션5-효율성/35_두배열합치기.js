// 두 배열 합치기

// sort : O(nlogn)
function solution(arr1, arr2) {
  let answer = [];
  let n1 = arr1.length;
  let n2 = arr2.length;

  for (let i = 0; i < n1; i++) {
    answer.push(arr1[i]);
  }
  for (let i = 0; i < n2; i++) {
    answer.push(arr2[i]);
  }
  answer.sort((a, b) => a - b);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

// 투포인터 : O(n+m)
function solution(arr1, arr2) {
  let answer = [];
  // let n1 = arr1.length;
  // let n2 = arr2.length;

  // let p1 = 0;
  // let p2 = 0;
  // while (p1 < n1 && p2 < n2) {
  //   if (arr1[p1] <= arr2[p2]) {
  //     answer.push(arr1[p1++]); // push 하고, 증가
  //   } else {
  //     answer.push(arr2[p2++]);
  //   }
  // }
  // // 누가 남았는지 모르므로
  // while (p1 < n1) {
  //   answer.push(arr1[p1++]);
  // }
  // while (p2 < n2) {
  //   answer.push(arr2[p2++]);
  // }

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
