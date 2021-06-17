// https://programmers.co.kr/learn/courses/30/lessons/77484

// 처음에 너무 복잡하게 푼거같다. 처음엔 투포인터를 이용했는데, includes를 이용하면 간단히 가능하고,
// 등수를 구할때는 7에서 빼지말고 배열로 하면 된다.

function solution(lottos, win_nums) {
  let answer = [];

  // 먼저 같은 번호를 배열에 넣어 개수구하기
  let same = [];

  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;

  while (p1 < lottos.length && p2 < win_nums.length) {
    if (lottos[p1] === win_nums[p2]) {
      same.push(lottos[p1]);
      p1++;
      p2++;
    } else {
      if (lottos[p1] >= win_nums[p2]) {
        p2++;
      } else {
        p1++;
      }
    }
  }

  // 0의 개수 구하기
  let zero = 0;
  for (let x of lottos) {
    if (x === 0) {
      zero++;
    }
  }

  let x = same.length + zero; // 최고 일치
  let y = same.length; // 최저 일치

  if (x === 0) x = 1;
  if (y === 0) y = 1;

  answer.push(7 - x, 7 - y);

  return answer;
}

///////////
// includes, filter를 사용하기
function solution(lottos, win_nums) {
  let answer = [];
  const rank = [6, 6, 5, 4, 3, 2, 1];

  // 최저 일치 개수
  const worse = lottos.filter((v) => win_nums.includes(v)).length;
  // 0의 개수
  const better = lottos.filter((v) => v === 0).length;

  answer.push(rank[worse + better]);
  answer.push(rank[worse]);

  return answer;
}
