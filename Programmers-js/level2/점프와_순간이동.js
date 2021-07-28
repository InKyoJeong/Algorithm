function solution(n) {
  var ans = 0;

  // X2 순간이동시 건전지 안들고, K칸 점프시 K건전지
  // 먼저 절반만들고 홀수면 -1
  while (n) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n - 1;
      ans++;
      n = n / 2;
    }
  }
  return ans;
}
