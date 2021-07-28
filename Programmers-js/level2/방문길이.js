function solution(dirs) {
  var answer = 0;
  let dx = [0, 1, 0, -1]; //URDL
  let dy = [1, 0, -1, 0];
  let input = {
    U: 0,
    R: 1,
    D: 2,
    L: 3,
  };

  let x = 5;
  let y = 5;
  let v = [];

  for (let i = 0; i < dirs.length; i++) {
    let direction = input[dirs[i]];
    let nx = x + dx[direction];
    let ny = y + dy[direction];
    if (0 <= nx && nx <= 10 && 0 <= ny && ny <= 10) {
      if (
        v.includes(`${x}${y}${nx}${ny}`) === false &&
        v.includes(`${nx}${ny}${x}${y}`) === false
      ) {
        v.push(`${x}${y}${nx}${ny}`);
        v.push(`${nx}${ny}${x}${y}`);
        answer++;
      }

      x = nx;
      y = ny;
    }
  }
  //   console.log(v);
  return answer;
}
