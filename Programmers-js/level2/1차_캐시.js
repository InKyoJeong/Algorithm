function solution(cacheSize, cities) {
  let n = cities.length;
  let memory = Array.from({ length: cacheSize }, () => 0);

  let count = 0;

  for (let i = 0; i < n; i++) {
    cities[i] = cities[i].toLowerCase();
  }

  if (!cacheSize) {
    while (n) {
      count += 5;
      n--;
    }
    return count;
  }

  for (let i = 0; i < n; i++) {
    let temp = -1;
    for (let j = 0; j < memory.length; j++) {
      if (memory[j] === cities[i]) {
        temp = j;
      }
    }

    // chche miss
    if (temp === -1) {
      for (let i = memory.length - 1; i >= 1; i--) {
        memory[i] = memory[i - 1];
      }
      count += 5;
    } else {
      // chche hit
      for (let i = temp; i >= 1; i--) {
        memory[i] = memory[i - 1];
      }
      count += 1;
    }
    memory[0] = cities[i];
  }

  return count;
}
