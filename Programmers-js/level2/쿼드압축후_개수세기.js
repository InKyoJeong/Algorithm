// 첫번째랑 다 같은지 체크하고  다르면 재귀돌려서 나누기
function solution(arr) {
  let n = arr.length;
  let temp = [0, 0];

  function splitArr(half, startX, startY) {
    let check = true;
    for (let i = startX; i < startX + half; i++) {
      for (let j = startY; j < startY + half; j++) {
        if (arr[i][j] !== arr[startX][startY]) {
          check = false;
          break;
        }
      }
      if (!check) break;
    }

    if (!check) {
      splitArr(half / 2, startX, startY);
      splitArr(half / 2, startX + half / 2, startY);
      splitArr(half / 2, startX, startY + half / 2);
      splitArr(half / 2, startX + half / 2, startY + half / 2);
    }
    if (check) {
      temp[arr[startX][startY]]++;
    }
  }

  splitArr(n, 0, 0);

  return temp;
}
