// 건널수있는지 없는지 체크하는 함수
// 연속된 0이하가 k개 이상나오면x

function checkStone(stones, mid, k) {
  let check = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] <= mid) {
      check++;
    } else {
      check = 0;
    }
    if (check >= k) {
      return false;
    }
  }
  return true;
}

function solution(stones, k) {
  var answer = 0;
  let start = 1;
  let end = 200000000;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // 건너기 가능한 경우
    if (checkStone(stones, mid, k)) {
      start = mid + 1;
      // 못건너는경우
    } else {
      end = mid - 1;
    }
  }

  return start;
}

// 이분탐색: 어떤 중간값이 건널수있으면, 그전만큼 인원은 모두 건널수 있다.
