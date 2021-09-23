function solution(jobs) {
  var answer = 0;
  jobs.sort((a, b) => a[0] - b[0]);
  const pq = [];
  let i = 0;
  let time = 0;
  // 대기열이 없고 우선순위 큐가 비어있지 않은동안 반복 (둘중 하나라도 해당되면 반복)
  while (i < jobs.length || pq.length !== 0) {
    if (i < jobs.length && jobs[i][0] <= time) {
      // 작업시간동안 들어온요청 다 넣기
      pq.push(jobs[i]);
      i++;
      pq.sort((a, b) => a[1] - b[1]);
      // console.log(pq)
      continue;
    }
    // console.log('-----')
    if (pq.length === 0) {
      // 일단 작업 비어있으면 첫작업을 time으로
      time = jobs[i][0];
    } else {
      let [start, work] = pq.shift();
      answer += time + work - start;
      time += work;
    }
  }

  return parseInt(answer / jobs.length);
}

// 첫작업은 가장빨리 들어온대로,
// 이후에는 그 작업을 처리하는 동안 들어온 요청을 pq로 다 받는다.
// 그리고 작업이끝나면 pq중에 처리시간이 짧은것부터 처리한다. (= 길이순서로 정렬)
// 이런식으로 작업은 jobs의 작업들이 모두 끝날때 까지 계속

// 우선순위 큐가 다 비었는데, 작업이 아직 남아있다면
// jobs의 첫번째 배열에있는 작업을 실행 = 즉, 요청의 시간순으로 다시 실행

// [ [ 0, 3 ] ]
// -----
// [ [ 1, 9 ] ]
// [ [ 2, 6 ], [ 1, 9 ] ]
// -----
// -----
