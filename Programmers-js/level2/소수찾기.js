function permutation(arr, count) {
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let temp = Array.from({ length: count }, () => 0);
  let ans = [];

  function DFS(L) {
    if (L === count) {
      ans.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return ans;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  } else {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
}

function solution(numbers) {
  var answer = 0;
  let n = numbers.length;
  let numArr = numbers.split("");

  // 먼저 수의 순열을 구하고
  let allNum = [];
  for (let i = 1; i <= n; i++) {
    let x = permutation(numArr, i);
    allNum.push(...x);
  }

  // 문자로 합쳐서 중복 제거하고
  let pickNum = [];
  for (let x of allNum) {
    pickNum.push(Number(x.join("")));
  }
  let set = [...new Set(pickNum)];

  // 각각 소수인지 판별
  for (let x of set) {
    if (isPrime(x)) {
      answer++;
    }
  }

  return answer;
}
