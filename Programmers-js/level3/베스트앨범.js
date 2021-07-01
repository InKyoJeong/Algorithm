function solution(genres, plays) {
  var answer = [];
  let sH = new Map();
  let n = genres.length;

  for (let i = 0; i < n; i++) {
    let x = genres[i];
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + plays[i]);
    } else {
      sH.set(x, plays[i]);
    }
  }

  // 총합 재생수로 정렬
  let total = [];
  for (let [key, value] of sH) {
    total.push([key, value]);
  }
  total.sort((a, b) => b[1] - a[1]);

  // 개별곡 배열에 저장
  let one = [];
  for (let i = 0; i < n; i++) {
    one.push([genres[i], plays[i], i]);
  }
  one.sort((a, b) => b[1] - a[1]);

  // 이름 같은거 두개 이하씩만 저장
  for (let i = 0; i < total.length; i++) {
    let temp = [];
    one.forEach((e) => {
      if (e[0] === total[i][0]) {
        temp.push(e[2]);
      }
    });
    temp = temp.slice(0, 2);
    answer.push(...temp);
  }

  return answer;
}
