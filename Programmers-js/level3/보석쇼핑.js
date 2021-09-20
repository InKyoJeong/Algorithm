// 처음에 전체로 잡고
// 투포인터를 이용해서 map 길이 같은것 찾기

function solution(gems) {
  var answer = [1, gems.length];

  const set = new Set(gems);
  const minSize = [...set].length;
  let l = 0,
    r = 0;

  let sH = new Map();
  sH.set(gems[0], 1);

  while (r < gems.length) {
    if (sH.size === minSize) {
      // 길이 더 짧은거
      if (answer[1] - answer[0] > r - l) {
        answer = [l + 1, r + 1];
      }
      sH.set(gems[l], sH.get(gems[l]) - 1);
      if (sH.get(gems[l]) === 0) {
        sH.delete(gems[l]);
      }
      l++;
    } else {
      r++;
      if (sH.get(gems[r])) {
        sH.set(gems[r], sH.get(gems[r]) + 1);
      } else {
        sH.set(gems[r], 1);
      }
    }
  }

  return answer;
}
