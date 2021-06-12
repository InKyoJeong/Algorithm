// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

// // size 는 key의 종류
// function compareMaps(map1, map2) {
//   // 일단 사이즈 비교
//   if (map1.size !== map2.size) {
//     return false;
//   }
//   // 키가 동일하게 있는지 비교,
//   // 키의 value 값 비교 (map2에서의 value와 map1의 value비교)
//   for (let [key, value] of map1) {
//     if (!map2.has(key) || map2.get(key) !== value) {
//       return false;
//     }
//   }
//   return true;
// }

function solution(s, t) {
  let answer = 0;

  //   let tH = new Map();
  //   let sH = new Map();

  //   // t의 해시부터 저장
  //   for (let x of t) {
  //     if (tH.has(x)) {
  //       tH.set(x, tH.get(x) + 1);
  //     } else {
  //       tH.set(x, 1);
  //     }
  //   }

  //   // s의 처음 두개 세팅
  //   let len = t.length - 1;
  //   for (let i = 0; i < len; i++) {
  //     if (sH.has(s[i])) {
  //       sH.set(s[i], sH.get(s[i]) + 1);
  //     } else {
  //       sH.set(s[i], 1);
  //     }
  //   }

  //   let lt = 0;
  //   // 추가하고 비교하고 빼기
  //   for (let rt = len; rt < s.length; rt++) {
  //     if (sH.has(s[rt])) {
  //       sH.set(s[rt], sH.get(s[rt]) + 1);
  //     } else {
  //       sH.set(s[rt], 1);
  //     }
  //     if (compareMaps(sH, tH)) {
  //       answer++;
  //     }

  //     sH.set(s[lt], sH.get(s[lt]) - 1);
  //     // 0이면 이제 이 키는 존재하지않으므로 키자체를 삭제하기
  //     if (sH.get(s[lt]) === 0) {
  //       sH.delete(s[lt]);
  //     }
  //     lt++;
  //   }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
