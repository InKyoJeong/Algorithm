function solution(nums) {
  let answer = 0;
  let n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let temp = nums[i] + nums[j] + nums[k];
        if (isPrime(temp)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  } else {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}
