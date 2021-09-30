// 참고한 풀이
// 진출 기준 오름차순 정렬
// 카메라보다 진입이 크면 진출로 카메라이동
//   -18    -13     카메라 -13/1개
//      -14      -5
//               -5    -3   카메라 -3/2개
// -20                          15
function solution(routes) {
  var answer = 0;
  routes.sort((a, b) => {
    return a[1] - b[1];
  });
  let camera = -30001;
  for (let i = 0; i < routes.length; i++) {
    if (camera < routes[i][0]) {
      answer++;
      camera = routes[i][1];
    }
  }
  return answer;
}

// 다르게 풀어본 풀이
// 진입 기준 오름차순 정렬
// 처음에 맨끝을 카메라에 놓고
// 카메라가 다음거의 끝보다 크면 끝으로 이동
// 카메라가 다음거의 시작보다 작으면, 안겹치는거니까 다시 끝으로 옮기고 1대설치
// -20                    15
//   -18    -13
//      -14     -5
//
function solution(routes) {
  let answer = 0;
  routes.sort((a, b) => {
    return a[0] - b[0];
  });
  let camera = routes[0][1];
  answer = 1;
  for (let i = 1; i < routes.length; i++) {
    if (camera > routes[i][1]) {
      camera = routes[i][1];
    }
    if (camera < routes[i][0]) {
      camera = routes[i][1];
      answer++;
    }
  }

  return answer;
}
