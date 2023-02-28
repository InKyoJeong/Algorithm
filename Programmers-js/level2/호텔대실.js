function changeMinTime(time) {
  const [hour, min] = time.split(":");
  return Number(hour) * 60 + Number(min);
}

function solution(book_time) {
  const booktimes = book_time.map(([start, end]) => [
    changeMinTime(start),
    changeMinTime(end),
  ]);

  const maxTime = Math.max(...booktimes.flat()) + 10;
  const record = Array.from({ length: maxTime + 1 }, () => 0);

  booktimes.forEach(([start, end]) => {
    record[start]++;
    record[end + 10]--;
  });

  for (let i = 1; i < record.length; i++) {
    record[i] = record[i] + record[i - 1];
  }

  return Math.max(...record);
}
