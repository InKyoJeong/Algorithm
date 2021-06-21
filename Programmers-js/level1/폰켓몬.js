function solution(nums) {
  let answer = 0;
  let sh = new Map();
  let half = nums.length / 2;
  for (let x of nums) {
    if (sh.has(x)) {
      sh.set(x, sh.get(x) + 1);
    } else {
      sh.set(x, 1);
    }
  }

  answer = sh.size >= half ? half : sh.size;

  return answer;
}

// 해시로 중복제거한 개수 구하고, 반 나눈 개수랑 비교하여 풀었는데
// Set을 배열로 변환해서 간단히 할수 있다.

function solution(nums) {
  let half = nums.length / 2;
  let sh = [...new Set(nums)];
  return sh.length >= half ? half : sh.length;
}
