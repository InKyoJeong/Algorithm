function solution(tickets) {
  var answer = [];

  function DFS(t, start, arr) {
    if (t.length === 0) {
      answer.push(arr);
      return;
    } else {
      for (let i = 0; i < t.length; i++) {
        if (t[i][0] === start) {
          let arrCopy = arr.slice();
          arrCopy.push(t[i][1]);
          let temp = t.slice();
          temp.splice(i, 1);
          DFS(temp, t[i][1], arrCopy);
        }
      }
    }
  }

  DFS(tickets, "ICN", ["ICN"]);

  return answer.sort()[0];
}
