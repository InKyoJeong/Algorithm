// 5를 3번사용해서 만들수있는수: 5를 2번사용한 수랑 1번사용한 수의 사칙연산 , 5를 1번사용한 수랑 2번사용한 수의 사칙연산

// 4 = 3+1, 2+2, 1+3 이런식이랑 같다

function solution(N, number) {
  const set = new Array(8).fill().map(() => new Set());

  for (let i = 0; i < 8; i++) {
    set[i].add(parseInt(N.toString().repeat(i + 1)), 10);
    for (let j = 0; j < i; j++) {
      for (const x of set[j]) {
        for (const y of set[i - j - 1]) {
          set[i].add(x + y);
          set[i].add(x - y);
          set[i].add(x * y);
          set[i].add(x / y);
        }
      }
    }
    if (set[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
}
