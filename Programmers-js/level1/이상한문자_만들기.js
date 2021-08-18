function solution(s) {
  let answer = [];
  let words = s.split(" ");
  for (let word of words) {
    answer.push(toUpper(word));
  }
  return answer.join(" ");
}

function toUpper(word) {
  const n = word.length;
  let ans = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      ans += word[i].toUpperCase();
    } else {
      ans += word[i].toLowerCase();
    }
  }
  return ans;
}
