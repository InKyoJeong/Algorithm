function solution(N, stages) {
  var answer = [];
  let clear = Array.from({ length: N + 1 }, () => 0);
  let noClear = Array.from({ length: N + 1 }, () => 0);
  let fail = Array.from({ length: N + 1 }, () => 0);

  // 스테이지에 도달한 플레이어 수
  // 아직 클리어 못한 플레이어 수
  for (let i = 1; i <= N; i++) {
    clear[i] = stages.filter((e) => e >= i).length;
    noClear[i] = stages.filter((e) => e === i).length;
  }
  // 각 실패율 계산하고, 객체에 넣기
  let obj = {};
  for (let i = 1; i <= N; i++) {
    fail[i] = noClear[i] / clear[i];
    obj[i] = fail[i];
  }
  // 배열로 만들어서 값에따라 정렬하고 인덱스 추출
  let arr = [];
  for (let i in obj) {
    arr.push([i, obj[i]]);
  }
  arr.sort((a, b) => (b[1] === a[1] ? a[1] - b[1] : b[1] - a[1]));

  for (let x of arr) {
    answer.push(Number(x[0]));
  }
  return answer;
}

//////
//리팩토링
function solution(N, stages) {
  var answer = [];
  let clear = Array.from({ length: N + 1 }, () => 0);
  let noClear = Array.from({ length: N + 1 }, () => 0);

  let arr = [];
  for (let i = 0; i < N; i++) {
    clear[i] = stages.filter((e) => e >= i + 1).length;
    noClear[i] = stages.filter((e) => e === i + 1).length;
    arr[i] = [i, noClear[i] / clear[i]];
  }

  arr.sort((a, b) => (b[1] === a[1] ? a[1] - b[1] : b[1] - a[1]));

  for (let x of arr) {
    answer.push(x[0] + 1);
  }
  return answer;
}
