function solution(s) {
  for (let i = s.length; i >= 1; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      if (isPalindrome(s.slice(j, i + j))) {
        return i;
      }
    }
  }
}

function isPalindrome(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// 처음길이 안되면 길이 하나씩 줄이기
// ex) 0-6  => 0-5 1-6 => 04 15 26 => 03 14 25 36
