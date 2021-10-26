function findMaxCount(arrCase, k) {
  let maxCount = 0;

  arrCase.forEach((arr) => {
    let energy = k;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (energy >= arr[i][0]) {
        energy -= arr[i][1];
        count++;
      } else {
        break;
      }
    }
    maxCount = Math.max(maxCount, count);
  });

  return maxCount;
}

function solution(k, dungeons) {
  let arrCase = [];
  let n = dungeons.length;

  let temp = Array.from({ length: n }, () => 0);
  let check = Array.from({ length: n }, () => 0);

  function DFS(L) {
    if (L === n) {
      arrCase.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = dungeons[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }
  DFS(0);

  return findMaxCount(arrCase, k);
}
