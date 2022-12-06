function solution(queue1, queue2) {
  const sumQueue = [...queue1, ...queue2];
  const sum = sumQueue.reduce((a, b) => a + b, 0);
  const total = sum / 2;
  const n = queue1.length;

  let count = 0;
  let start = 0;
  let end = n;
  let range = sumQueue.slice(start, end).reduce((a, b) => a + b, 0);

  while (count <= n * 4) {
    if (range > total) {
      range -= sumQueue[start];
      start++;
    } else if (range < total) {
      range += sumQueue[end];
      end++;
    } else if (range === total) {
      return count;
    }
    count++;
  }

  return -1;
}
