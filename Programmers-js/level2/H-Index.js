function solution(citations) {
  var answer = 0;

  let temp = [];
  for (let i = 0; i <= citations.length; i++) {
    let test = citations.filter((v) => v >= i).length;
    if (test >= i) {
      temp.push(i);
    }
  }

  answer = Math.max(...temp);
  return answer;
}

// h 지수는 그 사람이 쓴 모든 논문 중 n회 이상 인용된 논문이 n개 이상일 때, 이 둘을 동시에 만족하는 n의 최대값

// 다른사람풀이
function solution(citations) {
  citations.sort((a, b) => b - a);
  var i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
//  내림차순으로 소팅하고 논문 인용회수를 하나씩 돌면서, n회이상 인용된 논문이 n개 보다 같거나 클 때 구하기
