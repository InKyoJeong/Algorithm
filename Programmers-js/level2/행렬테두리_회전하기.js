function solution(rows, columns, queries) {
  var answer = [];
  let table = Array.from({ length: rows + 1 }, () =>
    Array(columns + 1).fill(0)
  );

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      table[i][j] = (i - 1) * columns + j;
    }
  }
  // console.log(table)
  let n = queries.length;

  for (let i = 0; i < n; i++) {
    let [x1, y1, x2, y2] = queries[i];

    let stack = [];

    // 위
    for (let j = y1; j < y2; j++) {
      stack.push(table[x1][j]);
    }
    // 오른
    for (let j = x1; j < x2; j++) {
      stack.push(table[j][y2]);
    }
    // 아래
    for (let j = y2; j > y1; j--) {
      stack.push(table[x2][j]);
    }
    // 왼
    for (let j = x2; j > x1; j--) {
      stack.push(table[j][y1]);
    }
    // console.log(stack);

    answer.push(Math.min(...stack));
    let x = stack.pop();
    stack.unshift(x);

    for (let j = y1; j < y2; j++) {
      table[x1][j] = stack.shift();
    }
    for (let j = x1; j < x2; j++) {
      table[j][y2] = stack.shift();
    }
    for (let j = y2; j > y1; j--) {
      table[x2][j] = stack.shift();
    }
    for (let j = x2; j > x1; j--) {
      table[j][y1] = stack.shift();
    }
  }

  return answer;
}
