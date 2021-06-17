// 공통원소 구하기
function solution(arr1, arr2) {
  let answer = [];
  // arr1.sort((a, b) => a - b);
  // arr2.sort((a, b) => a - b);
  // let p1 = 0;
  // let p2 = 0;
  // while (p1 < arr1.length && p2 < arr2.length) {
  //   if (arr1[p1] === arr2[p2]) {
  //     answer.push(arr1[p1]);
  //     p1++;
  //     p2++;
  //   } else {
  //     if (arr1[p1] <= arr2[p2]) {
  //       p1++;
  //     } else {
  //       p2++;
  //     }
  //   }
  // }

  return answer;
}

let a = [1, 3, 9, 5, 2, 10];
let b = [3, 2, 5, 7, 8, 11];
console.log(solution(a, b));

//////////////////////////////
// 투포인터말고 includes 써보기
function solution(arr1, arr2) {
  let answer = [];

  const same = arr1.filter((v) => arr2.includes(v)).sort((a, b) => a - b);
  answer = same;

  return answer;
}

let a = [1, 3, 9, 5, 2, 10];
let b = [3, 2, 5, 7, 8, 11];
console.log(solution(a, b));
