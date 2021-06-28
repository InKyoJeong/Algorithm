function solution(n, arr1, arr2) {
  var answer = [];
  let solve1 = [];
  let solve2 = [];
  for (let i = 0; i < n; i++) {
    solve1.push([...arr1[i].toString(2)]);
    solve2.push([...arr2[i].toString(2)]);
    while (solve2[i].length < n) {
      solve2[i].unshift("0");
    }
    while (solve1[i].length < n) {
      solve1[i].unshift("0");
    }
  }

  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      Number(solve1[i][j]) || Number(solve2[i][j])
        ? (temp += "#")
        : (temp += " ");
    }
    answer.push(temp);
  }
  return answer;
}

/////
// 비트 연산
function solution(n, arr1, arr2) {
  var answer = arr1.map((item, index) => {
    let bitOr = item | arr2[index];
    let binary = bitOr.toString(2);

    if (binary.length < n) {
      binary = "0".repeat(n - binary.length) + binary;
    }
    return binary.replace(/1/g, "#").replace(/0/g, " ");
  });

  return answer;
}
