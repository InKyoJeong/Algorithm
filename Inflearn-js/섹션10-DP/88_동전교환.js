function solution(m, coin) {
  let answer = 0;
  // let d = Array.from({ length: m + 1 }, () => 999);
  // let n = coin.length;

  // // d[i] : i원을 거슬러주는데 사용된 최소 동전 개수
  // // 1원부터 쭉 넣고 그다음 2원 그다음 5원 넣고 작은거 계속 비교.

  // d[0] = 0;

  // for (let i = 0; i < n; i++) {
  //   for (let j = coin[i]; j <= m; j++) {
  //     d[j] = Math.min(d[j], d[j - coin[i]] + 1);
  //   }
  // }

  // answer = d[m];
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
