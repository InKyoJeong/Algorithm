function solution(s) {
  var answer = [];
  // 먼저 배열로 변환
  let temp = "";
  for (let i = 2; i < s.length - 2; i++) {
    temp += s[i];
  }
  let arr = temp.split("},{");

  // 각각 배열에 담기
  let list = [];
  for (let x of arr) {
    list.push(x.split(","));
  }

  // 개수 크기 순서대로 정렬을 하고
  list.sort((a, b) => a.length - b.length);

  // 한개짜리가 나오면 답에 푸시, 모든배열에서 빼기
  while (list.length) {
    let front = list.shift().join();
    answer.push(parseInt(front, 10));
    list = list.map((v) => {
      return v.filter((e) => e !== front);
    });
  }

  return answer;
}

////////
// 다른사람 풀이참고
// v중에 arr에 존재하지않는거를 arr에 concat
function solution(s) {
  return JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, i) => {
      console.log(arr, v, i);
      if (i) {
        return arr.concat(v.filter((num) => !arr.includes(num)));
      }
      return v;
    }, []);
}
