function solution(record) {
  var answer = [];

  // 먼저 배열로 나눠서 저장
  let arr = [];
  for (let i = 0; i < record.length; i++) {
    let x = record[i].split(" ");
    arr.push(x);
  }

  // id와 사람 저장
  let temp = {};
  for (let x of arr) {
    if (x.length === 3) {
      temp[x[1]] = x[2];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "Enter") {
      answer.push(temp[arr[i][1]] + "님이 들어왔습니다.");
    }
    if (arr[i][0] === "Leave") {
      answer.push(temp[arr[i][1]] + "님이 나갔습니다.");
    }
  }
  return answer;
}
