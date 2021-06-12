// 졸업 선물
// 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰
// 첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)
// 두 번째 줄부터 (가격, 배송비)

// 하나씩 할인받았다고 하고 모든경우해보기
function solution(m, product) {
  let answer = 0;
  // let n = product.length;
  // product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // for (let i = 0; i < n; i++) {
  //   let money = m - (product[i][0] / 2 + product[i][1]);
  //   let cnt = 1;
  //   for (let j = 0; j < n; j++) {
  //     if (j !== i && product[j][0] + product[j][1] > money) {
  //       break;
  //     }
  //     if (j !== i && product[j][0] + product[j][1] <= money) {
  //       money -= product[j][0] + product[j][1];
  //       cnt++;
  //     }
  //   }
  //   answer = Math.max(answer, cnt);
  // }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
