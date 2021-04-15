// 멘토링
// (3, 1), (3, 2), (4, 2)와 같이 3가지 경우의 (멘토, 멘티) 짝을 만들 수 있다.

function solution(test) {
  let answer = 0;
  let n = test.length;
  let m = test[0].length;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= m; j++) {
      let cnt = 0;
      for (let k = 0; k < n; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < m; s++) {
          if (test[k][s] === i) {
            pi = s;
          }
          if (test[k][s] === j) {
            pj = s;
          }
        }
        if (pi < pj) {
          cnt++;
        }
      }
      if (cnt === n) {
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

// 첫 번째 for문의 인덱스인 i는 멘토가 되는 학생의 번호 (1부터 n번까지)
// 두 번째 for문의 인덱스인 j는 멘티가 되는 학생의 번호 (1부터 n번까지)
// 세 번째 for문의 인덱스인 k는 수학 테스트 번호 (0번째 테스트부터 m-1번째 트스트까지)
// 네 번째 for문의 인덱스인 s는 각 테스트에서의 등수 (0등부터 n-1등까지)

// if(test[k][s]===i) pi = s;
// 위에 코드의 test[k][s]의 값은  k번째 테스트에서 s등을 하는 학생의 번호입니다. 즉
// if(test[k][s]===i) 이 참이되면 s는 i번 학생의 등수가 되는 것이고 그것을 pi에 저장하는 것입니다.
// 따라서 pi는 멘토가 되는 i번 학생의 등수인 것입니다.
// 그러면 pj는 멘티가 되는 j번 학생의 등수가 되겠죠.
