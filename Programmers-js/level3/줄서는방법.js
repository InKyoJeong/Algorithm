// 효율성 실패: answer에 순열 다 저장하고 k번째 됐을때 리턴
// n의 최댓값은 20이고 20!은 매우 크므로 k번째만 구할수있는 방법을 생각해야함
function solution(n, k) {
  var answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);
  let temp = Array.from({ length: n }, () => 0);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  function DFS(L) {
    if (answer.length === k) {
      return;
    }
    if (L === n) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }
  DFS(0);
  //   console.log(answer);

  return answer[k - 1];
}

// 참고한풀이
function solution(n, k) {
  var answer = [];

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let fac = arr.reduce((a, v) => a * v, 1);

  k--;
  while (arr.length) {
    fac = fac / arr.length;
    let index = Math.floor(k / fac);
    let num = arr[index];
    answer.push(num);
    k = k % fac;
    arr.splice(index, 1);
  }

  return answer;
}
// 모든경우는 n!
// 각각이 첫 번째 숫자로 오는 경우의 수 n!/n (= n-1! 가지)

// n=4, k=7 이면 [1,2,3,4]
// k-1 / 4!/4 = 6/6= 1인덱스가 첫번째.
// [1,3,4] 답[2]
// k= 6 % (3!/3) = 0
// 0인덱스가 첫번째
// 2134

// n=3, k=5 [1,2,3]
// k=k-1=4
// 각 블럭은 3!/3 = 2
// k/블럭이 인덱스, k%블럭이 다음 k
// 4 / (3!/3) = 4/2 = 2 인덱스가  첫번째
// [1,2]  답[3]
// k= 4% (3!/3) = 0

// k=0 각블럭은 2!/2 = 1
// 0/1 = 인덱스0, 다음k는 0%1 =0
// [2] 답[3,1]
