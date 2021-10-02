function solution(n) {
  var answer = [];
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let temp = Array.from({ length: i }, () => 0);
    arr.push(temp);
  }

  let number = 1;
  let x = -1;
  let y = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) {
        x++;
      }
      if (i % 3 === 1) {
        y++;
      }

      if (i % 3 === 2) {
        x--;
        y--;
      }
      arr[x][y] = number;
      number++;
    }
  }
  // console.log(arr)

  return arr.flatMap((e) => e);
}
// 빈칸 만들고 아래,오른쪽,위 순서로 좌표이동하면서 채우기.
